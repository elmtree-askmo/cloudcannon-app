---
_schema: default
id: 140921
date: 2024-12-22
title: >-
    How can you display line numbers with output in Bash?
article_title: >-
    How can you display line numbers with output in Bash?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This content explains various methods to display line numbers with output in Bash using commands like cat, nl, less, sed, and awk.
  page_keywords: >-
    Bash,line numbers,cat,nl,less,sed,awk,file output,command line,numbering lines
author: QuickTakes
question: >-
    How can you display line numbers with output in Bash?
answer: >-
    To display line numbers with output in Bash, you can use several commands, each with its own options. Here are some common methods:\n\n1. **Using `cat` Command**:\n   The `cat` command can display line numbers by using the `-n` or `--number` option. This will print line numbers before each line of the file. For example:\n   ```bash\n   cat -n filename.txt\n   ```\n   If you want to skip empty lines while numbering, you can use the `-b` option:\n   ```bash\n   cat -b filename.txt\n   ```\n\n2. **Using `nl` Command**:\n   The `nl` command is specifically designed to number lines in files. You can simply run:\n   ```bash\n   nl filename.txt\n   ```\n   This will display the contents of the file with line numbers.\n\n3. **Using `less` Command**:\n   When viewing files with the `less` command, you can enable line numbers by using the `-N` or `--LINE-NUMBERS` option:\n   ```bash\n   less -N filename.txt\n   ```\n   You can toggle line numbers on and off while in `less` by pressing `-N` again.\n\n4. **Using `sed` Command**:\n   You can also use `sed` to add line numbers to the output. For example:\n   ```bash\n   sed = filename.txt | sed 'N;s/\n/ /'\n   ```\n   This command will print each line preceded by its line number.\n\n5. **Using `awk` Command**:\n   Another way to display line numbers is by using `awk`:\n   ```bash\n   awk '{print NR, $0}' filename.txt\n   ```\n   Here, `NR` is a built-in variable in `awk` that represents the current line number.\n\nThese methods provide flexibility depending on your specific needs for displaying line numbers in Bash.
subject: Computer Science
file_name: how-can-you-display-line-numbers-with-output-in-bash.md
url: /learn/computer-science/questions/how-can-you-display-line-numbers-with-output-in-bash
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
    id: 140913
    title: >-
        Is it possible to list files without using the 'ls' command?
    subject: Computer Science
    url: /learn/computer-science/questions/is-it-possible-to-list-files-without-using-the-ls-command
related_article4:
    id: 140913
    title: >-
        Is it possible to list files without using the 'ls' command?
    subject: Computer Science
    url: /learn/computer-science/questions/is-it-possible-to-list-files-without-using-the-ls-command
related_article5:
    id: 140915
    title: >-
        What command allows you to list files sorted by size?
    subject: Computer Science
    url: /learn/computer-science/questions/what-command-allows-you-to-list-files-sorted-by-size
---

&nbsp;