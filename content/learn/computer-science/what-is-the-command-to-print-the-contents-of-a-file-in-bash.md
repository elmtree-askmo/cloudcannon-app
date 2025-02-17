---
_schema: default
id: 140917
date: 2024-12-22
title: >-
    What is the command to print the contents of a file in Bash?
article_title: >-
    What is the command to print the contents of a file in Bash?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content explains how to print the contents of a file in Bash using the 'cat' command and provides examples of various options and alternative commands.
  page_keywords: >-
    bash, print contents, file, command, cat, display, concatenate, options, line numbers, tac, echo, more, less, command substitution
author: QuickTakes
question: >-
    What is the command to print the contents of a file in Bash?
answer: >-
    To print the contents of a file in Bash, the most commonly used command is `cat`. The `cat` command is short for "concatenate" and is primarily used to read and display the contents of files. The basic syntax for using the `cat` command is as follows:\n\n```bash\ncat [OPTION] [FILE1] …\n```\n\nFor example, to display the contents of a file named `example.txt`, you would use the command:\n\n```bash\ncat example.txt\n```\n\nIn addition to simply displaying file contents, `cat` can also be used with various options. Here are a few useful examples:\n\n1. To display the contents of a file with line numbers, you can use the `-n` option:\n\n   ```bash\n   cat -n example.txt\n   ```\n\n2. If you want to display the contents of a file in reverse order, you can use the `tac` command:\n\n   ```bash\n   tac example.txt\n   ```\n\n3. To print the contents of a file using the `echo` command, you can use command substitution:\n\n   ```bash\n   echo "$(<example.txt)"\n   ```\n\n4. For larger files, you might prefer to use the `more` or `less` commands, which allow you to view the file contents one page at a time:\n\n   ```bash\n   more example.txt\n   ```\n\n   or\n\n   ```bash\n   less example.txt\n   ```\n\nThese commands provide flexibility depending on your needs for viewing file contents in a Bash environment.
subject: Computer Science
file_name: what-is-the-command-to-print-the-contents-of-a-file-in-bash.md
url: /learn/computer-science/questions/what-is-the-command-to-print-the-contents-of-a-file-in-bash
score: -1.0
related_article1:
    id: 140900
    title: >-
        What are Bash built-ins and how can you view information about them?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-bash-builtins-and-how-can-you-view-information-about-them
related_article2:
    id: 140897
    title: >-
        How can variables be used in a 'Hello World' script in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-variables-be-used-in-a-hello-world-script-in-bash
related_article3:
    id: 140925
    title: >-
        How can you create, remove, and list aliases in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-create-remove-and-list-aliases-in-bash
related_article4:
    id: 140903
    title: >-
        What is a shebang and why is it important in Bash scripts?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-a-shebang-and-why-is-it-important-in-bash-scripts
related_article5:
    id: 140905
    title: >-
        How do you navigate between absolute and relative directories in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-navigate-between-absolute-and-relative-directories-in-bash
---

&nbsp;