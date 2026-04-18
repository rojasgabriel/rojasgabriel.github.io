---
layout: page
permalink: /background-papers/
title: Thesis Background
description: The literature that frames my thesis questions on movement, visual processing, behavioral state, and neural population dynamics.
nav: true
nav_order: 3
_styles: |
  .post-header .post-description {
    display: none;
  }

  .thesis-background {
    max-width: 48rem;
  }

  .thesis-background .background-section {
    margin-top: 2.5rem;
  }

  .thesis-background .background-section:first-child {
    margin-top: 0.5rem;
  }

  .thesis-background .background-section h2 {
    margin-bottom: 1.25rem;
  }

  .thesis-background .background-entry {
    margin: 0 0 1.75rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid var(--global-divider-color);
  }

  .thesis-background .background-entry:last-child {
    margin-bottom: 0;
  }

  .thesis-background .paper-year {
    margin: 0 0 0.35rem;
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: var(--global-text-color-light);
  }

  .thesis-background .publications {
    margin: 0;
  }

  .thesis-background .publications h2.bibliography,
  .thesis-background .publications .links,
  .thesis-background .publications .abbr {
    display: none;
  }

  .thesis-background .publications .row {
    display: block;
    margin: 0;
  }

  .thesis-background .publications .row > div {
    max-width: 100%;
    flex: 0 0 100%;
    padding: 0;
  }

  .thesis-background .publications ol.bibliography li {
    margin-bottom: 0;
  }

  .thesis-background .publications .title {
    font-size: 1rem;
    line-height: 1.45;
  }

  .thesis-background .publications .author,
  .thesis-background .publications .periodical {
    font-size: 0.95rem;
  }

  .thesis-background .publications .periodical {
    color: var(--global-text-color-light);
  }

  .thesis-background .paper-note {
    margin: 0.45rem 0 0;
    font-size: 0.95rem;
    line-height: 1.55;
    color: var(--global-text-color-light);
  }
---

<div class="thesis-background">
  <section class="background-section">
    <h2>Locomotion and visual cortex</h2>

    <div class="background-entry">
      <p class="paper-year">2010</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Niell2010Modulation]* %}</div>
      <p class="paper-note">Niell and Stryker recorded responses in mouse V1 while animals were either still or locomoting. They found that locomotion increased visually evoked responses and changed spontaneous activity, showing that visual cortical state depends on behavior.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2013</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Bennett2013Subthreshold]* %}</div>
      <p class="paper-note">Bennett and colleagues used intracellular recordings in mouse visual cortex to measure subthreshold activity across behavioral states. They found that state-dependent modulation of visual responses was accompanied by changes in membrane potential fluctuations and reduced response variability.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2017</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Dadarlat2017Locomotion]* %}</div>
      <p class="paper-note">Dadarlat and Stryker analyzed how locomotion affects population responses to visual stimuli in mouse V1. They found that locomotion improved the encoding of visual stimuli, not just overall response magnitude.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2014</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Lee2014Brainstem]* %}</div>
      <p class="paper-note">Lee et al. identified a brainstem circuit that regulates visual cortical state in parallel with locomotion. They found that activating this circuit reproduced locomotion-like changes in V1 activity, indicating that cortical state can be driven by specific subcortical inputs.</p>
    </div>

  </section>

  <section class="background-section">
    <h2>Active vision and natural behavior</h2>

    <div class="background-entry">
      <p class="paper-year">2018</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Campbell2018SelfMotion]* %}</div>
      <p class="paper-note">Campbell and Giocomo reviewed evidence on how self-motion signals are integrated with visual processing in visual and entorhinal cortex. They concluded that motion-related signals are a core component of spatial and visual representations rather than a secondary modulation.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2022</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Parker2022JointCoding]* %}</div>
      <p class="paper-note">Parker et al. recorded V1 activity in freely moving mice while tracking visual input, eye position, and head position. They found that V1 neurons jointly encoded visual information together with eye and head posture.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2023</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Parker2023GazeShifts]* %}</div>
      <p class="paper-note">Parker et al. measured visual cortical responses around gaze shifts in freely moving mice. They found that gaze shifts initiated a stereotyped temporal sequence of visual responses, indicating that active sampling structures the timing of cortical processing.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2018</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Odoemene2018VisualEvidence]* %}</div>
      <p class="paper-note">Odoemene et al. trained unrestrained mice on a visual evidence accumulation task and analyzed their choices over time. They found that mice accumulated visual evidence to guide decisions, establishing a freely moving version of the task.</p>
    </div>

  </section>

  <section class="background-section">
    <h2>Movement, engagement, and state</h2>

    <div class="background-entry">
      <p class="paper-year">2019</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Stringer2019Spontaneous]* %}</div>
      <p class="paper-note">Stringer et al. recorded neural activity across multiple brain areas while measuring spontaneous behaviors. They found that ongoing movements explained a large, multidimensional component of brainwide activity.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2019</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Musall2019SingleTrial]* %}</div>
      <p class="paper-note">Musall et al. used widefield imaging and behavioral measurements during task performance to separate movement-related and task-related signals. They found that single-trial cortical activity was dominated by a broad set of movements, many of them unrelated to the instructed task.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2025</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Yin2025Spontaneous]* %}</div>
      <p class="paper-note">Yin et al. analyzed spontaneous movements and neural activity during behavior together with latent engagement state. They found that the relationship between movement and neural activity fluctuated with engagement, so the same movements carried different neural correlates across states.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2022</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Ashwood2022Strategies]* %}</div>
      <p class="paper-note">Ashwood et al. fit behavioral models to mouse perceptual decision-making data to identify latent strategies. They found that mice alternated between discrete strategies over time rather than using a single stable decision policy.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2009</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Cohen2009Attention]* %}</div>
      <p class="paper-note">Cohen and Maunsell recorded simultaneously from V4 neurons while monkeys performed an attention task. They found that attention improved performance primarily by reducing interneuronal correlations, with smaller effects on mean firing rates.</p>
    </div>

  </section>

  <section class="background-section">
    <h2>Modeling population structure</h2>

    <div class="background-entry">
      <p class="paper-year">2016</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Kobak2016dPCA]* %}</div>
      <p class="paper-note">Kobak et al. introduced demixed principal component analysis for neural population data containing mixed task variables. They showed that the method separates population activity into components aligned with distinct experimental factors while preserving temporal structure.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2015</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Rabinowitz2015Attention]* %}</div>
      <p class="paper-note">Rabinowitz et al. analyzed population recordings in V4 during attention. They found that attention stabilized a shared gain signal across the population, reducing trial-to-trial variability in a coordinated way.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2019</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Whiteway2019Characterizing]* %}</div>
      <p class="paper-note">Whiteway et al. applied latent variable models to population recordings to characterize shared variability in cortex. They found that nonlinear latent-variable models captured structured shared activity better than simpler linear descriptions.</p>
    </div>

  </section>
</div>
