---
_schema: default
id: 140910
date: 2024-12-22
title: >-
    How can you list files in a long listing format?
article_title: >-
    How can you list files in a long listing format?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Instructions on how to use the 'ls' command in Bash to list files in a long listing format, including options for hidden files, human-readable sizes, and sorting.
  page_keywords: >-
    Bash, ls command, long listing format, file permissions, hidden files, human-readable sizes, sorting files, Linux commands, file listing options, command line
author: QuickTakes
question: >-
    How can you list files in a long listing format?
answer: >-
    To list files in a long listing format using the Bash shell, you can use the `ls` command with the `-l` option. This command provides detailed information about each file and directory, including file permissions, number of links, owner, group, size, and the last modification date.\n\nHere’s how to use the command:\n\n1. **Basic Long Listing**: To list the contents of the current directory in long format, simply type:\n   ```bash\n   ls -l\n   ```\n\n2. **Listing a Specific Directory**: If you want to list the contents of a specific directory, you can specify the path:\n   ```bash\n   ls -l /path/to/directory\n   ```\n\n3. **Including Hidden Files**: To include hidden files (those starting with a dot), you can use the `-a` option along with `-l`:\n   ```bash\n   ls -la\n   ```\n\n4. **Human-Readable Sizes**: If you want the file sizes to be displayed in a more human-readable format (e.g., KB, MB), you can add the `-h` option:\n   ```bash\n   ls -lh\n   ```\n\n5. **Sorting by Size**: To list files sorted by size in descending order, you can combine the `-l` and `-S` options:\n   ```bash\n   ls -lS\n   ```\n\nThe output of the `ls -l` command will look something like this:\n```\ntotal 1204\ndrwxr-xr-x 3 root root 4096 Apr 21 03:44 acpi\n-rw-r--r-- 1 root root 3028 Apr 21 03:38 adduser.conf\ndrwxr-xr-x 2 root root 4096 Jun 11 20:42 alternatives\n```\n\nIn this output:\n- The first column shows file permissions.\n- The second column indicates the number of links.\n- The third and fourth columns show the owner and group.\n- The fifth column displays the file size.\n- The sixth column shows the last modification date and time.\n- The last column lists the file or directory name.\n\nFor more options and details about the `ls` command, you can refer to the manual by typing:\n```bash\nman ls\n```\n\nThis will provide you with comprehensive information on how to customize the output further.
subject: Computer Science
file_name: how-can-you-list-files-in-a-long-listing-format.md
url: /learn/computer-science/questions/how-can-you-list-files-in-a-long-listing-format
score: -1.0
related_article1:
    id: 140900
    title: >-
        What are Bash built-ins and how can you view information about them?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-bash-builtins-and-how-can-you-view-information-about-them
related_article2:
    id: 140904
    title: >-
        What is the difference between an env shebang and a direct shebang?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-difference-between-an-env-shebang-and-a-direct-shebang
related_article3:
    id: 140907
    title: >-
        How can you change to the home directory using Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-change-to-the-home-directory-using-bash
related_article4:
    id: 140898
    title: >-
        What is the significance of quoting in strings in Bash scripts?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-significance-of-quoting-in-strings-in-bash-scripts
related_article5:
    id: 140922
    title: >-
        What is the process to concatenate gzipped files in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-process-to-concatenate-gzipped-files-in-bash
---

&nbsp;