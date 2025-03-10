---
_schema: default
id: 165747
date: 2025-01-29
title: How is a Link-Local Address (LLA) automatically created in IPv6?
article_title: How is a Link-Local Address (LLA) automatically created in IPv6?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    An overview of how a Link-Local Address (LLA) is automatically generated in IPv6 when enabled on a device, detailing the processes involved and their significance for local network operations.
  page_keywords: >-
    Link-Local Address, LLA, IPv6, automatic address generation, network operations, MAC address, Neighbor Discovery Protocol, NDP, non-routable, local communication
author: QuickTakes
question: >-
    How is a Link-Local Address (LLA) automatically created in IPv6?
answer: >-
    A Link-Local Address (LLA) in IPv6 is automatically created through a process that occurs when IPv6 is enabled on a device. Here’s how it works:\n\n1. **Address Range**: LLAs are defined within the address range of `fe80::/10`. This means that any address that starts with `fe80` to `febf` is considered a Link-Local Address.\n\n2. **Automatic Generation**: When IPv6 is enabled on an interface, the device automatically generates an LLA if one is not manually configured. This is essential because every IPv6-enabled interface must have an LLA for local network operations, such as neighbor discovery.\n\n3. **Interface Identifier**: The LLA is typically constructed using the device's MAC address. The process involves taking the MAC address, modifying it slightly (by inverting the 7th bit), and then combining it with the prefix `fe80::/64` to create a unique address for that interface. The full address format looks like this:\n   - `fe80::[modified-MAC-address]`\n\n4. **Neighbor Discovery**: LLAs are used for communication between devices on the same local link and are crucial for the Neighbor Discovery Protocol (NDP), which helps devices discover each other and determine their link-layer addresses.\n\n5. **Non-Routable**: It is important to note that LLAs are not routable beyond the local link. They are intended solely for local communication within the same subnet.\n\nIn summary, LLAs are automatically created when IPv6 is enabled on a device, ensuring that every interface has a unique address for local communication, which is vital for network operations.
subject: Computer science
file_name: how-is-a-linklocal-address-lla-automatically-created-in-ipv6.md
url: /learn/computer-science/questions/how-is-a-linklocal-address-lla-automatically-created-in-ipv6
---

&nbsp;