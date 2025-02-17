---
_schema: default
id: 131642
date: 2024-12-17
title: >-
    What are the types of user-defined functions in C++?
article_title: >-
    What are the types of user-defined functions in C++?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content describes the types of user-defined functions in C++, including void functions, return value functions, inline functions, function overloading, friend functions, virtual functions, and function templates.
  page_keywords: >-
    user-defined functions, C++, void functions, return value functions, inline functions, function overloading, friend functions, virtual functions, function templates, modularity, reusability, code organization
author: QuickTakes
question: >-
    What are the types of user-defined functions in C++?
answer: >-
    In C++, user-defined functions can be categorized into several types based on their characteristics and usage. Here are the main types of user-defined functions in C++:\n\n1. **Void Functions**: These functions do not return a value. They perform a specific task but do not provide any output to the calling function. For example:\n   ```cpp\n   void displayMessage() {\n       cout << "Hello, World!" << endl;\n   }\n   ```\n\n2. **Functions that Return a Value**: These functions perform a task and return a value to the calling function. The return type must be specified in the function declaration. For example:\n   ```cpp\n   int add(int x, int y) {\n       return x + y;\n   }\n   ```\n\n3. **Inline Functions**: These are functions defined with the `inline` keyword, which suggests to the compiler to insert the function's code directly at the point of call, rather than performing a traditional function call. This can improve performance for small functions.\n   ```cpp\n   inline int square(int x) {\n       return x * x;\n   }\n   ```\n\n4. **Function Overloading**: This allows multiple functions to have the same name but different parameters (type or number). The correct function is called based on the arguments passed.\n   ```cpp\n   int multiply(int a, int b) {\n       return a * b;\n   }\n   double multiply(double a, double b) {\n       return a * b;\n   }\n   ```\n\n5. **Friend Functions**: These are functions that are not members of a class but have access to its private and protected members. They are declared using the `friend` keyword.\n   ```cpp\n   class Box {\n       private:\n           int width;\n       public:\n           Box(int w) : width(w) {}\n           friend void printWidth(Box box);\n   };\n   void printWidth(Box box) {\n       cout << "Width: " << box.width << endl;\n   }\n   ```\n\n6. **Virtual Functions**: These are used in the context of inheritance and allow derived classes to override methods of the base class. They enable polymorphism.\n   ```cpp\n   class Base {\n   public:\n       virtual void show() {\n           cout << "Base class show function called." << endl;\n       }\n   };\n   class Derived : public Base {\n   public:\n       void show() override {\n           cout << "Derived class show function called." << endl;\n       }\n   };\n   ```\n\n7. **Function Templates**: These allow the creation of functions that can operate with any data type. They are defined using the `template` keyword.\n   ```cpp\n   template <typename T>\n   T add(T a, T b) {\n       return a + b;\n   }\n   ```\n\nThese types of user-defined functions enhance the modularity, reusability, and organization of code in C++, making it easier to manage complex programs.
subject: Computer Science
file_name: what-are-the-types-of-userdefined-functions-in-c.md
url: /learn/computer-science/questions/what-are-the-types-of-userdefined-functions-in-c
score: -1.0
related_article1:
    id: 131624
    title: >-
        How are string return types used in C++ functions?
    subject: Computer Science
    url: /learn/computer-science/questions/how-are-string-return-types-used-in-c-functions
related_article2:
    id: 131621
    title: >-
        How does an integer return type function work in C++?
    subject: Computer Science
    url: /learn/computer-science/questions/how-does-an-integer-return-type-function-work-in-c
related_article3:
    id: 131635
    title: >-
        In what ways do functions improve code readability?
    subject: Computer Science
    url: /learn/computer-science/questions/in-what-ways-do-functions-improve-code-readability
related_article4:
    id: 131635
    title: >-
        In what ways do functions improve code readability?
    subject: Computer Science
    url: /learn/computer-science/questions/in-what-ways-do-functions-improve-code-readability
related_article5:
    id: 131625
    title: >-
        What is a void return type and when is it used in functions?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-a-void-return-type-and-when-is-it-used-in-functions
---

&nbsp;