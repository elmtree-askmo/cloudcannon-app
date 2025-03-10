---
_schema: default
id: 165690
date: 2025-01-29
title: What are the differences between /8, /16, and /24 subnet masks, and what are non-natural octet boundaries?
article_title: What are the differences between /8, /16, and /24 subnet masks, and what are non-natural octet boundaries?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    This content discusses the differences between /8, /16, and /24 subnet masks in terms of network and host portions of an IPv4 address, their usable hosts, and the concept of non-natural octet boundaries in subnetting.
  page_keywords: >-
    subnet masks, /8 subnet mask, /16 subnet mask, /24 subnet mask, network portion, host portion, usable hosts, non-natural octet boundaries, IP address, subnetting, bits allocation, network design
author: QuickTakes
question: >-
    What are the differences between /8, /16, and /24 subnet masks, and what are non-natural octet boundaries?
answer: >-
    The differences between /8, /16, and /24 subnet masks primarily relate to the number of bits allocated for the network and host portions of an IPv4 address, which in turn affects the number of available hosts within each subnet.\n\n### Subnet Masks Overview\n\n1. **/8 Subnet Mask**: \n   - **Subnet Mask**: 255.0.0.0\n   - **Network Portion**: 8 bits (first octet)\n   - **Host Portion**: 24 bits (remaining three octets)\n   - **Number of Usable Hosts**: $2^{24} - 2 = 16,777,214$ usable addresses (subtracting 2 for the network and broadcast addresses).\n\n2. **/16 Subnet Mask**: \n   - **Subnet Mask**: 255.255.0.0\n   - **Network Portion**: 16 bits (first two octets)\n   - **Host Portion**: 16 bits (remaining two octets)\n   - **Number of Usable Hosts**: $2^{16} - 2 = 65,534$ usable addresses.\n\n3. **/24 Subnet Mask**: \n   - **Subnet Mask**: 255.255.255.0\n   - **Network Portion**: 24 bits (first three octets)\n   - **Host Portion**: 8 bits (last octet)\n   - **Number of Usable Hosts**: $2^{8} - 2 = 254$ usable addresses.\n\n### Non-Natural Octet Boundaries\n\nSubnet masks do not have to end on "natural octet boundaries," which means that the division between the network and host portions can occur at any bit position, not just at the end of an octet (8 bits). For example, a subnet mask of /22 (255.255.252.0) would allocate 22 bits for the network portion and 10 bits for the host portion, which does not align with the natural boundaries of the octets.\n\nThis flexibility allows for more efficient use of IP address space, as it enables network administrators to create subnets that better fit the specific needs of their networks, rather than being constrained to the traditional classful addressing scheme (Class A, B, C) that strictly adheres to octet boundaries.\n\n### Summary\n\nIn summary, the key differences between /8, /16, and /24 subnet masks lie in the number of bits allocated for the network and host portions, which directly affects the number of usable IP addresses in each subnet. Additionally, subnetting can occur at non-natural octet boundaries, allowing for more tailored network designs.
subject: Computer science
file_name: what-are-the-differences-between-8-16-and-24-subnet-masks-and-what-are-nonnatural-octet-boundaries.md
url: /learn/computer-science/questions/what-are-the-differences-between-8-16-and-24-subnet-masks-and-what-are-nonnatural-octet-boundaries
---

&nbsp;