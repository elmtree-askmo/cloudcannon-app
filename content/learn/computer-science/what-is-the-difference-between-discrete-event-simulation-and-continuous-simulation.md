---
_schema: default
id: 160722
date: 2025-01-24
title: What is the difference between discrete event simulation and continuous simulation?
article_title: What is the difference between discrete event simulation and continuous simulation?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    This content explains the differences between discrete event simulation and continuous simulation, highlighting their characteristics, applications, and suitable problem types.
  page_keywords: >-
    Discrete Event Simulation, Continuous Simulation, system modeling, event-driven, differential equations, queuing systems, manufacturing processes, fluid dynamics, environmental modeling, time progression
author: QuickTakes
question: >-
    What is the difference between discrete event simulation and continuous simulation?
answer: >-
    Discrete event simulation (DES) and continuous simulation are two distinct approaches used to model and analyze systems, each suited for different types of problems.\n\n### Discrete Event Simulation (DES)\n1. **Nature of Events**: In DES, the system state changes at discrete points in time. Events occur at specific times, and the simulation progresses from one event to the next. For example, events could include customer arrivals, departures, failures, or repairs.\n2. **Time Progression**: The simulation time jumps directly to the next event's occurrence, meaning that no changes in the system state are assumed to happen between events. This is known as next-event time progression.\n3. **Examples**: Common applications of DES include queuing systems (like banks or call centers), manufacturing processes, and network traffic simulations. For instance, in a bank simulation, the arrival of a customer and the subsequent service completion are discrete events that can be tracked.\n4. **Efficiency**: DES can be more efficient than continuous simulation because it does not require the simulation of every time slice, allowing it to run faster in many cases.\n\n### Continuous Simulation\n1. **Nature of Changes**: Continuous simulation models systems where the state changes continuously over time. This is often represented using differential equations that describe how variables evolve.\n2. **Time Progression**: In continuous simulation, the system is updated continuously, and changes can occur at any point in time. This means that the simulation tracks the state of the system at all times, rather than just at discrete events.\n3. **Examples**: Continuous simulation is suitable for systems like fluid dynamics (e.g., the flow of liquid in a tank) or temperature changes over time. An example is the predator-prey model, which uses differential equations to describe the interactions between species.\n4. **Applications**: Continuous simulations are often used in fields such as environmental modeling, engineering, and physics, where processes are inherently continuous.\n\n### Summary of Differences\n- **Event Timing**: DES focuses on specific events at distinct times, while continuous simulation models changes that occur at any moment.\n- **State Changes**: DES assumes no changes occur between events, whereas continuous simulation continuously updates the system state.\n- **Mathematical Representation**: DES often uses event-driven models, while continuous simulation relies on differential equations.\n\nIn conclusion, the choice between discrete event simulation and continuous simulation depends on the nature of the system being modeled and the specific requirements of the analysis. Each method has its strengths and is applicable in different scenarios.
subject: Computer science
file_name: what-is-the-difference-between-discrete-event-simulation-and-continuous-simulation.md
url: /learn/computer-science/questions/what-is-the-difference-between-discrete-event-simulation-and-continuous-simulation
---

&nbsp;