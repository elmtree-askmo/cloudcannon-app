---
_schema: default
id: 29683
date: 2024-11-23
title: >-
    Can you provide examples of using dynamic cast in C++?
article_title: >-
    Can you provide examples of using dynamic cast in C++?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content provides examples and explanations of using dynamic_cast in C++, illustrating its role in safe downcasting within inheritance hierarchies, and handling both successful and failed casts.
  page_keywords: >-
    dynamic_cast,C++,polymorphic types,safe downcasting,inheritance hierarchy,examples,base class,derived class,runtime type checking,virtual function
author: QuickTakes
question: >-
    Can you provide examples of using dynamic cast in C++?
answer: >-
    Dynamic casting in C++ is a powerful feature that allows for safe downcasting in an inheritance hierarchy. It is particularly useful when working with polymorphic types, as it performs runtime type checking to ensure that the cast is valid. Here are some examples to illustrate how to use `dynamic_cast` effectively.\n\n### Example 1: Basic Usage of `dynamic_cast`\n\nIn this example, we have a base class `Base` and a derived class `Derived`. We will demonstrate how to safely downcast a base class pointer to a derived class pointer using `dynamic_cast`.\n\n```cpp\n#include <iostream>\n\nclass Base {\npublic:\n    virtual void show() { std::cout << "Base class" << std::endl; }\n    virtual ~Base() {} // Virtual destructor\n};\n\nclass Derived : public Base {\npublic:\n    void show() override { std::cout << "Derived class" << std::endl; }\n};\n\nint main() {\n    Base* b = new Derived(); // Base pointer pointing to Derived object\n    Derived* d = dynamic_cast<Derived*>(b); // Safe downcast\n\n    if (d) {\n        d->show(); // Outputs: Derived class\n    } else {\n        std::cout << "Dynamic cast failed!" << std::endl;\n    }\n\n    delete b; // Clean up\n    return 0;\n}\n```\n\n### Example 2: Handling Failed Casts\n\nIn this example, we will show what happens when a `dynamic_cast` fails. If the cast is invalid, `dynamic_cast` will return a null pointer.\n\n```cpp\n#include <iostream>\n\nclass Base {\npublic:\n    virtual void show() { std::cout << "Base class" << std::endl; }\n    virtual ~Base() {}\n};\n\nclass AnotherDerived : public Base {\npublic:\n    void show() override { std::cout << "AnotherDerived class" << std::endl; }\n};\n\nint main() {\n    Base* b = new Base(); // Base pointer pointing to Base object\n    Derived* d = dynamic_cast<Derived*>(b); // Attempt to downcast\n\n    if (d) {\n        d->show();\n    } else {\n        std::cout << "Dynamic cast failed!" << std::endl; // Outputs: Dynamic cast failed!\n    }\n\n    delete b; // Clean up\n    return 0;\n}\n```\n\n### Example 3: Using `dynamic_cast` with References\n\nWhen using `dynamic_cast` with references, if the cast fails, it throws a `std::bad_cast` exception. Here’s how to handle that:\n\n```cpp\n#include <iostream>\n#include <exception>\n\nclass Base {\npublic:\n    virtual void show() { std::cout << "Base class" << std::endl; }\n    virtual ~Base() {}\n};\n\nclass Derived : public Base {\npublic:\n    void show() override { std::cout << "Derived class" << std::endl; }\n};\n\nint main() {\n    Base b; // Base object\n    try {\n        Derived& d = dynamic_cast<Derived&>(b); // Attempt to downcast\n        d.show(); // This line will not be executed\n    } catch (const std::bad_cast& e) {\n        std::cout << "Dynamic cast failed: " << e.what() << std::endl; // Outputs: Dynamic cast failed\n    }\n\n    return 0;\n}\n```\n\n### Summary\n\n- `dynamic_cast` is used for safe downcasting in C++ and performs runtime type checking.\n- If the cast is successful, it returns a pointer of the converted type; if it fails, it returns a null pointer (for pointers) or throws a `std::bad_cast` exception (for references).\n- It is essential to have at least one virtual function in the base class to use `dynamic_cast`, as this enables runtime type identification (RTTI).\n\nThese examples demonstrate the utility and safety of `dynamic_cast` in C++ inheritance hierarchies.
subject: Computer Science
file_name: can-you-provide-examples-of-using-dynamic-cast-in-c.md
url: /learn/computer-science/questions/can-you-provide-examples-of-using-dynamic-cast-in-c
score: -1.0

---

&nbsp;