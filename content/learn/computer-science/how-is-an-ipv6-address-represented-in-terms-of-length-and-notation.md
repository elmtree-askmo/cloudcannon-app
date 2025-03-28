---
_schema: default
id: 165740
date: 2025-01-29
title: How is an IPv6 address represented in terms of length and notation?
article_title: How is an IPv6 address represented in terms of length and notation?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    This content explains the representation of an IPv6 address, detailing its 128-bit length, hexadecimal notation, simplification rules, and prefix length for network identification.
  page_keywords: >-
    IPv6 address, 128-bit identifier, hexadecimal notation, notation rules, leading zeros, contiguous zeros, slash notation, prefix length, subnetting, Stateless Address Autoconfiguration, Interface ID
author: QuickTakes
question: >-
    How is an IPv6 address represented in terms of length and notation?
answer: >-
    An IPv6 address is represented as a 128-bit identifier, typically expressed in hexadecimal notation. The address is divided into eight groups of four hexadecimal digits, separated by colons. For example, a full IPv6 address might look like this:\n\n```\n2001:0db8:0000:1111:0000:0000:0000:0200\n```\n\n### Length and Notation\n- **Length:** IPv6 addresses are always 128 bits long.\n- **Notation:** The standard representation uses hexadecimal digits, and there are specific rules for simplifying the notation:\n  1. **Leading Zeros:** Leading zeros in each hextet can be omitted. For example, `01ab` can be written as `1ab`.\n  2. **Contiguous Zeros:** A double colon (`::`) can be used to replace contiguous segments of zeros, but this can only be used once in an address to avoid ambiguity. For instance, the address `2001:0db8:0000:1111:0000:0000:0000:0200` can be compressed to `2001:db8:0:1111::200`.\n\n### Prefix Length\nThe prefix length is indicated in slash notation (e.g., `/64`) and specifies how many bits of the address are used for the network portion. The prefix length can range from 0 to 128, with `/64` being the recommended length for most networks. This standardization is crucial for subnetting and is particularly important for Stateless Address Autoconfiguration (SLAAC), which utilizes a 64-bit Interface ID.\n\nIn summary, an IPv6 address is a 128-bit identifier represented in hexadecimal format, with specific rules for notation and a prefix length that indicates the network portion of the address.
subject: Computer science
file_name: how-is-an-ipv6-address-represented-in-terms-of-length-and-notation.md
url: /learn/computer-science/questions/how-is-an-ipv6-address-represented-in-terms-of-length-and-notation
---

&nbsp;