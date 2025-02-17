---
_schema: default
id: 140912
date: 2024-12-22
title: >-
    How can you list all files including dotfiles in Bash?
article_title: >-
    How can you list all files including dotfiles in Bash?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Learn how to list all files including dotfiles in Bash using the ls command with the -a option, and filter to show only hidden files.
  page_keywords: >-
    Bash, list files, dotfiles, hidden files, ls command, Linux, command line
author: QuickTakes
question: >-
    How can you list all files including dotfiles in Bash?
answer: >-
    To list all files, including dotfiles (hidden files), in Bash, you can use the `ls` command with the `-a` option. Dotfiles are files whose names begin with a dot (.), and they are typically hidden from the default output of the `ls` command.\n\nHere’s how you can do it:\n\n```bash\nls -a\n```\n\nThis command will display all files in the current directory, including hidden files. For example, the output might look like this:\n\n```\n.  ..  .bash_history  .bash_profile  .bashrc  .viminfo  gimp.txt\n```\n\nIn this output, `.` refers to the current directory, and `..` refers to the parent directory, while the other entries are the dotfiles and regular files present in the directory.\n\nIf you want to list only the hidden files (dotfiles), you can use the following command:\n\n```bash\nls -ap | grep "^\."\n```\n\nThis command lists all files and directories, appending a `/` to directories, and then filters the output to show only those files whose names start with a dot.\n\nIn summary, the `-a` option with `ls` is essential for including dotfiles in your file listings in Bash.
subject: Computer Science
file_name: how-can-you-list-all-files-including-dotfiles-in-bash.md
url: /learn/computer-science/questions/how-can-you-list-all-files-including-dotfiles-in-bash
score: -1.0
related_article1:
    id: 140925
    title: >-
        How can you create, remove, and list aliases in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-create-remove-and-list-aliases-in-bash
related_article2:
    id: 140902
    title: >-
        What are named arguments in Bash and how are they handled?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-named-arguments-in-bash-and-how-are-they-handled
related_article3:
    id: 140920
    title: >-
        How can you read from standard input in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-read-from-standard-input-in-bash
related_article4:
    id: 140896
    title: >-
        What is the basic syntax for writing a 'Hello World' script in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-basic-syntax-for-writing-a-hello-world-script-in-bash
related_article5:
    id: 140910
    title: >-
        How can you list files in a long listing format?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-list-files-in-a-long-listing-format
---

&nbsp;