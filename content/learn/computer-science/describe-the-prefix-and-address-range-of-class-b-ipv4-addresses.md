---
_schema: default
id: 165698
date: 2025-01-29
title: Describe the prefix and address range of Class B IPv4 addresses.
article_title: Describe the prefix and address range of Class B IPv4 addresses.
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    Class B IPv4 addresses utilize a prefix length of /16 and range from 128.0.0.0 to 191.255.255.255, supporting moderate-sized networks.
  page_keywords: >-
    Class B, IPv4 addresses, addressing system, prefix length, address range, network portion, host portion, legacy classful addressing
author: QuickTakes
question: >-
    Describe the prefix and address range of Class B IPv4 addresses.
answer: >-
    Class B IPv4 addresses are part of the legacy classful addressing system, which divides the IPv4 address space into different classes based on the leading bits of the address. Here are the key details regarding Class B addresses:\n\n### Prefix and Address Range\n- **Prefix Length**: Class B addresses have a prefix length of /16. This means that the first 16 bits of the address are used to identify the network portion, while the remaining 16 bits are used for host addresses within that network.\n- **Address Range**: The range of Class B addresses is from 128.0.0.0 to 191.255.255.255. This range is determined by the leading bits of the address, which for Class B are in the binary format `10xxxxxx` (where `x` can be either 0 or 1).\n\n### Network and Host Portions\n- In a Class B address, the first two octets (16 bits) represent the network portion, and the last two octets (16 bits) represent the host portion. This allows for a total of 65,536 possible addresses within each Class B network (2^16), of which 65,534 can be assigned to hosts (subtracting the network and broadcast addresses).\n\n### Summary\n- **Class B Address Range**: 128.0.0.0 to 191.255.255.255\n- **Prefix Length**: /16\n- **Network Portion**: First 16 bits\n- **Host Portion**: Last 16 bits\n\nThis structure allows Class B networks to support a moderate number of hosts, making them suitable for medium to large organizations.
subject: Computer science
file_name: describe-the-prefix-and-address-range-of-class-b-ipv4-addresses.md
url: /learn/computer-science/questions/describe-the-prefix-and-address-range-of-class-b-ipv4-addresses
score: -1.0
---

&nbsp;