---
_schema: default
id: 165700
date: 2025-01-29
title: What problems were associated with legacy classful addressing, particularly regarding address blocks and wastage?
article_title: What problems were associated with legacy classful addressing, particularly regarding address blocks and wastage?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    This content discusses the problems of legacy classful addressing in IPv4, highlighting inefficiencies, limitations in address blocks, inflexibility in allocation, fragmentation, and the need for CIDR as a more efficient addressing solution.
  page_keywords: >-
    legacy classful addressing, IPv4 address space, address blocks, wastage, inefficient address space, class A, class B, class C, limited address blocks, inflexibility, fragmentation, Classless Inter-Domain Routing, CIDR
author: QuickTakes
question: >-
    What problems were associated with legacy classful addressing, particularly regarding address blocks and wastage?
answer: >-
    Legacy classful addressing, which divides the IPv4 address space into fixed classes (A, B, and C), has several significant problems, particularly concerning address blocks and wastage:\n\n1. **Inefficient Use of Address Space**: The classful addressing scheme allocates a fixed number of addresses based on the class of the network. For instance:\n   - Class A networks have a /8 prefix, allowing for 16,777,214 usable addresses (2^24 - 2, accounting for network and broadcast addresses).\n   - Class B networks have a /16 prefix, allowing for 65,534 usable addresses (2^16 - 2).\n   - Class C networks have a /24 prefix, allowing for 254 usable addresses (2^8 - 2).\n\n   This fixed allocation often leads to significant wastage. For example, if a company requires only 260 addresses, it would be assigned a Class B block, resulting in 65,274 unused addresses. This inefficiency is exacerbated by the limited number of available Class A and Class B blocks, which are insufficient for modern networking needs.\n\n2. **Limited Number of Address Blocks**: The total number of available Class A, B, and C blocks is restricted:\n   - There are only 128 Class A blocks.\n   - There are 16,384 Class B blocks.\n   - There are 2,097,150 Class C blocks.\n\n   This limitation means that as the demand for IP addresses grows, the available address space becomes increasingly constrained, leading to a shortage of addresses for new networks.\n\n3. **Inflexibility**: The rigid structure of classful addressing does not allow for the allocation of address space based on actual needs. Organizations with varying requirements are forced to accept blocks that are either too large or too small, leading to further inefficiencies.\n\n4. **Fragmentation**: The fixed class sizes can lead to fragmentation of the address space, where many small, unused blocks exist between allocated blocks. This fragmentation complicates routing and can lead to inefficient routing tables.\n\n5. **Transition to Classless Addressing**: The limitations of classful addressing prompted the development of Classless Inter-Domain Routing (CIDR), which allows for more flexible allocation of IP addresses based on prefix lengths rather than fixed classes. CIDR enables service providers to allocate address space more efficiently, reducing wastage and addressing the growing demand for IP addresses.\n\nIn summary, the problems associated with legacy classful addressing primarily revolve around inefficient use of address space, limited address blocks, inflexibility in allocation, and fragmentation, all of which have necessitated a shift towards more dynamic and efficient addressing schemes like CIDR.
subject: Computer science
file_name: what-problems-were-associated-with-legacy-classful-addressing-particularly-regarding-address-blocks-and-wastage.md
url: /learn/computer-science/questions/what-problems-were-associated-with-legacy-classful-addressing-particularly-regarding-address-blocks-and-wastage
---

&nbsp;