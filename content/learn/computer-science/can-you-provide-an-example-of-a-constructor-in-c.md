---
_schema: default
id: 25559
date: 2024-11-22
title: >-
    Can you provide an example of a constructor in C++?
article_title: >-
    Can you provide an example of a constructor in C++?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content explains the concept of a constructor in C++, providing an example of a default constructor and how it initializes class members upon object creation.
  page_keywords: >-
    C++, constructor, class, default constructor, object initialization, member function, data members, programming example, C++ coding
author: QuickTakes
question: >-
    Can you provide an example of a constructor in C++?
answer: >-
    In C++, a constructor is a special member function that is automatically called when an object of a class is created. It is primarily used to initialize the data members of the class. Constructors have the same name as the class and do not have a return type, not even `void`.\n\nHere is an example of a default constructor in C++:\n\n```cpp\n#include <iostream>\nusing namespace std;\n\n// Class definition\nclass Wall {\nprivate:\n    double length;\n\npublic:\n    // Default constructor to initialize variable\n    Wall() : length{5.5} {\n        cout << "Creating a wall with length: " << length << endl;\n    }\n};\n\nint main() {\n    // Creating an object of Wall class\n    Wall myWall; // This will invoke the constructor\n    return 0;\n}\n```\n\nIn this example, the `Wall` class has a default constructor that initializes the `length` member variable to `5.5`. When an object of the `Wall` class is created (in this case, `myWall`), the constructor is automatically called, and it outputs the message indicating that a wall is being created with the specified length. \n\nThis demonstrates how constructors are used to set initial values for class members when an object is instantiated.
subject: Computer Science
file_name: can-you-provide-an-example-of-a-constructor-in-c.md
url: /learn/computer-science/questions/can-you-provide-an-example-of-a-constructor-in-c
score: -1.0
related_article1:
    id: 25578
    title: >-
        How do access specifiers affect the accessibility of class members in C++?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-access-specifiers-affect-the-accessibility-of-class-members-in-c
---

&nbsp;