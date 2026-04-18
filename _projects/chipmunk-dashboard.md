---
layout: page
title: Chipmunk dashboard
description: An interactive dashboard for understanding behavior in a mouse visual decision-making task across animals and sessions.
importance: 1
category: tooling
---

Behavioral experiments quickly generate more sessions, metrics, and edge cases than can be understood from static plots alone. This is especially true for the chipmunk task, a mouse visual decision-making task used in our lab {% cite Odoemene2018VisualEvidence %}, where trial structure, timing, and performance can change substantially across animals and over training. However, most analysis code is written to make figures after a question has already been posed, rather than to help reveal the patterns that should shape the next question.

To address this, I built a web dashboard that displays behavior from this task across mice and sessions in an interactive format. The dashboard makes it possible to inspect accuracy, response timing, trial outcomes, water reward, and training trends quickly, which helps with both day-to-day experimental decisions and later analysis in the same behavioral framework used for the locomotion and sensory-encoding work {% cite Odoemene2018VisualEvidence %}{% cite Yin2025Spontaneous %}. Ultimately, this project provides the software layer that makes the behavioral side of the work easier to monitor, interpret, and communicate.
