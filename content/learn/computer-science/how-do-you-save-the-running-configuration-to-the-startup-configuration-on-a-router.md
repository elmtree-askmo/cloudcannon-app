---
_schema: default
id: 165683
date: 2025-01-29
title: How do you save the running configuration to the startup configuration on a router?
article_title: How do you save the running configuration to the startup configuration on a router?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    A guide on how to save the running configuration to the startup configuration on a Cisco router, including commands and methods for both basic and automatic saving.
  page_keywords: >-
    running configuration, startup configuration, save command, Cisco devices, copy running-config startup-config, write command, fast saving, auto-save configuration, configuration commit, router, preserve configuration, reboot
author: QuickTakes
question: >-
    How do you save the running configuration to the startup configuration on a router?
answer: >-
    To save the running configuration to the startup configuration on a router, particularly for Cisco devices, you can use the following commands:\n\n1. **Basic Save Command**:\n   - The most common command to save the running configuration to the startup configuration is:\n     ```\n     copy running-config startup-config\n     ```\n   - Alternatively, you can use the shorthand command:\n     ```\n     write\n     ```\n\n2. **Fast Saving**:\n   - If you want to save the configuration quickly without the safety checks, you can use the fast saving method. However, this method is riskier as it may lead to loss of the existing configuration if a power failure occurs during the save process.\n\n3. **Auto-Save Configuration**:\n   - You can configure the router to automatically back up the running configuration by using the command:\n     ```\n     configuration commit auto-save\n     ```\n   - This feature saves the configuration to a specified location after every commit.\n\nUsing these commands ensures that your current configuration is preserved and will be loaded upon the next reboot of the router, preventing any loss of changes made during the current session.
subject: Computer Science
file_name: how-do-you-save-the-running-configuration-to-the-startup-configuration-on-a-router.md
url: /learn/computer-science/questions/how-do-you-save-the-running-configuration-to-the-startup-configuration-on-a-router
score: -1.0
related_article1:
    id: 165676
    title: What is the difference between an IPv4 subnet mask and an IPv6 prefix length?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-difference-between-an-ipv4-subnet-mask-and-an-ipv6-prefix-length
related_article2:
    id: 165675
    title: How do you assign an IPv4 address to a router interface?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-assign-an-ipv4-address-to-a-router-interface
related_article3:
    id: 165675
    title: How do you assign an IPv4 address to a router interface?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-assign-an-ipv4-address-to-a-router-interface
related_article4:
    id: 165681
    title: How can you verify the routing table on a router?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-verify-the-routing-table-on-a-router
related_article5:
    id: 165678
    title: How do you secure console access on a router?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-secure-console-access-on-a-router
---

&nbsp;