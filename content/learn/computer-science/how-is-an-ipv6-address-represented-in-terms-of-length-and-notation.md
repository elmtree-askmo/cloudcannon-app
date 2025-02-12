---
_schema: default
id: 165740
date: 2025-01-29
title: >-
    How is an IPv6 address represented in terms of length and notation?
article_title: >-
    How is an IPv6 address represented in terms of length and notation?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content explains the representation of IPv6 addresses, detailing their length of 128 bits, hexadecimal notation, rules for notating leading and contiguous zeros, and the significance of prefix lengths for network identification.
  page_keywords: >-
    IPv6 address, representation, length, notation, hexadecimal, 128 bits, groups, colons, leading zeros, contiguous zeros, double colon, prefix length, subnetting, Stateless Address Autoconfiguration, Interface ID
author: QuickTakes
question: >-
    How is an IPv6 address represented in terms of length and notation?
answer: >-
    An IPv6 address is represented as a 128-bit identifier, typically expressed in hexadecimal notation. The address is divided into eight groups of four hexadecimal digits, separated by colons. For example, a full IPv6 address might look like this:\n\n```\n2001:0db8:0000:1111:0000:0000:0000:0200\n```\n\n### Length and Notation\n- **Length:** IPv6 addresses are always 128 bits long.\n- **Notation:** The standard representation uses hexadecimal digits, and there are specific rules for simplifying the notation:\n  1. **Leading Zeros:** Leading zeros in each hextet can be omitted. For example, `01ab` can be written as `1ab`.\n  2. **Contiguous Zeros:** A double colon (`::`) can be used to replace contiguous segments of zeros, but this can only be used once in an address to avoid ambiguity. For instance, the address `2001:0db8:0000:1111:0000:0000:0000:0200` can be compressed to `2001:db8:0:1111::200`.\n\n### Prefix Length\nThe prefix length is indicated in slash notation (e.g., `/64`) and specifies how many bits of the address are used for the network portion. The prefix length can range from 0 to 128, with `/64` being the recommended length for most networks. This standardization is crucial for subnetting and is particularly important for Stateless Address Autoconfiguration (SLAAC), which utilizes a 64-bit Interface ID.\n\nIn summary, an IPv6 address is a 128-bit identifier represented in hexadecimal format, with specific rules for notation and a prefix length that indicates the network portion of the address.
subject: Computer Science
file_name: how-is-an-ipv6-address-represented-in-terms-of-length-and-notation.md
url: /learn/computer-science/questions/how-is-an-ipv6-address-represented-in-terms-of-length-and-notation
score: -1.0
related_article1:
    id: 165760
    title: >-
        What is the preferred format for representing IPv6 addresses?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-preferred-format-for-representing-ipv6-addresses
related_article2:
    id: 165751
    title: >-
        Explain the significance of the All-Nodes and All-Routers multicast groups in IPv6.
    subject: Computer Science
    url: /learn/computer-science/questions/explain-the-significance-of-the-allnodes-and-allrouters-multicast-groups-in-ipv6
related_article3:
    id: 165750
    title: >-
        What are solicited-node multicast addresses used for in IPv6?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-solicitednode-multicast-addresses-used-for-in-ipv6
related_article4:
    id: 165746
    title: >-
        What is the primary purpose of a Link-Local Address (LLA) in IPv6?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-primary-purpose-of-a-linklocal-address-lla-in-ipv6
related_article5:
    id: 165757
    title: >-
        What is the purpose of NAT64 in IPv6 translation?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-purpose-of-nat64-in-ipv6-translation
---

&nbsp;