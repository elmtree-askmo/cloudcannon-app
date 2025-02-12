---
_schema: default
id: 152721
date: 2025-01-15
title: >-
    How can you access struct members using pointers in C++?
article_title: >-
    How can you access struct members using pointers in C++?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content explains how to access members of a struct using pointers in C++, detailing two methods: using the arrow operator (->) and the combination of dereference (*) and dot (.) operators, along with example code.
  page_keywords: >-
    C++, struct, pointers, arrow operator, dereference operator, member access, example, programming, tutorial
author: QuickTakes
question: >-
    How can you access struct members using pointers in C++?
answer: >-
    In C++, you can access members of a struct using pointers in a couple of ways, primarily through the use of the arrow operator (`->`) and the dereference operator (`*`) combined with the dot operator (`.`). Here’s a detailed explanation of both methods:\n\n### 1. Using the Arrow Operator (`->`)\n\nThe arrow operator is the most common way to access members of a struct through a pointer. When you have a pointer to a struct, you can use the `->` operator to directly access its members. This operator dereferences the pointer and accesses the member in a single step.\n\n**Example:**\n```cpp\n#include <iostream>\n\nstruct Person {\n    std::string name;\n    int age;\n};\n\nint main() {\n    Person person1 = {"Alice", 30};\n    Person* ptr = &person1; // Pointer to person1\n\n    // Accessing members using the arrow operator\n    std::cout << "Name: " << ptr->name << std::endl; // Outputs: Name: Alice\n    std::cout << "Age: " << ptr->age << std::endl;   // Outputs: Age: 30\n\n    return 0;\n}\n```\n\n### 2. Using Dereference Operator (`*`) and Dot Operator (`.`)\n\nAlternatively, you can first dereference the pointer using the `*` operator and then access the member using the dot operator. This method requires two steps: dereferencing the pointer and then accessing the member.\n\n**Example:**\n```cpp\n#include <iostream>\n\nstruct Person {\n    std::string name;\n    int age;\n};\n\nint main() {\n    Person person1 = {"Bob", 25};\n    Person* ptr = &person1; // Pointer to person1\n\n    // Accessing members using dereference and dot operator\n    std::cout << "Name: " << (*ptr).name << std::endl; // Outputs: Name: Bob\n    std::cout << "Age: " << (*ptr).age << std::endl;   // Outputs: Age: 25\n\n    return 0;\n}\n```\n\n### Summary\n\n- Use the `->` operator for a concise way to access struct members through a pointer.\n- Use the `*` operator followed by the `.` operator if you prefer to dereference the pointer first.\n\nBoth methods are valid, but the arrow operator is generally preferred for its simplicity and readability.
subject: Computer Science
file_name: how-can-you-access-struct-members-using-pointers-in-c.md
url: /learn/computer-science/questions/how-can-you-access-struct-members-using-pointers-in-c
score: -1.0
related_article1:
    id: 152717
    title: >-
        How do you initialize a pointer within a struct in C++?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-initialize-a-pointer-within-a-struct-in-c
related_article2:
    id: 152559
    title: >-
        How do you initialize a pointer within a struct in C++?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-initialize-a-pointer-within-a-struct-in-c
related_article3:
    id: 152622
    title: >-
        What is dynamic memory allocation and how does it differ between heap and stack memory?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-dynamic-memory-allocation-and-how-does-it-differ-between-heap-and-stack-memory
related_article4:
    id: 152622
    title: >-
        What is dynamic memory allocation and how does it differ between heap and stack memory?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-dynamic-memory-allocation-and-how-does-it-differ-between-heap-and-stack-memory
related_article5:
    id: 152714
    title: >-
        What is a pointer in C++ and how is it declared?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-a-pointer-in-c-and-how-is-it-declared
---

&nbsp;