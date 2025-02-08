---
_schema: default
id: 165672
date: 2025-01-29
title: What command is used to display a legal notification message on a router?
article_title: What command is used to display a legal notification message on a router?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    This content explains how to display a legal notification message on a router using the 'banner motd' command, including instructions on saving the configuration.
  page_keywords: >-
    router, legal notification, banner motd, configuration, command, Message of the Day, MOTD, unauthorized access, network device, save configuration, running-config, startup-config, NVRAM
author: QuickTakes
question: >-
    What command is used to display a legal notification message on a router?
answer: >-
    To display a legal notification message on a router, you can use the following command in the router's configuration mode:\n\n```plaintext\nRouter(config)# banner motd # message #\n```\n\nIn this command:\n- `banner motd` specifies that you are creating a Message of the Day (MOTD) banner.\n- The `#` symbols are delimiters that indicate the start and end of the message. You can use any character as a delimiter, but it must be consistent at both the beginning and the end of the message.\n\nFor example, if you want to display a message saying "Unauthorized access is prohibited," you would enter:\n\n```plaintext\nRouter(config)# banner motd #Unauthorized access is prohibited#\n```\n\nAfter setting the banner, it will be displayed to users when they connect to the router.\n\nAdditionally, to save the configuration after setting the banner, you would use the following command:\n\n```plaintext\nRouter# copy running-config startup-config\n```\n\nThis command saves the current configuration (which includes the banner) to the router's non-volatile memory (NVRAM), ensuring that the settings persist after a reboot.
subject: Computer science
file_name: what-command-is-used-to-display-a-legal-notification-message-on-a-router.md
url: /learn/computer-science/questions/what-command-is-used-to-display-a-legal-notification-message-on-a-router
score: -1.0
---

&nbsp;