---
_schema: default
id: 165723
date: 2025-01-29
title: >-
    How do Class A, B, and C IPv4 addresses differ in terms of network and host portions?
article_title: >-
    How do Class A, B, and C IPv4 addresses differ in terms of network and host portions?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content explains the differences between Class A, B, and C IPv4 addresses in terms of their network and host portions, prefix lengths, and address capacities.
  page_keywords: >-
    Class A, Class B, Class C, IPv4 addresses, network portion, host portion, prefix length, address range, total addresses, address capacity, network addressing, classful addressing, CIDR
author: QuickTakes
question: >-
    How do Class A, B, and C IPv4 addresses differ in terms of network and host portions?
answer: >-
    Class A, B, and C IPv4 addresses differ primarily in their network and host portions, which are determined by their fixed prefix lengths. Here’s a detailed breakdown:\n\n### Class A\n- **Address Range**: 1.0.0.0 to 126.0.0.0\n- **Prefix Length**: /8\n- **Network Portion**: The first octet (8 bits) represents the network.\n- **Host Portion**: The remaining three octets (24 bits) represent the hosts.\n- **Total Addresses**: Approximately 16 million addresses per Class A network (2^24 - 2 for network and broadcast addresses).\n\n### Class B\n- **Address Range**: 128.0.0.0 to 191.255.255.255\n- **Prefix Length**: /16\n- **Network Portion**: The first two octets (16 bits) represent the network.\n- **Host Portion**: The remaining two octets (16 bits) represent the hosts.\n- **Total Addresses**: Approximately 65,534 addresses per Class B network (2^16 - 2 for network and broadcast addresses).\n\n### Class C\n- **Address Range**: 192.0.0.0 to 223.255.255.255\n- **Prefix Length**: /24\n- **Network Portion**: The first three octets (24 bits) represent the network.\n- **Host Portion**: The last octet (8 bits) represents the hosts.\n- **Total Addresses**: 254 addresses per Class C network (2^8 - 2 for network and broadcast addresses).\n\n### Summary of Differences\n- **Network Portion**: In Class A, the network portion is 8 bits; in Class B, it is 16 bits; and in Class C, it is 24 bits.\n- **Host Portion**: Consequently, the host portion increases from 24 bits in Class A to 16 bits in Class B, and finally to 8 bits in Class C.\n- **Address Capacity**: Class A can support the largest number of hosts, followed by Class B, and then Class C, which is designed for smaller networks.\n\nThis classful addressing scheme has limitations, such as inefficient use of address space, which led to the development of Classless Inter-Domain Routing (CIDR) for more flexible address allocation.
subject: Computer Science
file_name: how-do-class-a-b-and-c-ipv4-addresses-differ-in-terms-of-network-and-host-portions.md
url: /learn/computer-science/questions/how-do-class-a-b-and-c-ipv4-addresses-differ-in-terms-of-network-and-host-portions
score: -1.0
related_article1:
    id: 165725
    title: >-
        Explain the difference between subnetting on an octet boundary and within an octet boundary.
    subject: Computer Science
    url: /learn/computer-science/questions/explain-the-difference-between-subnetting-on-an-octet-boundary-and-within-an-octet-boundary
related_article2:
    id: 165733
    title: >-
        How does subnetting contribute to reducing broadcast traffic and improving network performance?
    subject: Computer Science
    url: /learn/computer-science/questions/how-does-subnetting-contribute-to-reducing-broadcast-traffic-and-improving-network-performance
related_article3:
    id: 165731
    title: >-
        What is the significance of using private IPv4 address space within intranets?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-significance-of-using-private-ipv4-address-space-within-intranets
related_article4:
    id: 165727
    title: >-
        What are the potential problems associated with large broadcast domains?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-potential-problems-associated-with-large-broadcast-domains
related_article5:
    id: 165725
    title: >-
        Explain the difference between subnetting on an octet boundary and within an octet boundary.
    subject: Computer Science
    url: /learn/computer-science/questions/explain-the-difference-between-subnetting-on-an-octet-boundary-and-within-an-octet-boundary
---

&nbsp;