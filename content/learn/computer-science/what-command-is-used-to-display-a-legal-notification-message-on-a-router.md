---
_schema: default
id: 165672
date: 2025-01-29
title: >-
    What command is used to display a legal notification message on a router?
article_title: >-
    What command is used to display a legal notification message on a router?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content explains how to display a legal notification message on a router using the 'banner motd' command, including instructions on saving the configuration.
  page_keywords: >-
    router, legal notification, banner motd, configuration, command, Message of the Day, MOTD, unauthorized access, network device, save configuration, running-config, startup-config, NVRAM
author: QuickTakes
question: >-
    What command is used to display a legal notification message on a router?
answer: >-
    To display a legal notification message on a router, you can use the following command in the router's configuration mode:\n\n```plaintext\nRouter(config)# banner motd # message #\n```\n\nIn this command:\n- `banner motd` specifies that you are creating a Message of the Day (MOTD) banner.\n- The `#` symbols are delimiters that indicate the start and end of the message. You can use any character as a delimiter, but it must be consistent at both the beginning and the end of the message.\n\nFor example, if you want to display a message saying "Unauthorized access is prohibited," you would enter:\n\n```plaintext\nRouter(config)# banner motd #Unauthorized access is prohibited#\n```\n\nAfter setting the banner, it will be displayed to users when they connect to the router.\n\nAdditionally, to save the configuration after setting the banner, you would use the following command:\n\n```plaintext\nRouter# copy running-config startup-config\n```\n\nThis command saves the current configuration (which includes the banner) to the router's non-volatile memory (NVRAM), ensuring that the settings persist after a reboot.
subject: Computer Science
file_name: what-command-is-used-to-display-a-legal-notification-message-on-a-router.md
url: /learn/computer-science/questions/what-command-is-used-to-display-a-legal-notification-message-on-a-router
score: -1.0
related_article1:
    id: 165673
    title: >-
        Which command saves the current configuration on a router?
    subject: Computer Science
    url: /learn/computer-science/questions/which-command-saves-the-current-configuration-on-a-router
related_article2:
    id: 165673
    title: >-
        Which command saves the current configuration on a router?
    subject: Computer Science
    url: /learn/computer-science/questions/which-command-saves-the-current-configuration-on-a-router
related_article3:
    id: 165682
    title: >-
        What is the purpose of the 'show interfaces' command in router verification?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-purpose-of-the-show-interfaces-command-in-router-verification
related_article4:
    id: 165669
    title: >-
        How can you secure privileged EXEC mode on a router?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-secure-privileged-exec-mode-on-a-router
related_article5:
    id: 165678
    title: >-
        How do you secure console access on a router?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-secure-console-access-on-a-router
---

&nbsp;