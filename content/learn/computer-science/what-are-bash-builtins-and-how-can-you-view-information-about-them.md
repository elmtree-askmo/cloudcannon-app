---
_schema: default
id: 140900
date: 2024-12-22
title: >-
    What are Bash built-ins and how can you view information about them?
article_title: >-
    What are Bash built-ins and how can you view information about them?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    An overview of Bash built-ins, their functionality, how to view them using various commands like compgen, help, and man, and examples of common built-in commands.
  page_keywords: >-
    Bash, built-ins, commands, Shell, compgen, help, man, command, environment, scripting, text display, navigation, job management, variables, shell commands, programming
author: QuickTakes
question: >-
    What are Bash built-ins and how can you view information about them?
answer: >-
    Bash built-ins are commands that are executed directly by the Bash shell without the need to invoke an external program. These commands are integral to the functionality of the shell and allow users to perform various tasks such as navigating directories, managing jobs, and manipulating variables.\n\n### Viewing Bash Built-ins\n\nTo view a list of all built-in commands in Bash, you can use the following commands:\n\n1. **Using `compgen`**:\n   ```bash\n   compgen -b\n   ```\n   This command will display a list of all built-in commands. You can also pipe it to `more` for easier reading:\n   ```bash\n   compgen -b | more\n   ```\n\n2. **Using `help`**:\n   For detailed information about a specific built-in command, you can use:\n   ```bash\n   help <command>\n   ```\n   For example, to get help on the `read` command:\n   ```bash\n   help read\n   ```\n\n3. **Using `man`**:\n   You can also access the manual page for Bash, which includes information about built-ins:\n   ```bash\n   man bash\n   ```\n   Scroll down to the section titled "SHELL BUILTIN COMMANDS" to find detailed descriptions of each built-in command.\n\n4. **Using `command -v`**:\n   To check if a specific command is a built-in, you can use:\n   ```bash\n   command -v <command>\n   ```\n   For example, to check if `cd` is a built-in:\n   ```bash\n   command -v cd\n   ```\n\n5. **Using `builtin`**:\n   The `builtin` command can be used to execute a built-in command, bypassing any function or alias of the same name:\n   ```bash\n   builtin <command>\n   ```\n\n### Examples of Common Bash Built-ins\n\nSome common Bash built-in commands include:\n- `cd`: Change the current directory.\n- `echo`: Display a line of text.\n- `exit`: Exit the shell.\n- `export`: Set environment variables.\n- `alias`: Create an alias for a command.\n\nBash built-ins are essential for effective shell scripting and command-line operations, providing a powerful set of tools for users to manage their environment and automate tasks.
subject: Computer Science
file_name: what-are-bash-builtins-and-how-can-you-view-information-about-them.md
url: /learn/computer-science/questions/what-are-bash-builtins-and-how-can-you-view-information-about-them
score: -1.0
related_article1:
    id: 140897
    title: >-
        How can variables be used in a 'Hello World' script in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-variables-be-used-in-a-hello-world-script-in-bash
related_article2:
    id: 140899
    title: >-
        How can user input be incorporated into a 'Hello World' script in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-user-input-be-incorporated-into-a-hello-world-script-in-bash
related_article3:
    id: 140912
    title: >-
        How can you list all files including dotfiles in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-list-all-files-including-dotfiles-in-bash
related_article4:
    id: 140905
    title: >-
        How do you navigate between absolute and relative directories in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-navigate-between-absolute-and-relative-directories-in-bash
related_article5:
    id: 140908
    title: >-
        How can you change to the directory of the script being executed?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-change-to-the-directory-of-the-script-being-executed
---

&nbsp;