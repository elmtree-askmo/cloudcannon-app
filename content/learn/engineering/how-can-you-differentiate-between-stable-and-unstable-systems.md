---
_schema: default
id: 60616
date: 2024-11-27
title: >-
    How can you differentiate between stable and unstable systems?
article_title: >-
    How can you differentiate between stable and unstable systems?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Engineering
  page_description: >-
    This content explains how to differentiate between stable and unstable systems by analyzing BIBO stability, pole locations of the transfer function, and implications for applications such as aerospace engineering.
  page_keywords: >-
    stable systems, unstable systems, BIBO stability, pole locations, transfer function, LTI systems, characteristic equation, complex plane, aerospace engineering, control systems
author: QuickTakes
question: >-
    How can you differentiate between stable and unstable systems?
answer: >-
    To differentiate between stable and unstable systems, we can analyze the behavior of the system's output in response to bounded inputs, as well as the locations of the poles of the system's transfer function in the complex plane.\n\n1. **Bounded Input, Bounded Output (BIBO) Stability**: A system is considered stable if, for every bounded input, the output remains bounded. Conversely, if there exists at least one bounded input that results in an unbounded output, the system is classified as unstable.\n\n2. **Pole Locations**: The stability of a linear time-invariant (LTI) system can also be determined by examining the poles of its transfer function. The following criteria apply:\n   - A system is stable if all poles of the transfer function lie in the open left half of the s-plane (OLHP). This means that the real parts of all poles are negative.\n   - A system is unstable if at least one pole is located in the right half of the s-plane (RHP) or if there are poles with multiplicity greater than one on the imaginary axis. This can lead to unbounded output responses.\n   - A system is termed marginally stable if it has simple poles located on the imaginary axis and no poles in the right half-plane.\n\n3. **Characteristic Equation**: The roots of the characteristic equation of the system provide insight into stability. If all roots have negative real parts, the system is stable. If any root has a positive real part, the system is unstable.\n\n4. **Practical Implications**: Understanding the stability of a system is crucial in various applications, such as control systems in aerospace engineering, where maintaining stability is essential for performance and safety.\n\nIn summary, the key factors in determining the stability of a system are the boundedness of the output in response to bounded inputs and the locations of the poles of the transfer function in the complex plane.
subject: Engineering
file_name: how-can-you-differentiate-between-stable-and-unstable-systems.md
url: /learn/engineering/questions/how-can-you-differentiate-between-stable-and-unstable-systems
score: -1.0
related_article1:
    id: 60629
    title: >-
        How is partial fraction expansion used in solving problems?
    subject: Mathematics
    url: /learn/mathematics/questions/how-is-partial-fraction-expansion-used-in-solving-problems
related_article2:
    id: 60614
    title: >-
        How do stability and poles relate to system analysis?
    subject: Engineering
    url: /learn/engineering/questions/how-do-stability-and-poles-relate-to-system-analysis
---

&nbsp;