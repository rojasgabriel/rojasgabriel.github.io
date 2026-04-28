---
layout: page
permalink: /background-papers/
title: Thesis Background
description: Literature that frames my thesis questions on movement, visual processing, behavioral state, and neural population dynamics.
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
      <p class="paper-note">Niell and Stryker recorded from V1 in head-fixed mice during passive visual stimulation while the animals alternated between quiescence and locomotion. They found that locomotion increased visually evoked responses and shifted ongoing activity, showing that visual cortical responses depend on behavioral state.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2013</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Bennett2013Subthreshold]* %}</div>
      <p class="paper-note">Bennett and colleagues used intracellular recordings in head-fixed mouse V1 during passive viewing to compare quiet and locomoting states. They found that locomotion-related state changes altered both spontaneous membrane-potential fluctuations and visually evoked responses, with reduced trial-to-trial variability.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2017</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Dadarlat2017Locomotion]* %}</div>
      <p class="paper-note">Dadarlat and Stryker analyzed visual encoding in head-fixed mouse V1 during passive viewing under quiescent and locomoting states. They found that locomotion improved stimulus discriminability and encoding quality, not just overall response gain.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2014</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Lee2014Brainstem]* %}</div>
      <p class="paper-note">Lee et al. identified a brainstem circuit that regulates visual cortical state in head-fixed mice, alongside but separable from locomotion itself. They found that activating this pathway reproduced locomotion-like changes in V1 activity, indicating that state modulation arises from specific subcortical circuitry rather than movement alone.</p>
    </div>

  </section>

  <section class="background-section">
    <h2>Active vision and natural behavior</h2>

    <div class="background-entry">
      <p class="paper-year">2018</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Campbell2018SelfMotion]* %}</div>
      <p class="paper-note">Campbell and Giocomo reviewed work on how self-motion signals are integrated with visual processing across visual and entorhinal cortex. They argued that movement-related signals are part of normal visual computation during active behavior, not just a nuisance variable added on top of sensory responses.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2022</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Parker2022JointCoding]* %}</div>
      <p class="paper-note">Parker et al. recorded V1 activity in freely moving mice while tracking visual input, eye position, and head position during natural behavior. They found that V1 neurons jointly encoded visual input together with eye and head posture, showing that natural visual coding is inherently movement-linked.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2023</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Parker2023GazeShifts]* %}</div>
      <p class="paper-note">Parker et al. measured V1 responses around gaze shifts in freely moving mice during natural visual behavior. They found that gaze shifts triggered a stereotyped temporal sequence of visual responses, showing that active sampling structures when visual processing unfolds.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2018</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Odoemene2018VisualEvidence]* %}</div>
      <p class="paper-note">Odoemene et al. trained freely moving mice on a visual evidence accumulation task, so the relevant behavior here is task-driven rather than spontaneous. They found that mice accumulated sensory evidence over time to guide decisions, establishing a freely moving visual decision task.</p>
    </div>

  </section>

  <section class="background-section">
    <h2>Behavioral states</h2>

    <div class="background-entry">
      <p class="paper-year">2019</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Stringer2019Spontaneous]* %}</div>
      <p class="paper-note">Stringer et al. recorded neural activity during head-fixed conditions while measuring spontaneous, uninstructed behaviors rather than task behavior. They found that spontaneous facial and body movements explained a large multidimensional component of neural activity, including movement-related signals represented in V1 that were not directly tied to sensory exploration.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2019</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Musall2019SingleTrial]* %}</div>
      <p class="paper-note">Musall et al. used head-fixed mice performing a decision task and separated instructed task variables from other measured movements. They found that single-trial cortical activity was dominated by a wide range of movements, many of them uninstructed and distinct from the task itself.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2025</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Yin2025Spontaneous]* %}</div>
      <p class="paper-note">Yin et al. analyzed spontaneous movements during task performance together with latent engagement state, distinguishing ongoing spontaneous behavior from the task structure itself. They found that the relationship between movement and neural activity changed with engagement, so the same movements carried different neural correlates across states.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2022</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Ashwood2022Strategies]* %}</div>
      <p class="paper-note">Ashwood et al. fit behavioral models to mouse perceptual decision-making data, so this paper is about task behavior rather than spontaneous movement. They found that mice alternated between discrete latent strategies over time instead of following a single stable decision policy.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2009</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Cohen2009Attention]* %}</div>
      <p class="paper-note">Cohen and Maunsell recorded simultaneously from V4 neurons in monkeys during a task-driven attention paradigm. They found that attention improved performance primarily by reducing shared variability between neurons, rather than only increasing mean firing rates.</p>
    </div>

  </section>

  <section class="background-section">
    <h2>Modeling population structure</h2>

    <div class="background-entry">
      <p class="paper-year">2016</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Kobak2016dPCA]* %}</div>
      <p class="paper-note">Kobak et al. introduced demixed principal component analysis for population recordings with mixed task-related variables. They showed that the method separates activity into components aligned with distinct experimental factors while preserving temporal structure.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2015</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Rabinowitz2015Attention]* %}</div>
      <p class="paper-note">Rabinowitz et al. analyzed V4 population recordings during a task-driven attention condition in monkeys. They found that attention stabilized a shared gain signal across the population, reducing coordinated trial-to-trial variability.</p>
    </div>

    <div class="background-entry">
      <p class="paper-year">2019</p>
      <div class="publications">{% bibliography --group_by none --query @*[key=Whiteway2019Characterizing]* %}</div>
      <p class="paper-note">Whiteway et al. applied latent-variable models to cortical population recordings to characterize shared variability. They found that nonlinear latent-variable models captured structured shared activity better than simpler linear models.</p>
    </div>

  </section>
</div>
