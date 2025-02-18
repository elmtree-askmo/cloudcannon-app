---
_schema: default
id: 85669
date: 2024-12-04
title: >-
    How is the total solution for forced harmonic vibrations derived?
article_title: >-
    How is the total solution for forced harmonic vibrations derived?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Physics
  page_description: >-
    The total solution for forced harmonic vibrations derived from the equation of motion for a damped harmonic oscillator, breaking it into homogeneous and particular solutions.
  page_keywords: >-
    forced harmonic vibrations, total solution, damped harmonic oscillator, equation of motion, homogeneous solution, particular solution, driving force, natural frequency, transient response, steady-state vibrations
author: QuickTakes
question: >-
    How is the total solution for forced harmonic vibrations derived?
answer: >-
    The total solution for forced harmonic vibrations can be derived by considering the equation of motion for a damped harmonic oscillator subjected to a harmonic driving force. The general form of the equation of motion is given by:\n\n$$\nm \frac{d^2 x(t)}{dt^2} + c \frac{dx(t)}{dt} + k x(t) = F_0 \cos(\omega_d t)\n$$\n\nwhere:\n- $ m $ is the mass,\n- $ c $ is the damping coefficient,\n- $ k $ is the stiffness,\n- $ F_0 $ is the amplitude of the driving force,\n- $ \omega_d $ is the angular frequency of the driving force.\n\nTo find the total solution, we can break it down into two parts: the homogeneous solution \( x_h(t) \) and the particular solution \( x_p(t) \).\n\n1. **Homogeneous Solution**: This part of the solution corresponds to the system's natural response without external forcing. It is obtained by solving the homogeneous equation:\n\n$$\nm \frac{d^2 x_h(t)}{dt^2} + c \frac{dx_h(t)}{dt} + k x_h(t) = 0\n$$\n\nThe solution to this equation typically takes the form:\n\n$$\nx_h(t) = A e^{-\frac{c}{2m} t} \cos(\omega_n t + \phi)\n$$\n\nwhere $ \omega_n = \sqrt{\frac{k}{m}} $ is the natural frequency of the system, and $ A $ and $ \phi $ are constants determined by initial conditions.\n\n2. **Particular Solution**: For the particular solution, we assume a solution that oscillates with the same frequency as the driving force. We can express it as:\n\n$$\nx_p(t) = B \cos(\omega_d t) + C \sin(\omega_d t)\n$$\n\nSubstituting \( x_p(t) \) into the original equation of motion allows us to solve for the coefficients $ B $ and $ C $. The resulting expressions for $ B $ and $ C $ can be derived using methods such as undetermined coefficients or the method of complex amplitudes.\n\nThe total solution for the forced harmonic vibrations is then given by the sum of the homogeneous and particular solutions:\n\n$$\nx(t) = x_h(t) + x_p(t)\n$$\n\nIn the case of steady-state vibrations, the transient response (homogeneous solution) will decay over time, and the system will eventually oscillate at the driving frequency with an amplitude determined by the particular solution.\n\nIn summary, the total solution for forced harmonic vibrations is a combination of the natural response of the system and the forced response due to the external harmonic driving force, allowing for a comprehensive understanding of the system's dynamic behavior under external excitation.
subject: Physics
file_name: how-is-the-total-solution-for-forced-harmonic-vibrations-derived.md
url: /learn/physics/questions/how-is-the-total-solution-for-forced-harmonic-vibrations-derived
score: -1.0
related_article1:
    id: 85672
    title: >-
        What is a dynamic absorber and how does it function in vibration control?
    subject: Engineering
    url: /learn/engineering/questions/what-is-a-dynamic-absorber-and-how-does-it-function-in-vibration-control
---

&nbsp;