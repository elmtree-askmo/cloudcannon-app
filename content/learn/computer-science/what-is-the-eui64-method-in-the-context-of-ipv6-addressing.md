---
_schema: default
id: 165749
date: 2025-01-29
title: What is the EUI-64 method in the context of IPv6 addressing?
article_title: What is the EUI-64 method in the context of IPv6 addressing?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    The EUI-64 method is a technique in IPv6 addressing for automatically generating the interface identifier portion of an IPv6 address using a device's MAC address, facilitating automatic configuration and ensuring address uniqueness.
  page_keywords: >-
    EUI-64, IPv6 addressing, interface identifier, IID, MAC address, Link-Local Addresses, Global Unicast Addresses, automatic configuration, Stateless Address Autoconfiguration, uniqueness, privacy concerns
author: QuickTakes
question: >-
    What is the EUI-64 method in the context of IPv6 addressing?
answer: >-
    The EUI-64 method is a technique used in IPv6 addressing to automatically generate the interface identifier (IID) portion of an IPv6 address. This method is particularly useful for creating Link-Local Addresses (LLAs) and Global Unicast Addresses (GUAs) when a device connects to a network.\n\n### How EUI-64 Works\n\n1. **MAC Address Utilization**: The EUI-64 format takes a device's 48-bit MAC address and expands it to a 64-bit identifier. This is done by inserting the hexadecimal value `FFFE` in the middle of the MAC address. For example, if the MAC address is `00:1A:2B:3C:4D:5E`, the EUI-64 representation would be `021A:2BFF:FE3C:4D5E`.\n\n2. **Universal/Local Bit**: The first byte of the MAC address is modified to indicate whether the address is universally or locally administered. This is done by flipping the 7th bit (the "universal/local" bit). If the original MAC address is universally administered, the modified EUI-64 will have this bit set to 1, indicating it is locally administered.\n\n3. **Address Generation**: When a device needs to generate an IPv6 address, it combines the network prefix (which is typically provided by a router) with the EUI-64 generated IID. This results in a complete IPv6 address that is unique to the device on the network.\n\n### Benefits of EUI-64\n\n- **Automatic Configuration**: EUI-64 allows devices to automatically configure their IPv6 addresses without the need for manual input, simplifying network management.\n- **Uniqueness**: Since the method uses the MAC address, it helps ensure that the generated IPv6 addresses are unique within the local network.\n- **Stateless Address Autoconfiguration (SLAAC)**: EUI-64 is often used in conjunction with SLAAC, allowing devices to configure their own addresses based on the network prefix received from routers.\n\n### Limitations\n\nWhile EUI-64 provides a convenient way to generate IPv6 addresses, it does have some limitations. For instance, if a device's MAC address changes (e.g., due to hardware replacement), the generated IPv6 address will also change, which may not be desirable in all scenarios. Additionally, privacy concerns have led to the development of alternative methods for generating IPv6 addresses that do not expose the MAC address.\n\nIn summary, the EUI-64 method is a key component of IPv6 addressing, facilitating automatic address configuration and ensuring uniqueness through the use of MAC addresses.
subject: Computer science
file_name: what-is-the-eui64-method-in-the-context-of-ipv6-addressing.md
url: /learn/computer-science/questions/what-is-the-eui64-method-in-the-context-of-ipv6-addressing
---

&nbsp;