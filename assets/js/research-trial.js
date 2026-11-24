(async () => {
  const figure = document.getElementById("research-trial");
  if (!figure) return;

  const video = figure.querySelector("video");
  const plot = figure.querySelector("#research-trial-plot");
  const status = figure.querySelector("#research-trial-status");
  const channels = figure.querySelector("#research-trial-channel");
  const traces = [...plot.querySelectorAll("[data-channel]")];
  const halfWindow = 900;
  const binSize = 9;
  let data;
  let samples;

  try {
    const response = await fetch(figure.dataset.voltage);
    if (!response.ok) throw new Error("Could not load voltage samples");
    data = await response.json();
    const bytes = Uint8Array.from(atob(data.samples), (char) => char.charCodeAt(0));
    const view = new DataView(bytes.buffer);
    samples = new Int16Array(bytes.length / 2);
    for (let i = 0; i < samples.length; i++) samples[i] = view.getInt16(i * 2, true);
  } catch {
    status.textContent = "The voltage traces could not be loaded.";
    return;
  }

  let drawnFrame = -1;
  function draw(mediaTime) {
    // The encoded clip has constant frame spacing. The sample indices come
    // from measured camera edges mapped into the probe clock for each frame.
    const frame = Math.max(0, Math.min(data.centers.length - 1, Math.floor(mediaTime * data.fps + 0.001)));
    if (frame === drawnFrame) return;
    drawnFrame = frame;
    const start = data.centers[frame] - halfWindow;
    const channelCount = data.channelIds.length;

    for (const [channel, trace] of traces.entries()) {
      const baseline = 53 + 41 * channel;
      const value = (offset) => samples[(start + offset) * channelCount + channel];
      const points = [];
      const point = (offset) => {
        const x = 104 + (offset * 480) / (2 * halfWindow);
        const y = baseline - value(offset) * 0.025; // 0.25 µV per count, 0.1 SVG units per µV.
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      };

      // Preserve the extrema and their order in each visual bin.
      for (let first = 0; first <= 2 * halfWindow; first += binSize) {
        let lo = first;
        let hi = first;
        for (let j = first + 1; j < first + binSize && j <= 2 * halfWindow; j++) {
          if (value(j) < value(lo)) lo = j;
          if (value(j) > value(hi)) hi = j;
        }
        points.push(point(Math.min(lo, hi)));
        if (lo !== hi) points.push(point(Math.max(lo, hi)));
      }
      trace.setAttribute("points", points.join(" "));
    }
  }

  for (const trace of traces) {
    const id = trace.dataset.channel;
    channels.add(new Option(`Channel ${id}`, id));
  }
  channels.addEventListener("change", () => {
    for (const trace of traces) {
      trace.classList.toggle("is-muted", channels.value !== "" && channels.value !== trace.dataset.channel);
    }
  });

  video.addEventListener("seeked", () => draw(video.currentTime));
  draw(video.currentTime);
  status.hidden = true;
  plot.hidden = false;

  if (video.requestVideoFrameCallback) {
    const update = (_, frame) => {
      draw(frame.mediaTime);
      video.requestVideoFrameCallback(update);
    };
    video.requestVideoFrameCallback(update);
  } else {
    const update = () => {
      draw(video.currentTime);
      if (!video.paused && !video.ended) requestAnimationFrame(update);
    };
    video.addEventListener("play", update);
    if (!video.paused) update();
  }
})();
