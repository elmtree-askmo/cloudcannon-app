---
_schema: default
id: 165786
date: 2025-01-29
title: What is the purpose of selective acknowledgment (SACK) in TCP?
article_title: What is the purpose of selective acknowledgment (SACK) in TCP?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    Selective Acknowledgment (SACK) is an optional TCP feature that enhances data transmission efficiency by allowing the receiver to indicate which segments have been successfully received, enabling targeted retransmissions and improving performance in lossy networks.
  page_keywords: >-
    Selective Acknowledgment,SACK,TCP,Transmission Control Protocol,retransmission,out-of-order segments,network efficiency,three-way handshake,throughput,packet loss
author: QuickTakes
question: >-
    What is the purpose of selective acknowledgment (SACK) in TCP?
answer: >-
    Selective Acknowledgment (SACK) is an optional feature in the Transmission Control Protocol (TCP) that enhances the efficiency of data transmission, particularly in scenarios where packet loss occurs. The primary purpose of SACK is to allow the receiver to inform the sender about which segments of data have been successfully received, including those that may have arrived out of order.\n\n### Key Functions of SACK:\n\n1. **Efficient Retransmissions**: \n   - When a segment is lost during transmission, the sender typically needs to retransmit that segment and all subsequent segments. However, with SACK, the receiver can specify exactly which segments have been received. This means the sender can retransmit only the missing segments, rather than all segments that follow the lost one. This selective retransmission reduces unnecessary data transfer and improves overall network efficiency.\n\n2. **Handling Out-of-Order Segments**: \n   - SACK allows the receiver to acknowledge non-contiguous segments. This is particularly useful in networks where packets may take different paths and arrive at the destination in a different order than they were sent. By acknowledging out-of-order segments, SACK helps maintain the flow of data and ensures that the sender is aware of which segments need to be resent.\n\n3. **Negotiation During Connection Setup**: \n   - SACK is negotiated during the TCP three-way handshake. If both the sender and receiver support SACK, they can utilize this feature to enhance their communication session.\n\n4. **Improved Throughput**: \n   - By minimizing the amount of data that needs to be retransmitted, SACK can lead to improved throughput in TCP connections, especially in high-latency or lossy networks.\n\n### Conclusion:\nIn summary, the purpose of Selective Acknowledgment (SACK) in TCP is to improve the efficiency of data transmission by allowing the receiver to inform the sender about which segments have been successfully received, thus enabling targeted retransmissions of only the missing segments. This feature is crucial for maintaining high performance in TCP communications, particularly in challenging network conditions.
subject: Computer science
file_name: what-is-the-purpose-of-selective-acknowledgment-sack-in-tcp.md
url: /learn/computer-science/questions/what-is-the-purpose-of-selective-acknowledgment-sack-in-tcp
score: -1.0
---

&nbsp;