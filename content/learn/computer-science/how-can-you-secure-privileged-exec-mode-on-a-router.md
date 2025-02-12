---
_schema: default
id: 165669
date: 2025-01-29
title: How can you secure privileged EXEC mode on a router?
article_title: How can you secure privileged EXEC mode on a router?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content outlines the steps to secure the privileged EXEC mode on a router by setting passwords, enabling encryption, and configuring remote access.
  page_keywords: >-
    privileged EXEC mode, router security, enable secret, console password, VTY password, password encryption, SSH, MOTD banner, save configuration
author: QuickTakes
question: >-
    How can you secure privileged EXEC mode on a router?
answer: >-
    To secure privileged EXEC mode on a router, you can follow these steps, which involve setting a password that will be required to access this mode. Here are the key commands and configurations you should implement:\n\n1. **Set the Enable Secret Password**: This command sets a password for accessing the privileged EXEC mode. The password is stored in an encrypted format, which enhances security compared to the older `enable password` command.\n\n   ```plaintext\n   Router(config)# enable secret your_password\n   ```\n\n   Replace `your_password` with a strong password of your choice.\n\n2. **Secure User EXEC Mode**: You should also secure the user EXEC mode by setting passwords for console and VTY (Virtual Terminal) lines. This prevents unauthorized access to the router.\n\n   - **Console Line Password**:\n   ```plaintext\n   Router(config)# line console 0\n   Router(config-line)# password your_console_password\n   Router(config-line)# login\n   ```\n\n   - **VTY Line Password** (for remote access):\n   ```plaintext\n   Router(config)# line vty 0 4\n   Router(config-line)# password your_vty_password\n   Router(config-line)# login\n   ```\n\n3. **Enable Password Encryption**: To ensure that all plaintext passwords are encrypted, you can enable password encryption with the following command:\n\n   ```plaintext\n   Router(config)# service password-encryption\n   ```\n\n4. **Configure Remote Access**: If you plan to access the router remotely, it is advisable to use SSH instead of Telnet for better security. You can configure the transport input method for the VTY lines:\n\n   ```plaintext\n   Router(config-line)# transport input ssh\n   ```\n\n5. **Legal Notification**: Optionally, you can set a message of the day (MOTD) banner to inform users about legal notices or usage policies:\n\n   ```plaintext\n   Router(config)# banner motd #Unauthorized access is prohibited!#\n   ```\n\n6. **Save Configuration**: Finally, ensure that you save your configuration to avoid losing changes after a reboot:\n\n   ```plaintext\n   Router# write memory\n   ```\n\nBy following these steps, you can effectively secure the privileged EXEC mode on your router, ensuring that only authorized users can access critical configuration settings.
subject: Computer Science
file_name: how-can-you-secure-privileged-exec-mode-on-a-router.md
url: /learn/computer-science/questions/how-can-you-secure-privileged-exec-mode-on-a-router
score: -1.0
related_article1:
    id: 165675
    title: How do you assign an IPv4 address to a router interface?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-assign-an-ipv4-address-to-a-router-interface
related_article2:
    id: 165668
    title: What command is used to configure the device name on a router?
    subject: Computer Science
    url: /learn/computer-science/questions/what-command-is-used-to-configure-the-device-name-on-a-router
related_article3:
    id: 165682
    title: What is the purpose of the 'show interfaces' command in router verification?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-purpose-of-the-show-interfaces-command-in-router-verification
related_article4:
    id: 165679
    title: What is the function of the 'ip default-gateway' command on a switch?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-function-of-the-ip-defaultgateway-command-on-a-switch
related_article5:
    id: 165680
    title: Which command provides a brief overview of the status of all interfaces on a router?
    subject: Computer Science
    url: /learn/computer-science/questions/which-command-provides-a-brief-overview-of-the-status-of-all-interfaces-on-a-router
---

&nbsp;