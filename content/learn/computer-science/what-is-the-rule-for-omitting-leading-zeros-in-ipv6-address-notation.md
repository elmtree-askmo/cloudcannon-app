---
_schema: default
id: 165762
date: 2025-01-29
title: What is the rule for omitting leading zeros in IPv6 address notation?
article_title: What is the rule for omitting leading zeros in IPv6 address notation?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    This content explains the rules for omitting leading zeros in IPv6 address notation, including examples and guidelines for using the double colon for compressing contiguous segments of zeros.
  page_keywords: >-
    IPv6, leading zeros, hexadecimals, hextet, notation, compression, double colon, address representation, contiguous zeros
author: QuickTakes
question: >-
    What is the rule for omitting leading zeros in IPv6 address notation?
answer: >-
    In IPv6 address notation, the rule for omitting leading zeros is straightforward. Each hextet (which consists of four hexadecimal digits) can have its leading zeros removed to simplify the representation. For example:\n\n- The hextet `01ab` can be represented as `1ab`.\n- The hextet `09f0` can be represented as `9f0`.\n- The hextet `0a00` can be represented as `a00`.\n- The hextet `00ab` can be represented as `ab`.\n\nIt is important to note that this rule applies only to leading zeros; trailing zeros must be retained to avoid ambiguity in the address representation. For instance, the hextet `0000` must remain as `0000` and cannot be shortened to `0`.\n\nAdditionally, IPv6 notation allows for the use of a double colon (`::`) to replace contiguous segments of zeros, but this can only be used once in an address to prevent confusion. For example, the address `2001:0db8:0000:1111:0000:0000:0000:0200` can be compressed to `2001:db8:0:1111::200`, where the `::` replaces the contiguous zeros.\n\nThese rules help make IPv6 addresses easier to read and write while maintaining their uniqueness and clarity.
subject: Computer science
file_name: what-is-the-rule-for-omitting-leading-zeros-in-ipv6-address-notation.md
url: /learn/computer-science/questions/what-is-the-rule-for-omitting-leading-zeros-in-ipv6-address-notation
---

&nbsp;