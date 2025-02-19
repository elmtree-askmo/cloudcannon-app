---
_schema: default
id: 50211
date: 2024-11-26
title: >-
    What is the electric field of a disk of charge?
article_title: >-
    What is the electric field of a disk of charge?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Physics
  page_description: >-
    This content explains the derivation of the electric field due to a uniformly charged disk, including charge distribution, contributions from differential charge elements, and integration to find the total electric field at points along the axis of the disk.
  page_keywords: >-
    electric field, disk of charge, surface charge density, electrostatics, calculus, point along the axis, charge distribution, differential charge element, electric field contribution, total electric field, special cases, integration, infinite plane, finite disk
author: QuickTakes
question: >-
    What is the electric field of a disk of charge?
answer: >-
    The electric field of a uniformly charged disk can be derived using principles of electrostatics and calculus. For a disk of radius $ R $ with a uniform surface charge density $ \sigma $, the electric field at a point along the axis of the disk (at a distance $ z $ from the center of the disk) can be calculated by considering the contributions from differential charge elements on the disk.\n\n1. **Charge Distribution**: The total charge $ Q $ on the disk is related to the surface charge density by $ Q = \sigma \cdot \pi R^2 $.\n\n2. **Differential Charge Element**: A small ring of radius $ r' $ and thickness $ dr' $ on the disk has an area $ dA = 2\pi r' dr' $ and a corresponding charge $ dq = \sigma \cdot dA = \sigma \cdot 2\pi r' dr' $.\n\n3. **Electric Field Contribution**: The electric field $ dE $ due to this ring at point $ P $ (located at distance $ z $ along the axis) can be expressed as:\n   $$\n   dE = \frac{1}{4\pi \epsilon_0} \frac{dq}{(r'^2 + z^2)} \cos \theta\n   $$\n   where $ \cos \theta = \frac{z}{\sqrt{r'^2 + z^2}} $.\n\n4. **Total Electric Field**: The total electric field $ E $ at point $ P $ is obtained by integrating $ dE $ over the entire disk:\n   $$\n   E = \int_0^R dE = \int_0^R \frac{1}{4\pi \epsilon_0} \frac{\sigma \cdot 2\pi r' dr'}{(r'^2 + z^2)^{3/2}} z\n   $$\n   After performing the integration, the result is:\n   $$\n   E = \frac{\sigma}{2\epsilon_0} \left(1 - \frac{z}{\sqrt{z^2 + R^2}}\right)\n   $$\n\n5. **Special Cases**: \n   - As $ R \to \infty $ (the disk becomes an infinite plane), the electric field approaches $ E = \frac{\sigma}{2\epsilon_0} $, which is the field due to an infinite sheet of charge.\n   - For points very close to the disk (where $ z $ is small compared to $ R $), the electric field can be approximated as $ E \approx \frac{\sigma}{2\epsilon_0} $.\n\nThis formula provides a comprehensive understanding of how the electric field behaves in relation to a uniformly charged disk, taking into account both the geometry of the charge distribution and the distance from the disk.
subject: Physics
file_name: what-is-the-electric-field-of-a-disk-of-charge.md
url: /learn/physics/questions/what-is-the-electric-field-of-a-disk-of-charge
score: -1.0
related_article1:
    id: 50214
    title: >-
        How do electric fields influence the behavior of charged particles?
    subject: Physics
    url: /learn/physics/questions/how-do-electric-fields-influence-the-behavior-of-charged-particles
related_article2:
    id: 50219
    title: >-
        What are the challenges in measuring electric fields accurately?
    subject: Physics
    url: /learn/physics/questions/what-are-the-challenges-in-measuring-electric-fields-accurately
related_article3:
    id: 50198
    title: >-
        How is a test charge used to measure an electric field?
    subject: Physics
    url: /learn/physics/questions/how-is-a-test-charge-used-to-measure-an-electric-field
related_article4:
    id: 50201
    title: >-
        What determines the direction of an electric field?
    subject: Physics
    url: /learn/physics/questions/what-determines-the-direction-of-an-electric-field
---

&nbsp;