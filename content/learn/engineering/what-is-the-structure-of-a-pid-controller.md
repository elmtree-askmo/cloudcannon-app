---
_schema: default
id: 83785
date: 2024-12-04
title: >-
    What is the structure of a PID controller?
article_title: >-
    What is the structure of a PID controller?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Engineering
  page_description: >-
    This content explains the structure and components of a PID controller, including its mathematical formulation and the roles of the proportional, integral, and derivative terms in controlling a process variable towards a desired setpoint.
  page_keywords: >-
    PID controller, structure, Proportional-Integral-Derivative, error value, setpoint, process variable, control output, gain coefficient, feedback control, industrial automation, tuning, control system, temperature control, speed regulation, flow control
author: QuickTakes
question: >-
    What is the structure of a PID controller?
answer: >-
    The structure of a PID (Proportional-Integral-Derivative) controller is designed to continuously calculate an error value as the difference between a desired setpoint (SP) and a measured process variable (PV). The PID controller applies a correction based on three distinct actions: proportional, integral, and derivative. \n\nThe overall control function of a PID controller can be expressed mathematically as:\n\n$$\nu(t) = K_{\text{p}} e(t) + K_{\text{i}} \int_0^t e(\tau) \, \mathrm{d} \tau + K_{\text{d}} \frac{\mathrm{d} e(t)}{\mathrm{d} t} + u_0\n$$\n\nWhere:\n- \( u(t) \) is the control output,\n- \( e(t) = r(t) - y(t) \) is the error signal (the difference between the setpoint and the process variable),\n- $ K_{\text{p}} $, $ K_{\text{i}} $, and $ K_{\text{d}} $ are the coefficients for the proportional, integral, and derivative terms, respectively,\n- $ u_0 $ is a constant that can be used for offset control.\n\n### Components of the PID Controller:\n\n1. **Proportional (P)**: This term produces an output that is proportional to the current error value. The proportional response can be adjusted by a gain coefficient $ K_{\text{p}} $. The formula for the proportional term is:\n   $$\n   P = K_{\text{p}} \times e(t)\n   $$\n\n2. **Integral (I)**: This term accounts for the accumulation of past errors. It integrates the error over time, which helps eliminate the residual steady-state error that occurs with a pure proportional controller. The integral term is calculated as:\n   $$\n   I = K_{\text{i}} \int_0^t e(\tau) \, \mathrm{d} \tau\n   $$\n\n3. **Derivative (D)**: This term predicts future error based on its rate of change. It provides a damping effect and helps to reduce overshoot and improve system stability. The derivative term is calculated as:\n   $$\n   D = K_{\text{d}} \frac{\mathrm{d} e(t)}{\mathrm{d} t}\n   $$\n\n### Summary:\nThe PID controller combines these three actions to provide a control output that adjusts the process variable towards the desired setpoint. By tuning the coefficients $ K_{\text{p}} $, $ K_{\text{i}} $, and $ K_{\text{d}} $, the performance of the controller can be optimized for various applications, such as temperature control, speed regulation, and flow control in industrial automation.
subject: Engineering
file_name: what-is-the-structure-of-a-pid-controller.md
url: /learn/engineering/questions/what-is-the-structure-of-a-pid-controller
score: -1.0
related_article1:
    id: 83779
    title: >-
        What are the common test input signals used in performance measures of control systems?
    subject: Engineering
    url: /learn/engineering/questions/what-are-the-common-test-input-signals-used-in-performance-measures-of-control-systems
related_article2:
    id: 83774
    title: >-
        How do open-loop systems differ from closed-loop systems in terms of feedback and control?
    subject: Engineering
    url: /learn/engineering/questions/how-do-openloop-systems-differ-from-closedloop-systems-in-terms-of-feedback-and-control
---

&nbsp;