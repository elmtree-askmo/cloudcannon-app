---
_schema: default
id: 140915
date: 2024-12-22
title: >-
    What command allows you to list files sorted by size?
article_title: >-
    What command allows you to list files sorted by size?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Learn how to use the 'ls' command in Linux to list files sorted by size, including options for long listing format, human-readable sizes, and including hidden files.
  page_keywords: >-
    ls command, sort files by size, Linux, long listing format, human-readable, largest files first, hidden files, disk space management, file listing commands
author: QuickTakes
question: >-
    What command allows you to list files sorted by size?
answer: >-
    To list files sorted by size in a Linux environment, you can use the `ls` command with specific options. The most common command for this purpose is:\n\n```bash\nls -lhS\n```\n\nHere's a breakdown of the options used:\n\n- `-l`: This option enables long listing format, which provides detailed information about each file, including permissions, number of links, owner, group, size, and timestamp.\n- `-h`: This option makes the file sizes human-readable, displaying them in a format like 1K, 234M, or 2G.\n- `-S`: This option sorts the files by size, with the largest files listed first.\n\nIf you want to sort the files in reverse order (smallest to largest), you can use:\n\n```bash\nls -lhSr\n```\n\nAdditionally, if you want to include hidden files in the listing, you can use:\n\n```bash\nls -laS\n```\n\nThis command will list all files, including hidden ones (those starting with a dot), sorted by size.\n\nThese commands are useful for managing disk space and identifying large files in a directory.
subject: Computer Science
file_name: what-command-allows-you-to-list-files-sorted-by-size.md
url: /learn/computer-science/questions/what-command-allows-you-to-list-files-sorted-by-size
score: -1.0
related_article1:
    id: 140913
    title: >-
        Is it possible to list files without using the 'ls' command?
    subject: Computer Science
    url: /learn/computer-science/questions/is-it-possible-to-list-files-without-using-the-ls-command
related_article2:
    id: 140925
    title: >-
        How can you create, remove, and list aliases in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-create-remove-and-list-aliases-in-bash
related_article3:
    id: 140897
    title: >-
        How can variables be used in a 'Hello World' script in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-variables-be-used-in-a-hello-world-script-in-bash
related_article4:
    id: 140913
    title: >-
        Is it possible to list files without using the 'ls' command?
    subject: Computer Science
    url: /learn/computer-science/questions/is-it-possible-to-list-files-without-using-the-ls-command
related_article5:
    id: 140899
    title: >-
        How can user input be incorporated into a 'Hello World' script in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-user-input-be-incorporated-into-a-hello-world-script-in-bash
---

&nbsp;