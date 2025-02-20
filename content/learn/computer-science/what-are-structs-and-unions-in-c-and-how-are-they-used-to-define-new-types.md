---
_schema: default
id: 24711
date: 2024-11-22
title: >-
    What are structs and unions in C, and how are they used to define new types?
article_title: >-
    What are structs and unions in C, and how are they used to define new types?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Structs and unions in C are user-defined data types that help in grouping different variable types, enhancing code organization and memory efficiency.
  page_keywords: >-
    C programming, structs, unions, user-defined data types, composite data type, memory allocation, member access, practical use cases, data organization, efficient memory management
author: QuickTakes
question: >-
    What are structs and unions in C, and how are they used to define new types?
answer: >-
    In C programming, **structs** and **unions** are user-defined data types that allow programmers to group variables of different types under a single name, enhancing code organization and readability.\n\n### Structs\nA **struct** (short for structure) is a composite data type that groups variables of different types into a single unit. Each member of a struct has its own memory location, meaning that modifying one member does not affect the others. The syntax for defining a struct is as follows:\n\n```c\nstruct Book {\n    char *name;\n    int pages;\n    float price;\n};\n```\n\nIn this example, `Book` is a struct that contains three members: a string for the name, an integer for the number of pages, and a float for the price. To use this struct in a program, you would declare a variable of type `struct Book` and access its members using the dot operator (`.`).\n\n### Unions\nA **union** is similar to a struct but with a key difference: all members of a union share the same memory location. This means that a union can only hold one member value at a time, and the size of the union is determined by the size of its largest member. The syntax for defining a union is as follows:\n\n```c\nunion Data {\n    int intValue;\n    float floatValue;\n    char charValue;\n};\n```\n\nIn this example, `Data` is a union that can store an integer, a float, or a character, but only one of these at any given time. Accessing a member of a union is done in the same way as with structs, using the dot operator.\n\n### Key Differences\n1. **Memory Allocation**:\n   - **Structs** allocate enough memory to store all their members, leading to a size equal to the sum of the sizes of all members (plus any padding).\n   - **Unions** allocate memory equal to the size of their largest member, allowing for more efficient memory usage when only one member is needed at a time.\n\n2. **Member Access**:\n   - In a struct, modifying one member does not affect the others.\n   - In a union, modifying one member will change the value of the other members since they share the same memory location.\n\n### Practical Use Cases\nStructs are typically used when you need to represent a record with multiple attributes, such as a book or a student. Unions are useful in scenarios where you want to save memory and only need to store one of several possible types at a time, such as in a variant data type or when interfacing with hardware where different data types may be used interchangeably.\n\nIn summary, both structs and unions are essential for defining new types in C, allowing for more complex data structures and efficient memory management.
subject: Computer Science
file_name: what-are-structs-and-unions-in-c-and-how-are-they-used-to-define-new-types.md
url: /learn/computer-science/questions/what-are-structs-and-unions-in-c-and-how-are-they-used-to-define-new-types
score: -1.0
related_article1:
    id: 24717
    title: >-
        What are the key steps in manipulating nodes within a linked list in C?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-key-steps-in-manipulating-nodes-within-a-linked-list-in-c
---

&nbsp;