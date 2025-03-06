---
_schema: default
id: 165754
date: 2025-01-29
title: What are the characteristics of a Unique Local Address (ULA) in IPv6?
article_title: What are the characteristics of a Unique Local Address (ULA) in IPv6?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    Unique Local Addresses (ULAs) in IPv6 are used for local communication, are non-routable on the internet, offer security, and can be configured with Stateless Address Autoconfiguration.
  page_keywords: >-
    Unique Local Address, ULA, IPv6, local communication, address range, non-global routability, security, Stateless Address Autoconfiguration, private addressing, network isolation
author: QuickTakes
question: >-
    What are the characteristics of a Unique Local Address (ULA) in IPv6?
answer: >-
    Unique Local Addresses (ULAs) in IPv6 have several distinct characteristics that make them suitable for local communication within a site or between a limited number of sites. Here are the key features of ULAs:\n\n1. **Address Range**: ULAs are defined within the address range of `fc00::/7` to `fdff::/7`. This range is specifically reserved for local use and is not routable on the global Internet.\n\n2. **Local Communication**: ULAs are intended for communication within a local network or between a small number of interconnected networks. They are similar to private IPv4 addresses defined in RFC 1918, which are also not routable on the Internet.\n\n3. **Non-Global Routability**: Unlike Global Unicast Addresses (GUAs), ULAs cannot be routed on the Internet. This means that devices using ULAs are isolated from external networks, providing a layer of security for local communications.\n\n4. **No Translation**: ULAs are not translated to global IPv6 addresses. This characteristic ensures that devices using ULAs remain within their local context and do not have a direct path to the global Internet.\n\n5. **Use Cases**: ULAs are particularly useful for devices that do not require Internet access, such as internal servers, printers, and other networked devices that communicate solely within a local environment.\n\n6. **Security Considerations**: While ULAs provide a means to secure local communications, it is important to note that they were not specifically designed to hide networks from potential security risks. Their primary purpose is to facilitate local addressing without the need for global routability.\n\n7. **Stateless Address Autoconfiguration (SLAAC)**: ULAs can be configured using SLAAC, which allows devices to automatically generate their own addresses based on the network prefix and their interface identifier.\n\nIn summary, Unique Local Addresses (ULAs) serve as a vital component of IPv6 addressing, enabling secure and efficient local communication while maintaining isolation from the global Internet.
subject: Computer science
file_name: what-are-the-characteristics-of-a-unique-local-address-ula-in-ipv6.md
url: /learn/computer-science/questions/what-are-the-characteristics-of-a-unique-local-address-ula-in-ipv6
---

&nbsp;