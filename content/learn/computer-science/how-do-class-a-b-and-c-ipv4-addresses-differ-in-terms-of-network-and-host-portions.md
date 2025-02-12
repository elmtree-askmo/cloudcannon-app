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
    Class A, B, and C IPv4 addresses differ in network and host portions, with Class A having the largest network portion and capacity followed by Class B and C, designed for smaller networks.
  page_keywords: >-
    Class A, Class B, Class C, IPv4 addresses, network portion, host portion, address range, prefix length, total addresses, Classful addressing, CIDR
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
    id: 165726
    title: >-
        What is a broadcast domain and how do routers affect them?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-a-broadcast-domain-and-how-do-routers-affect-them
related_article2:
    id: 165729
    title: >-
        What are the differences between common subnet masks such as /8, /16, and /24?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-differences-between-common-subnet-masks-such-as-8-16-and-24
related_article3:
    id: 165729
    title: >-
        What are the differences between common subnet masks such as /8, /16, and /24?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-differences-between-common-subnet-masks-such-as-8-16-and-24
related_article4:
    id: 165726
    title: >-
        What is a broadcast domain and how do routers affect them?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-a-broadcast-domain-and-how-do-routers-affect-them
---

&nbsp;