---
_schema: default
id: 165761
date: 2025-01-29
title: How does the compressed format of IPv6 addresses work?
article_title: How does the compressed format of IPv6 addresses work?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    This content explains how the compressed format of IPv6 addresses works, including the omission of leading zeros and the use of double colon notation to represent contiguous zeros, making the addresses simpler and easier to read.
  page_keywords: >-
    IPv6, compressed format, address representation, leading zeros, double colon notation, hextets, hexadecimal, IPv6 compression, address notation, simplification
author: QuickTakes
question: >-
    How does the compressed format of IPv6 addresses work?
answer: >-
    The compressed format of IPv6 addresses is designed to simplify the representation of these addresses, which are inherently lengthy due to their 128-bit size. Here’s how the compression works:\n\n1. **Omission of Leading Zeros**: Each hextet (a group of four hexadecimal digits) in an IPv6 address can have leading zeros omitted. For example, the hextet `00ab` can be represented simply as `ab`. This rule helps reduce the overall length of the address.\n\n2. **Use of Double Colon (::)**: The double colon is used to replace one or more contiguous hextets that are all zeros. This notation can only be used once in an address to avoid ambiguity. For instance, if an address has multiple consecutive hextets of zeros, you can replace them with `::`. \n\n   For example, the full IPv6 address:\n   ```\n   2001:0db8:0000:1111:0000:0000:0000:0200\n   ```\n   can be compressed to:\n   ```\n   2001:db8:0:1111::200\n   ```\n   Here, the leading zeros in the hextets have been omitted, and the contiguous zeros in the middle have been replaced with `::`.\n\n3. **Notation Rules**: According to the IPv6 address notation rules:\n   - Leading zeros in each hextet can be omitted.\n   - The double colon can only replace a single contiguous string of one or more 16-bit hextets that consist entirely of zeros.\n\nThese compression techniques make IPv6 addresses more manageable and easier to read, which is particularly useful given the length and complexity of full IPv6 addresses.
subject: Computer science
file_name: how-does-the-compressed-format-of-ipv6-addresses-work.md
url: /learn/computer-science/questions/how-does-the-compressed-format-of-ipv6-addresses-work
score: -1.0
---

&nbsp;