(() => {
  const figure = document.getElementById("research-trial");
  if (!figure) return;

  const plot = figure.querySelector("svg");
  const cursor = plot.querySelector(".time-cursor");
  const slider = figure.querySelector("#research-trial-time");
  const readout = figure.querySelector("#research-trial-time-value");
  const channels = figure.querySelector("#research-trial-channel");
  const traces = plot.querySelectorAll("[data-channel]");
  const zero = 344;
  const unitsPerMillisecond = 8;

  function showTime() {
    const time = slider.valueAsNumber;
    const x = zero + time * unitsPerMillisecond;
    for (const attribute of ["x1", "x2"]) cursor.setAttribute(attribute, x);
    cursor.setAttribute("visibility", time === 0 ? "hidden" : "visible");
    readout.value = `${time.toFixed(1)} ms`;
    slider.setAttribute("aria-valuetext", readout.value);
  }

  slider.addEventListener("input", showTime);
  plot.addEventListener("click", (event) => {
    const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(plot.getScreenCTM().inverse());
    if (point.x < 104 || point.x > 584 || point.y < 28 || point.y > 449) return;
    slider.value = ((point.x - zero) / unitsPerMillisecond).toFixed(1);
    showTime();
  });
  figure.querySelector("#research-trial-reset").addEventListener("click", () => {
    slider.value = "0";
    showTime();
  });

  for (const trace of traces) {
    const id = trace.dataset.channel;
    channels.add(new Option(`Channel ${id}`, id));
  }
  channels.addEventListener("change", () => {
    for (const trace of traces) {
      trace.classList.toggle("is-muted", channels.value !== "" && channels.value !== trace.dataset.channel);
    }
  });

  showTime();
  figure.querySelector("#research-trial-controls").hidden = false;
})();
