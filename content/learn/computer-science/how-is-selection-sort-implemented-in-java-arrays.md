---
_schema: default
id: 89047
date: 2024-12-05
title: >-
    How is selection sort implemented in Java arrays?
article_title: >-
    How is selection sort implemented in Java arrays?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    A detailed explanation of the selection sort algorithm implemented in Java, including step-by-step instructions, code example, and complexity analysis.
  page_keywords: >-
    selection sort, Java, algorithm, sorting, arrays, implementation, code example, time complexity, space complexity
author: QuickTakes
question: >-
    How is selection sort implemented in Java arrays?
answer: >-
    Selection sort is a simple comparison-based sorting algorithm that works by repeatedly selecting the minimum element from the unsorted portion of the array and moving it to the beginning. Here’s how the selection sort algorithm is implemented in Java:\n\n### Selection Sort Algorithm Steps:\n1. **Initialize**: Start with the first element as the minimum.\n2. **Find Minimum**: Iterate through the unsorted portion of the array to find the smallest element.\n3. **Swap**: Swap the found minimum element with the first element of the unsorted portion.\n4. **Repeat**: Move the boundary of the sorted and unsorted portions one element forward and repeat the process until the entire array is sorted.\n\n### Java Implementation:\nHere is a sample Java program that demonstrates the selection sort algorithm:\n\n```java\nimport java.util.Arrays;\n\npublic class SelectionSort {\n    void selectionSort(int array[]) {\n        int size = array.length;\n\n        // Traverse through all array elements\n        for (int step = 0; step < size - 1; step++) {\n            // Assume the first element is the minimum\n            int min_idx = step;\n\n            // Check the rest of the array to find the minimum element\n            for (int i = step + 1; i < size; i++) {\n                if (array[i] < array[min_idx]) {\n                    min_idx = i; // Update min_idx if a smaller element is found\n                }\n            }\n\n            // Swap the found minimum element with the first element\n            int temp = array[min_idx];\n            array[min_idx] = array[step];\n            array[step] = temp;\n        }\n    }\n\n    public static void main(String[] args) {\n        SelectionSort sorter = new SelectionSort();\n        int[] crunchifyArray = {40, 10, 50, 70, 30};\n\n        sorter.selectionSort(crunchifyArray);\n        System.out.println("Sorted Array: " + Arrays.toString(crunchifyArray));\n    }\n}\n```\n\n### Explanation of the Code:\n- The `selectionSort` method takes an integer array as input.\n- The outer loop iterates through each element of the array, treating it as the current position to place the next minimum element.\n- The inner loop searches for the minimum element in the unsorted portion of the array.\n- Once the minimum element is found, it is swapped with the element at the current position.\n- The process continues until the entire array is sorted.\n\n### Complexity:\n- **Time Complexity**: O(n²) in the worst and average cases, where n is the number of elements in the array.\n- **Space Complexity**: O(1) since it requires a constant amount of additional space.\n\nThis implementation effectively demonstrates how selection sort can be applied to sort an array in Java.
subject: Computer Science
file_name: how-is-selection-sort-implemented-in-java-arrays.md
url: /learn/computer-science/questions/how-is-selection-sort-implemented-in-java-arrays
score: -1.0
related_article1:
    id: 89029
    title: >-
        What are the benefits of using arrays in Java?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-benefits-of-using-arrays-in-java
related_article2:
    id: 89052
    title: >-
        What exercises can help practice array manipulation in Java?
    subject: Computer Science
    url: /learn/computer-science/questions/what-exercises-can-help-practice-array-manipulation-in-java
related_article3:
    id: 89035
    title: >-
        What are the methods for accessing elements in a Java array?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-methods-for-accessing-elements-in-a-java-array
related_article4:
    id: 89044
    title: >-
        How do you return arrays from methods in Java?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-return-arrays-from-methods-in-java
---

&nbsp;