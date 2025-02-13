---
_schema: default
id: 131639
date: 2024-12-17
title: >-
    Can you list some functions available in the string library?
article_title: >-
    Can you list some functions available in the string library?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content lists and explains common functions available in the C++ string library, specifically for std::string objects, facilitating string manipulation and handling.
  page_keywords: >-
    C++, string library, std::string, string functions, length, size, at, append, compare, substr, find, replace, insert, erase, c_str
author: QuickTakes
question: >-
    Can you list some functions available in the string library?
answer: >-
    In C++, the string library provides a variety of functions that allow for efficient manipulation and handling of strings. Here are some commonly used functions available in the C++ string library (specifically for `std::string` objects):\n\n1. **`length()` or `size()`**: Returns the number of characters in the string.\n   ```cpp\n   std::string str = "Hello";\n   size_t len = str.length(); // or str.size();\n   ```\n\n2. **`at(index)`**: Returns the character at the specified index, with bounds checking.\n   ```cpp\n   char ch = str.at(1); // Returns 'e'\n   ```\n\n3. **`append(str)`**: Appends the given string to the end of the current string.\n   ```cpp\n   str.append(" World");\n   ```\n\n4. **`compare(str)`**: Compares the current string with another string.\n   ```cpp\n   int result = str.compare("Hello World"); // Returns 0 if equal\n   ```\n\n5. **`substr(start, length)`**: Returns a substring starting from the specified index and of the specified length.\n   ```cpp\n   std::string sub = str.substr(0, 5); // Returns "Hello"\n   ```\n\n6. **`find(substring)`**: Searches for the first occurrence of the specified substring and returns its position.\n   ```cpp\n   size_t pos = str.find("World"); // Returns the starting index of "World"\n   ```\n\n7. **`replace(start, length, str)`**: Replaces a portion of the string with another string.\n   ```cpp\n   str.replace(6, 5, "C++"); // Replaces "World" with "C++"\n   ```\n\n8. **`insert(index, str)`**: Inserts the specified string at the given index.\n   ```cpp\n   str.insert(5, ","); // Inserts a comma after "Hello"\n   ```\n\n9. **`erase(start, length)`**: Removes a portion of the string starting from the specified index.\n   ```cpp\n   str.erase(5, 1); // Removes the comma\n   ```\n\n10. **`c_str()`**: Returns a pointer to a null-terminated character array representing the string.\n    ```cpp\n    const char* cstr = str.c_str();\n    ```\n\nThese functions provide a robust set of tools for string manipulation in C++, making it easier to perform various operations without the complexities associated with C-style strings.
subject: Computer Science
file_name: can-you-list-some-functions-available-in-the-string-library.md
url: /learn/computer-science/questions/can-you-list-some-functions-available-in-the-string-library
score: -1.0
related_article1:
    id: 131646
    title: >-
        What are some practical programming tasks that can be solved using C++ functions?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-some-practical-programming-tasks-that-can-be-solved-using-c-functions
related_article2:
    id: 131620
    title: >-
        What are the different return types available in C++ functions?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-different-return-types-available-in-c-functions
related_article3:
    id: 131642
    title: >-
        What are the types of user-defined functions in C++?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-types-of-userdefined-functions-in-c
related_article4:
    id: 131621
    title: >-
        How does an integer return type function work in C++?
    subject: Computer Science
    url: /learn/computer-science/questions/how-does-an-integer-return-type-function-work-in-c
related_article5:
    id: 131624
    title: >-
        How are string return types used in C++ functions?
    subject: Computer Science
    url: /learn/computer-science/questions/how-are-string-return-types-used-in-c-functions
---

&nbsp;