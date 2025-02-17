---
_schema: default
id: 140911
date: 2024-12-22
title: >-
    What command can be used to list the ten most recently modified files?
article_title: >-
    What command can be used to list the ten most recently modified files?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Instructions on how to list the ten most recently modified files in a directory using Bash commands, including examples using ls and find.
  page_keywords: >-
    Bash, ls command, list files, modified files, head command, sorting, find command, Linux, command line, file management
author: QuickTakes
question: >-
    What command can be used to list the ten most recently modified files?
answer: >-
    To list the ten most recently modified files in a directory using Bash, you can use the `ls` command combined with `head`. The command you would use is:\n\n```bash\nls -lt | head -n 10\n```\n\nHere's a breakdown of the command:\n\n- `ls -lt`: This lists the files in the current directory in long format (`-l`) and sorts them by modification time (`-t`), with the most recently modified files appearing first.\n- `head -n 10`: This takes the output of the `ls` command and limits it to the first 10 lines, effectively giving you the ten most recently modified files.\n\nThis command is useful for quickly identifying which files have been changed most recently in a directory. If you want to include files in subdirectories as well, you might consider using the `find` command in combination with `sort` and `head`:\n\n```bash\nfind . -type f -printf '%T+ %p\n' | sort -r | head -n 10\n```\n\nIn this command:\n- `find . -type f`: This finds all files (`-type f`) starting from the current directory (`.`).\n- `-printf '%T+ %p\n'`: This prints the modification time and the file path.\n- `sort -r`: This sorts the output in reverse order (newest first).\n- `head -n 10`: This limits the output to the ten most recent files.\n\nThese commands are effective for managing and tracking file modifications in a Linux environment.
subject: Computer Science
file_name: what-command-can-be-used-to-list-the-ten-most-recently-modified-files.md
url: /learn/computer-science/questions/what-command-can-be-used-to-list-the-ten-most-recently-modified-files
score: -1.0
related_article1:
    id: 140917
    title: >-
        What is the command to print the contents of a file in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-command-to-print-the-contents-of-a-file-in-bash
related_article2:
    id: 140896
    title: >-
        What is the basic syntax for writing a 'Hello World' script in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-basic-syntax-for-writing-a-hello-world-script-in-bash
related_article3:
    id: 140910
    title: >-
        How can you list files in a long listing format?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-list-files-in-a-long-listing-format
related_article4:
    id: 140912
    title: >-
        How can you list all files including dotfiles in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-list-all-files-including-dotfiles-in-bash
related_article5:
    id: 140921
    title: >-
        How can you display line numbers with output in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-display-line-numbers-with-output-in-bash
---

&nbsp;