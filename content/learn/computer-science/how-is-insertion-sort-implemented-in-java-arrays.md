---
_schema: default
id: 89048
date: 2024-12-05
title: >-
    How is insertion sort implemented in Java arrays?
article_title: >-
    How is insertion sort implemented in Java arrays?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Detailed explanation and Java implementation of the insertion sort algorithm, including algorithm steps, pseudo-code, and performance analysis.
  page_keywords: >-
    insertion sort, Java, sorting algorithm, arrays, implementation, pseudo-code, algorithm explanation, performance, time complexity, small datasets
author: QuickTakes
question: >-
    How is insertion sort implemented in Java arrays?
answer: >-
    Insertion sort is a simple and intuitive sorting algorithm that builds a sorted array one element at a time. It is particularly effective for small or partially sorted arrays. Below is a detailed explanation of how insertion sort is implemented in Java, including the algorithm and a sample code implementation.\n\n### Algorithm of Insertion Sort\n\n1. Start with the second element of the array (index 1), as a single element (the first element) is trivially sorted.\n2. For each element, compare it with the elements in the sorted portion of the array (to its left).\n3. Shift all elements in the sorted portion that are greater than the current element to the right.\n4. Insert the current element into its correct position in the sorted portion.\n5. Repeat until the entire array is sorted.\n\n### Pseudo-code\n\nHere is a simple pseudo-code representation of the insertion sort algorithm:\n\n```\nfor i from 1 to length(arr) - 1:\n    key = arr[i]\n    j = i - 1\n    while j >= 0 and arr[j] > key:\n        arr[j + 1] = arr[j]\n        j = j - 1\n    arr[j + 1] = key\n```\n\n### Java Implementation\n\nHere is a Java program that implements the insertion sort algorithm:\n\n```java\npublic class InsertionSort {\n    public static void insertionSort(int[] arr) {\n        int n = arr.length;\n        for (int i = 1; i < n; i++) {\n            int key = arr[i];\n            int j = i - 1;\n\n            // Move elements of arr[0..i-1], that are greater than key,\n            // to one position ahead of their current position\n            while (j >= 0 && arr[j] > key) {\n                arr[j + 1] = arr[j];\n                j = j - 1;\n            }\n            arr[j + 1] = key;\n        }\n    }\n\n    public static void main(String[] args) {\n        int[] arr = {12, 11, 13, 5, 6};\n        insertionSort(arr);\n        System.out.println("Sorted array: ");\n        for (int num : arr) {\n            System.out.print(num + " ");\n        }\n    }\n}\n```\n\n### Explanation of the Code\n\n- The `insertionSort` method takes an integer array as input.\n- It iterates through the array starting from the second element.\n- For each element, it stores the value in `key` and compares it with the elements in the sorted portion of the array.\n- If the current element is smaller than the elements in the sorted portion, those elements are shifted to the right to make space for the `key`.\n- Finally, the `key` is placed in its correct position.\n\n### Performance\n\nInsertion sort has a time complexity of $O(n^2)$ in the average and worst cases, but it performs well for small datasets or nearly sorted arrays, where its time complexity can approach $O(n)$.\n\nThis implementation provides a clear understanding of how insertion sort works in Java and can be a useful addition to a Wikipedia page on sorting algorithms.
subject: Computer Science
file_name: how-is-insertion-sort-implemented-in-java-arrays.md
url: /learn/computer-science/questions/how-is-insertion-sort-implemented-in-java-arrays
score: -1.0
related_article1:
    id: 89047
    title: >-
        How is selection sort implemented in Java arrays?
    subject: Computer Science
    url: /learn/computer-science/questions/how-is-selection-sort-implemented-in-java-arrays
related_article2:
    id: 89038
    title: >-
        How do you swap elements in a Java array?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-swap-elements-in-a-java-array
related_article3:
    id: 89039
    title: >-
        What are the common operations performed on arrays in Java?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-common-operations-performed-on-arrays-in-java
related_article4:
    id: 89037
    title: >-
        What is the process for assigning new values to elements in a Java array?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-process-for-assigning-new-values-to-elements-in-a-java-array
related_article5:
    id: 89029
    title: >-
        What are the benefits of using arrays in Java?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-benefits-of-using-arrays-in-java
---

&nbsp;