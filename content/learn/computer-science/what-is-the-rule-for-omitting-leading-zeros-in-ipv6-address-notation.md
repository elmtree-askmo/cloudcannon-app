---
_schema: default
id: 165762
date: 2025-01-29
title: What is the rule for omitting leading zeros in IPv6 address notation?
article_title: What is the rule for omitting leading zeros in IPv6 address notation?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    In IPv6 address notation, leading zeros in each hextet can be omitted for simplification, while trailing zeros must be retained. Additionally, contiguous segments of zeros can be represented by a double colon, but this can only be used once to avoid ambiguity.
  page_keywords: >-
    IPv6, addressing, notation, leading zeros, hextet, hexadecimal, compression, double colon, uniqueness, readability
author: QuickTakes
question: >-
    What is the rule for omitting leading zeros in IPv6 address notation?
answer: >-
    In IPv6 address notation, the rule for omitting leading zeros is straightforward. Each hextet (which consists of four hexadecimal digits) can have its leading zeros removed to simplify the representation. For example:\n\n- The hextet `01ab` can be represented as `1ab`.\n- The hextet `09f0` can be represented as `9f0`.\n- The hextet `0a00` can be represented as `a00`.\n- The hextet `00ab` can be represented as `ab`.\n\nIt is important to note that this rule applies only to leading zeros; trailing zeros must be retained to avoid ambiguity in the address representation. For instance, the hextet `0000` must remain as `0000` and cannot be shortened to `0`.\n\nAdditionally, IPv6 notation allows for the use of a double colon (`::`) to replace contiguous segments of zeros, but this can only be used once in an address to prevent confusion. For example, the address `2001:0db8:0000:1111:0000:0000:0000:0200` can be compressed to `2001:db8:0:1111::200`, where the `::` replaces the contiguous zeros.\n\nThese rules help make IPv6 addresses easier to read and write while maintaining their uniqueness and clarity.
subject: Computer Science
file_name: what-is-the-rule-for-omitting-leading-zeros-in-ipv6-address-notation.md
url: /learn/computer-science/questions/what-is-the-rule-for-omitting-leading-zeros-in-ipv6-address-notation
score: -1.0
related_article1:
    id: 165753
    title: What is the role of the Global Routing Prefix in IPv6 subnetting?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-role-of-the-global-routing-prefix-in-ipv6-subnetting
related_article2:
    id: 165761
    title: How does the compressed format of IPv6 addresses work?
    subject: Computer Science
    url: /learn/computer-science/questions/how-does-the-compressed-format-of-ipv6-addresses-work
related_article3:
    id: 165743
    title: What is the recommended prefix length for IPv6 addresses and why?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-recommended-prefix-length-for-ipv6-addresses-and-why
related_article4:
    id: 165744
    title: Describe the characteristics of a Global Unicast Address (GUA) in IPv6.
    subject: Computer Science
    url: /learn/computer-science/questions/describe-the-characteristics-of-a-global-unicast-address-gua-in-ipv6
related_article5:
    id: 165749
    title: What is the EUI-64 method in the context of IPv6 addressing?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-eui64-method-in-the-context-of-ipv6-addressing
---

&nbsp;