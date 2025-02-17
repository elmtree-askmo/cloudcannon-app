---
_schema: default
id: 140908
date: 2024-12-22
title: >-
    How can you change to the directory of the script being executed?
article_title: >-
    How can you change to the directory of the script being executed?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Learn how to change to the directory of the currently executing Bash script, using commands like readlink and dirname to ensure your script correctly operates on files relative to its location.
  page_keywords: >-
    Bash script, change directory, script location, dirname, readlink, $0 variable, absolute path, shell scripting, working directory, file operations
author: QuickTakes
question: >-
    How can you change to the directory of the script being executed?
answer: >-
    To change to the directory of the script being executed in a Bash script, you can use the following command:\n\n```bash\ncd "$(dirname "$(readlink -f "$0")")"\n```\n\nHere's a breakdown of how this command works:\n\n1. **`$0`**: This variable holds the name of the script being executed.\n2. **`readlink -f "$0"`**: This command resolves the full path of the script, even if it is a symbolic link. It returns the absolute path to the script.\n3. **`dirname`**: This command extracts the directory path from the full script path returned by `readlink`.\n\nBy combining these commands, you effectively change the current working directory to the directory where the script is located. This is particularly useful when your script needs to operate on files relative to its own location.\n\nHere is a complete example of a Bash script that changes to its own directory and then lists the files in that directory:\n\n```bash\n#!/bin/bash\n\n# Change to the directory of the script\ncd "$(dirname "$(readlink -f "$0")")"\n\n# List files in the current directory\nls -l\n```\n\nWhen you run this script, it will first change to the directory where the script is located and then list the files in that directory. This technique is essential for ensuring that your script can reliably access files relative to its own location, regardless of the current working directory from which it was invoked.
subject: Computer Science
file_name: how-can-you-change-to-the-directory-of-the-script-being-executed.md
url: /learn/computer-science/questions/how-can-you-change-to-the-directory-of-the-script-being-executed
score: -1.0
related_article1:
    id: 140897
    title: >-
        How can variables be used in a 'Hello World' script in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-variables-be-used-in-a-hello-world-script-in-bash
related_article2:
    id: 140912
    title: >-
        How can you list all files including dotfiles in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-list-all-files-including-dotfiles-in-bash
related_article3:
    id: 140923
    title: >-
        How can you search for a pattern in a file using Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-search-for-a-pattern-in-a-file-using-bash
related_article4:
    id: 140912
    title: >-
        How can you list all files including dotfiles in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-list-all-files-including-dotfiles-in-bash
related_article5:
    id: 140897
    title: >-
        How can variables be used in a 'Hello World' script in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-variables-be-used-in-a-hello-world-script-in-bash
---

&nbsp;