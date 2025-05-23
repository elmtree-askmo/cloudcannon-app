---
_schema: default
id: 165718
date: 2025-01-29
title: What are the configuration steps for static IP address assignment?
article_title: What are the configuration steps for static IP address assignment?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    Detailed guide on how to assign a static IP address to a device, including configuration steps for routers and interface settings.
  page_keywords: >-
    static IP, IP address assignment, configuration steps, router setup, global configuration mode, network configuration, interface selection, IPv4 address, subnet mask, default gateway, save configuration, network documentation
author: QuickTakes
question: >-
    What are the configuration steps for static IP address assignment?
answer: >-
    To assign a static IP address to a device, you need to follow a series of configuration steps. Here’s a detailed guide on how to do this, particularly in the context of configuring a router interface:\n\n### Configuration Steps for Static IP Address Assignment\n\n1. **Access the Device**: Connect to the device (e.g., router or computer) where you want to assign the static IP address. This can typically be done via a console cable, SSH, or telnet.\n\n2. **Enter Global Configuration Mode** (for routers):\n   - If you are configuring a router, enter the privileged EXEC mode and then global configuration mode:\n   ```plaintext\n   Router# configure terminal\n   ```\n\n3. **Select the Interface**: Identify and select the interface you want to configure. For example, if you are configuring GigabitEthernet 0/0, you would enter:\n   ```plaintext\n   Router(config)# interface GigabitEthernet0/0\n   ```\n\n4. **Assign the IPv4 Address**: Use the `ip address` command followed by the desired static IPv4 address and the subnet mask. For example, to assign the IP address 192.168.10.1 with a subnet mask of 255.255.255.0, you would enter:\n   ```plaintext\n   Router(config-if)# ip address 192.168.10.1 255.255.255.0\n   ```\n\n5. **Activate the Interface**: Ensure the interface is active by using the `no shutdown` command:\n   ```plaintext\n   Router(config-if)# no shutdown\n   ```\n\n6. **Set the Default Gateway** (if applicable): If you are configuring a switch or a device that requires a default gateway, you can set it using:\n   ```plaintext\n   Router(config)# ip default-gateway <gateway-ip>\n   ```\n\n7. **Save the Configuration**: After making the changes, save the configuration to ensure it persists after a reboot:\n   ```plaintext\n   Router# write memory\n   ```\n   or\n   ```plaintext\n   Router# copy running-config startup-config\n   ```\n\n### Example Configuration\nHere’s a complete example of assigning a static IP address to a router interface:\n\n```plaintext\nRouter# configure terminal\nRouter(config)# interface GigabitEthernet0/0\nRouter(config-if)# ip address 192.168.10.1 255.255.255.0\nRouter(config-if)# no shutdown\nRouter(config)# ip default-gateway 192.168.10.254\nRouter# write memory\n```\n\n### Additional Considerations\n- **Subnet Mask**: Ensure that the subnet mask is correctly configured to match the network design.\n- **IP Address Conflicts**: Verify that the static IP address you are assigning is not already in use by another device on the network to avoid conflicts.\n- **Documentation**: Keep a record of static IP assignments for future reference and troubleshooting.\n\nBy following these steps, you can successfully assign a static IP address to a device on your network.
subject: Computer science
file_name: what-are-the-configuration-steps-for-static-ip-address-assignment.md
url: /learn/computer-science/questions/what-are-the-configuration-steps-for-static-ip-address-assignment
---

&nbsp;