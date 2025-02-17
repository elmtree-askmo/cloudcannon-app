---
_schema: default
id: 165758
date: 2025-01-29
title: >-
    How is static IPv6 address configuration performed on a router?
article_title: >-
    How is static IPv6 address configuration performed on a router?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This guide provides detailed steps for performing static IPv6 address configuration on a router using the Cisco IOS command line interface, including accessing the router, configuring the interface, and saving the configuration.
  page_keywords: >-
    static IPv6 address configuration, router, Cisco IOS, Global Unicast Address, interface configuration, privileged EXEC mode, global configuration mode, IPv6 address assignment, no shutdown, save configuration, Link-Local Address, verification
author: QuickTakes
question: >-
    How is static IPv6 address configuration performed on a router?
answer: >-
    To perform static IPv6 address configuration on a router, you will follow a series of steps using the Cisco IOS command line interface. Here’s a detailed guide on how to configure a Global Unicast Address (GUA) on a router interface:\n\n### Steps for Static IPv6 Address Configuration\n\n1. **Access the Router**: Connect to the router using a console cable, SSH, or telnet.\n\n2. **Enter Privileged EXEC Mode**: After logging in, enter privileged EXEC mode:\n   ```plaintext\n   Router> enable\n   ```\n\n3. **Enter Global Configuration Mode**: From privileged EXEC mode, enter global configuration mode:\n   ```plaintext\n   Router# configure terminal\n   ```\n\n4. **Select the Interface**: Identify and select the interface you want to configure. For example, if you are configuring GigabitEthernet 0/0, you would enter:\n   ```plaintext\n   Router(config)# interface gigabitethernet 0/0\n   ```\n\n5. **Assign the IPv6 Address**: Use the command to assign a static IPv6 address to the interface. The command format is:\n   ```plaintext\n   ipv6 address ipv6-address/prefix-length\n   ```\n   For example, to configure a GUA, you would enter:\n   ```plaintext\n   Router(config-if)# ipv6 address 2001:db8:acad:1::1/64\n   ```\n\n6. **Enable the Interface**: Ensure the interface is enabled by using the `no shutdown` command:\n   ```plaintext\n   Router(config-if)# no shutdown\n   ```\n\n7. **Exit Configuration Mode**: After configuring the address, you can exit the interface configuration mode:\n   ```plaintext\n   Router(config-if)# exit\n   ```\n\n8. **Save the Configuration**: Finally, save the configuration to ensure it persists after a reboot:\n   ```plaintext\n   Router# write memory\n   ```\n   or\n   ```plaintext\n   Router# copy running-config startup-config\n   ```\n\n### Example Configuration\n\nHere’s a complete example of configuring a GUA on a router interface:\n\n```plaintext\nRouter> enable\nRouter# configure terminal\nRouter(config)# interface gigabitethernet 0/0\nRouter(config-if)# ipv6 address 2001:db8:acad:1::1/64\nRouter(config-if)# no shutdown\nRouter(config-if)# exit\nRouter# write memory\n```\n\n### Additional Notes\n\n- **Link-Local Address (LLA)**: If you also want to configure a Link-Local Address, you can do so using the command:\n  ```plaintext\n  Router(config-if)# ipv6 address fe80::1:1 link-local\n  ```\n\n- **Verification**: To verify the configuration, you can use the command:\n  ```plaintext\n  Router# show ipv6 interface gigabitethernet 0/0\n  ```\n\nThis will display the configured IPv6 addresses and their status on the specified interface.\n\nBy following these steps, you can successfully configure a static IPv6 address on a router.
subject: Computer Science
file_name: how-is-static-ipv6-address-configuration-performed-on-a-router.md
url: /learn/computer-science/questions/how-is-static-ipv6-address-configuration-performed-on-a-router
score: -1.0
related_article1:
    id: 165744
    title: >-
        Describe the characteristics of a Global Unicast Address (GUA) in IPv6.
    subject: Computer Science
    url: /learn/computer-science/questions/describe-the-characteristics-of-a-global-unicast-address-gua-in-ipv6
related_article2:
    id: 165744
    title: >-
        Describe the characteristics of a Global Unicast Address (GUA) in IPv6.
    subject: Computer Science
    url: /learn/computer-science/questions/describe-the-characteristics-of-a-global-unicast-address-gua-in-ipv6
related_article3:
    id: 165761
    title: >-
        How does the compressed format of IPv6 addresses work?
    subject: Computer Science
    url: /learn/computer-science/questions/how-does-the-compressed-format-of-ipv6-addresses-work
related_article4:
    id: 165761
    title: >-
        How does the compressed format of IPv6 addresses work?
    subject: Computer Science
    url: /learn/computer-science/questions/how-does-the-compressed-format-of-ipv6-addresses-work
related_article5:
    id: 165763
    title: >-
        When is the double colon notation used in IPv6 addresses, and what is its limitation?
    subject: Computer Science
    url: /learn/computer-science/questions/when-is-the-double-colon-notation-used-in-ipv6-addresses-and-what-is-its-limitation
---

&nbsp;