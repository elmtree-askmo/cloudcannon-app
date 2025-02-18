---
_schema: default
id: 85513
date: 2024-12-04
title: >-
    How is gain calculated in undamped systems?
article_title: >-
    How is gain calculated in undamped systems?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Engineering
  page_description: >-
    This content explains how gain is calculated in undamped mechanical systems, focusing on the transfer function, steady state behavior, and frequency response in relation to the natural frequency.
  page_keywords: >-
    gain calculation, undamped systems, natural frequency, transfer function, second-order system, steady state, amplitude matching, damping, sinusoidal input, resonance, frequency response
author: QuickTakes
question: >-
    How is gain calculated in undamped systems?
answer: >-
    In undamped mechanical systems, the gain can be calculated based on the system's natural frequency and the characteristics of the input signal. For a second-order undamped system, the transfer function can be expressed as:\n\n$$\nH(s) = \frac{\omega_n^2}{s^2 + \omega_n^2}\n$$\n\nwhere $\omega_n$ is the undamped natural frequency of the system. The gain of the system at steady state can be determined by evaluating the transfer function at $s = 0$ for a step input, which gives:\n\n$$\nH(0) = \frac{\omega_n^2}{0 + \omega_n^2} = 1\n$$\n\nThis indicates that the gain of an undamped system is unity, meaning that the output will match the input in amplitude, assuming no energy is lost to damping.\n\nIn the context of oscillations, when the system is subjected to a sinusoidal input, the gain can also be expressed in terms of the frequency of the input signal. The gain at resonance (where the input frequency matches the natural frequency of the system) can be significantly higher, leading to large oscillations. The gain at any frequency can be calculated using the magnitude of the transfer function:\n\n$$\n|H(j\omega)| = \frac{\omega_n^2}{\sqrt{\omega^4 + \omega_n^4}}\n$$\n\nThis formula shows how the gain varies with the frequency of the input signal, highlighting the importance of the natural frequency in determining the system's response.\n\nIn summary, for undamped systems, the gain is typically unity at steady state for step inputs, and it can vary with frequency for sinusoidal inputs, peaking at the natural frequency of the system.
subject: Engineering
file_name: how-is-gain-calculated-in-undamped-systems.md
url: /learn/engineering/questions/how-is-gain-calculated-in-undamped-systems
score: -1.0
related_article1:
    id: 85505
    title: >-
        What are the fundamental principles of modeling mechanical systems?
    subject: Engineering
    url: /learn/engineering/questions/what-are-the-fundamental-principles-of-modeling-mechanical-systems
related_article2:
    id: 85527
    title: >-
        How do systems with two degrees of freedom differ from single degree of freedom systems?
    subject: Engineering
    url: /learn/engineering/questions/how-do-systems-with-two-degrees-of-freedom-differ-from-single-degree-of-freedom-systems
related_article3:
    id: 85507
    title: >-
        What are the key differences between free and forced vibrations?
    subject: Physics
    url: /learn/physics/questions/what-are-the-key-differences-between-free-and-forced-vibrations
---

&nbsp;