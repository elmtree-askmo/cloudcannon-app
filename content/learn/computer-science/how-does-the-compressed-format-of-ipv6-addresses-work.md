---
_schema: default
id: 165761
date: 2025-01-29
title: >-
    How does the compressed format of IPv6 addresses work?
article_title: >-
    How does the compressed format of IPv6 addresses work?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content explains how the compressed format of IPv6 addresses works, detailing techniques like the omission of leading zeros and the use of double colon to simplify the representation of these lengthy 128-bit addresses.
  page_keywords: >-
    IPv6, address compression, leading zeros, double colon, hextet, hexadecimal digits, contiguous zeros, notation rules, network addressing
author: QuickTakes
question: >-
    How does the compressed format of IPv6 addresses work?
answer: >-
    The compressed format of IPv6 addresses is designed to simplify the representation of these addresses, which are inherently lengthy due to their 128-bit size. Here’s how the compression works:\n\n1. **Omission of Leading Zeros**: Each hextet (a group of four hexadecimal digits) in an IPv6 address can have leading zeros omitted. For example, the hextet `00ab` can be represented simply as `ab`. This rule helps reduce the overall length of the address.\n\n2. **Use of Double Colon (::)**: The double colon is used to replace one or more contiguous hextets that are all zeros. This notation can only be used once in an address to avoid ambiguity. For instance, if an address has multiple consecutive hextets of zeros, you can replace them with `::`. \n\n   For example, the full IPv6 address:\n   ```\n   2001:0db8:0000:1111:0000:0000:0000:0200\n   ```\n   can be compressed to:\n   ```\n   2001:db8:0:1111::200\n   ```\n   Here, the leading zeros in the hextets have been omitted, and the contiguous zeros in the middle have been replaced with `::`.\n\n3. **Notation Rules**: According to the IPv6 address notation rules:\n   - Leading zeros in each hextet can be omitted.\n   - The double colon can only replace a single contiguous string of one or more 16-bit hextets that consist entirely of zeros.\n\nThese compression techniques make IPv6 addresses more manageable and easier to read, which is particularly useful given the length and complexity of full IPv6 addresses.
subject: Computer Science
file_name: how-does-the-compressed-format-of-ipv6-addresses-work.md
url: /learn/computer-science/questions/how-does-the-compressed-format-of-ipv6-addresses-work
score: -1.0
related_article1:
    id: 165755
    title: >-
        How does the dual stack technique facilitate IPv6 coexistence with IPv4?
    subject: Computer Science
    url: /learn/computer-science/questions/how-does-the-dual-stack-technique-facilitate-ipv6-coexistence-with-ipv4
related_article2:
    id: 165744
    title: >-
        Describe the characteristics of a Global Unicast Address (GUA) in IPv6.
    subject: Computer Science
    url: /learn/computer-science/questions/describe-the-characteristics-of-a-global-unicast-address-gua-in-ipv6
related_article3:
    id: 165763
    title: >-
        When is the double colon notation used in IPv6 addresses, and what is its limitation?
    subject: Computer Science
    url: /learn/computer-science/questions/when-is-the-double-colon-notation-used-in-ipv6-addresses-and-what-is-its-limitation
related_article4:
    id: 165744
    title: >-
        Describe the characteristics of a Global Unicast Address (GUA) in IPv6.
    subject: Computer Science
    url: /learn/computer-science/questions/describe-the-characteristics-of-a-global-unicast-address-gua-in-ipv6
related_article5:
    id: 165758
    title: >-
        How is static IPv6 address configuration performed on a router?
    subject: Computer Science
    url: /learn/computer-science/questions/how-is-static-ipv6-address-configuration-performed-on-a-router
---

&nbsp;