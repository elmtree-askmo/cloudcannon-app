---
_schema: default
id: 165673
date: 2025-01-29
title: Which command saves the current configuration on a router?
article_title: Which command saves the current configuration on a router?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    This content explains various commands to save the current configuration on a router, specifically for Cisco devices, including basic save commands, fast saving, auto-saving features, and verification methods.
  page_keywords: >-
    router configuration, Cisco commands, save configuration, running config, startup config, copy running-config startup-config, write command, auto-save configuration, verification command, show startup-config
author: QuickTakes
question: >-
    Which command saves the current configuration on a router?
answer: >-
    To save the current configuration on a router, particularly for Cisco devices, you can use the following commands:\n\n1. **Basic Save Command**:\n   - The most common command to save the running configuration to the startup configuration is:\n     ```\n     copy running-config startup-config\n     ```\n   - Alternatively, you can use the shorthand command:\n     ```\n     write\n     ```\n\n2. **Fast Saving**:\n   - If you want to save the configuration quickly without the safety checks, you can use the fast saving method. However, this method is riskier as it may lead to loss of the existing configuration if a power failure occurs during the save process.\n\n3. **Auto-Save Configuration**:\n   - You can configure the router to automatically back up the running configuration by using the command:\n     ```\n     configuration commit auto-save\n     ```\n   - This feature saves the configuration to a specified location after every commit.\n\n4. **Alternative Save Command**:\n   - Another way to save the configuration is by using:\n     ```\n     copy system:running-config nvram:startup-config\n     ```\n   - This command saves a complete version of the configuration file to the location specified by the CONFIG_FILE environment variable and a distilled version to NVRAM.\n\n5. **Verification**:\n   - After saving the configuration, it is essential to verify that the process was successful. You can do this by executing:\n     ```\n     show startup-config\n     ```\n   - This command allows you to view the configuration that is saved and will be used on the next reboot.\n\nBy using these commands, you can ensure that your router's configuration is saved properly and will persist through reboots.
subject: Computer science
file_name: which-command-saves-the-current-configuration-on-a-router.md
url: /learn/computer-science/questions/which-command-saves-the-current-configuration-on-a-router
score: -1.0
---

&nbsp;