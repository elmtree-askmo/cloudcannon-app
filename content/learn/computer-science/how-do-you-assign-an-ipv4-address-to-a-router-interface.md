---
_schema: default
id: 165675
date: 2025-01-29
title: >-
    How do you assign an IPv4 address to a router interface?
article_title: >-
    How do you assign an IPv4 address to a router interface?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This guide explains the process to assign an IPv4 address to a router interface using the command line interface, detailing all necessary commands and steps.
  page_keywords: >-
    IPv4 address assignment, router interface configuration, command line interface, Global Configuration Mode, interface selection, ip address command, subnet mask, interface activation, no shutdown command, verify configuration
author: QuickTakes
question: >-
    How do you assign an IPv4 address to a router interface?
answer: >-
    To assign an IPv4 address to a router interface, you will need to access the router's command line interface (CLI) and follow these steps:\n\n1. **Enter Global Configuration Mode**: First, you need to enter the global configuration mode from the privileged EXEC mode. You can do this by typing:\n   ```plaintext\n   Router# configure terminal\n   ```\n\n2. **Select the Interface**: Specify the interface you want to configure. For example, if you want to configure GigabitEthernet 0/0, you would enter:\n   ```plaintext\n   Router(config)# interface GigabitEthernet0/0\n   ```\n\n3. **Assign the IPv4 Address**: Use the `ip address` command followed by the desired IPv4 address and the subnet mask. For example, to assign the IP address 192.168.10.1 with a subnet mask of 255.255.255.0, you would enter:\n   ```plaintext\n   Router(config-if)# ip address 192.168.10.1 255.255.255.0\n   ```\n\n4. **Activate the Interface**: By default, interfaces are often shut down. To activate the interface, use the `no shutdown` command:\n   ```plaintext\n   Router(config-if)# no shutdown\n   ```\n\n5. **Exit Configuration Mode**: After configuring the interface, you can exit back to the global configuration mode or privileged EXEC mode:\n   ```plaintext\n   Router(config-if)# exit\n   Router(config)# exit\n   ```\n\n6. **Verify the Configuration**: To ensure that the IP address has been assigned correctly, you can use the following command:\n   ```plaintext\n   Router# show ip interface brief\n   ```\n   This command will display the status and IP addresses of all interfaces on the router.\n\nHere is a complete example of the commands you would use:\n\n```plaintext\nRouter# configure terminal\nRouter(config)# interface GigabitEthernet0/0\nRouter(config-if)# ip address 192.168.10.1 255.255.255.0\nRouter(config-if)# no shutdown\nRouter(config-if)# exit\nRouter(config)# exit\nRouter# show ip interface brief\n```\n\nThis process will successfully assign an IPv4 address to the specified router interface.
subject: Computer Science
file_name: how-do-you-assign-an-ipv4-address-to-a-router-interface.md
url: /learn/computer-science/questions/how-do-you-assign-an-ipv4-address-to-a-router-interface
score: -1.0
related_article1:
    id: 165683
    title: >-
        How do you save the running configuration to the startup configuration on a router?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-save-the-running-configuration-to-the-startup-configuration-on-a-router
related_article2:
    id: 165676
    title: >-
        What is the difference between an IPv4 subnet mask and an IPv6 prefix length?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-difference-between-an-ipv4-subnet-mask-and-an-ipv6-prefix-length
related_article3:
    id: 165684
    title: >-
        What is the significance of monitoring link status in network management?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-significance-of-monitoring-link-status-in-network-management
related_article4:
    id: 165683
    title: >-
        How do you save the running configuration to the startup configuration on a router?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-save-the-running-configuration-to-the-startup-configuration-on-a-router
related_article5:
    id: 165671
    title: >-
        How do you encrypt plaintext passwords on a router?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-encrypt-plaintext-passwords-on-a-router
---

&nbsp;