---
_schema: default
id: 165745
date: 2025-01-29
title: What are the components of the structure of a Global Unicast Address (GUA)?
article_title: What are the components of the structure of a Global Unicast Address (GUA)?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer science
  page_description: >-
    The Global Unicast Address (GUA) in IPv6 is structured into three main components: Global Routing Prefix, Subnet ID, and Interface ID, allowing for unique identification and efficient routing over the internet.
  page_keywords: >-
    Global Unicast Address, GUA, IPv6, global routing prefix, subnet ID, interface ID, internet addressing, networking, unique identification, routing
author: QuickTakes
question: >-
    What are the components of the structure of a Global Unicast Address (GUA)?
answer: >-
    A Global Unicast Address (GUA) in IPv6 is structured to facilitate unique identification and routing over the internet. The components of a GUA can be broken down into three main parts:\n\n1. **Global Routing Prefix**: This is the first part of the GUA and is used to identify the specific network. It is typically assigned by an Internet Service Provider (ISP) and usually consists of the first 48 bits of the address. The global routing prefix allows for the hierarchical structure of the internet, enabling efficient routing.\n\n2. **Subnet ID**: Following the global routing prefix, the next 16 bits are designated for the subnet ID. This part allows organizations to create multiple subnets within their allocated address space. The subnet ID helps in organizing and managing the network by dividing it into smaller, manageable segments.\n\n3. **Interface ID**: The final 64 bits of the GUA are used for the interface ID, which uniquely identifies a specific interface on a device within the subnet. This part can be derived from the MAC address of the device using the Modified EUI-64 format or can be assigned randomly for privacy reasons.\n\nIn summary, a Global Unicast Address (GUA) is structured as follows:\n\n- **Format**: 128 bits total\n- **Global Routing Prefix**: 48 bits\n- **Subnet ID**: 16 bits\n- **Interface ID**: 64 bits\n\nAn example of a GUA is `2001:0db8:85a3:0000:0000:8a2e:0370:7334`, where:\n- `2001:0db8:85a3` represents the global routing prefix,\n- `0000` is the subnet ID,\n- `0000:8a2e:0370:7334` is the interface ID.\n\nThis structure allows GUAs to be globally unique and routable on the internet, facilitating effective communication across different networks.
subject: Computer science
file_name: what-are-the-components-of-the-structure-of-a-global-unicast-address-gua.md
url: /learn/computer-science/questions/what-are-the-components-of-the-structure-of-a-global-unicast-address-gua
score: -1.0
---

&nbsp;