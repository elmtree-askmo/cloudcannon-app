---
_schema: default
id: 165675
date: 2025-01-29
title: How do you assign an IPv4 address to a router interface?
article_title: How do you assign an IPv4 address to a router interface?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    A detailed guide on how to assign an IPv4 address to a router interface using the command line interface, including steps for configuration and verification.
  page_keywords: >-
    IPv4 address, router interface, CLI, configuration, GigabitEthernet, ip address command, no shutdown command, show ip interface brief, network configuration, networking tutorial
author: QuickTakes
question: >-
    How do you assign an IPv4 address to a router interface?
answer: >-
    To assign an IPv4 address to a router interface, you will need to access the router's command line interface (CLI) and follow these steps:\n\n1. **Enter Global Configuration Mode**: First, you need to enter the global configuration mode from the privileged EXEC mode. You can do this by typing:\n   ```plaintext\n   Router# configure terminal\n   ```\n\n2. **Select the Interface**: Specify the interface you want to configure. For example, if you want to configure GigabitEthernet 0/0, you would enter:\n   ```plaintext\n   Router(config)# interface GigabitEthernet0/0\n   ```\n\n3. **Assign the IPv4 Address**: Use the `ip address` command followed by the desired IPv4 address and the subnet mask. For example, to assign the IP address 192.168.10.1 with a subnet mask of 255.255.255.0, you would enter:\n   ```plaintext\n   Router(config-if)# ip address 192.168.10.1 255.255.255.0\n   ```\n\n4. **Activate the Interface**: By default, interfaces are often shut down. To activate the interface, use the `no shutdown` command:\n   ```plaintext\n   Router(config-if)# no shutdown\n   ```\n\n5. **Exit Configuration Mode**: After configuring the interface, you can exit back to the global configuration mode or privileged EXEC mode:\n   ```plaintext\n   Router(config-if)# exit\n   Router(config)# exit\n   ```\n\n6. **Verify the Configuration**: To ensure that the IP address has been assigned correctly, you can use the following command:\n   ```plaintext\n   Router# show ip interface brief\n   ```\n   This command will display the status and IP addresses of all interfaces on the router.\n\nHere is a complete example of the commands you would use:\n\n```plaintext\nRouter# configure terminal\nRouter(config)# interface GigabitEthernet0/0\nRouter(config-if)# ip address 192.168.10.1 255.255.255.0\nRouter(config-if)# no shutdown\nRouter(config-if)# exit\nRouter(config)# exit\nRouter# show ip interface brief\n```\n\nThis process will successfully assign an IPv4 address to the specified router interface.
subject: Computer science
file_name: how-do-you-assign-an-ipv4-address-to-a-router-interface.md
url: /learn/computer-science/questions/how-do-you-assign-an-ipv4-address-to-a-router-interface
---

&nbsp;