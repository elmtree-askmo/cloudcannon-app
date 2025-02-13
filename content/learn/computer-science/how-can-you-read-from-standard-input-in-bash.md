---
_schema: default
id: 140920
date: 2024-12-22
title: >-
    How can you read from standard input in Bash?
article_title: >-
    How can you read from standard input in Bash?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    Learn how to read from standard input in Bash using the 'read' command, including its options and examples for user interaction and file reading.
  page_keywords: >-
    Bash, read command, standard input, stdin, user input, command syntax, read options, prompt, delimiter, input redirection, reading from files, interactive scripts, variable assignment
author: QuickTakes
question: >-
    How can you read from standard input in Bash?
answer: >-
    In Bash, reading from standard input (stdin) is primarily accomplished using the `read` command. This command allows you to accept user input interactively or read from a specified input source, such as a file. Here’s a detailed overview of how to use the `read` command and its functionalities:\n\n### Basic Syntax\nThe basic syntax of the `read` command is as follows:\n```bash\nread variable\n```\nThis command reads a line of input from stdin and assigns it to the specified variable.\n\n### Options for the `read` Command\nThe `read` command comes with several useful options:\n- `-p`: This option allows you to display a prompt before reading input.\n- `-d`: This option specifies a delimiter to split the input into multiple variables.\n\n### Examples of Using `read`\n1. **Basic Input**:\n   ```bash\n   read name\n   echo "Hello, $name!"\n   ```\n   In this example, the script prompts the user to enter their name and then greets them.\n\n2. **Using a Prompt**:\n   ```bash\n   read -p "Enter your age: " age\n   echo "You are $age years old."\n   ```\n   Here, the `-p` option is used to display a prompt before reading the input.\n\n3. **Reading Multiple Variables**:\n   ```bash\n   read first_name last_name\n   echo "Your full name is $first_name $last_name."\n   ```\n   This command reads two words from the input and assigns them to two different variables.\n\n4. **Using a Delimiter**:\n   ```bash\n   read -d ',' fruits\n   echo "Fruits: $fruits"\n   ```\n   In this example, the `-d` option allows the user to input a list of fruits separated by commas.\n\n### Reading from Files\nYou can also use the `read` command to read input from files. For example:\n```bash\nwhile IFS= read -r line; do\n    echo "$line"\ndone < filename.txt\n```\nThis script reads each line from `filename.txt` and prints it to the standard output.\n\n### Input Redirection\nBash also allows you to redirect input from a file using the `<` operator. For example:\n```bash\nread variable < input.txt\n```\nThis command reads the first line of `input.txt` and assigns it to `variable`.\n\n### Conclusion\nThe `read` command is a powerful built-in utility in Bash that facilitates user interaction and input handling in scripts. By mastering its syntax and options, you can create more dynamic and interactive Bash scripts.
subject: Computer Science
file_name: how-can-you-read-from-standard-input-in-bash.md
url: /learn/computer-science/questions/how-can-you-read-from-standard-input-in-bash
score: -1.0
related_article1:
    id: 140905
    title: >-
        How do you navigate between absolute and relative directories in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-navigate-between-absolute-and-relative-directories-in-bash
related_article2:
    id: 140898
    title: >-
        What is the significance of quoting in strings in Bash scripts?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-significance-of-quoting-in-strings-in-bash-scripts
related_article3:
    id: 140905
    title: >-
        How do you navigate between absolute and relative directories in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-navigate-between-absolute-and-relative-directories-in-bash
related_article4:
    id: 140925
    title: >-
        How can you create, remove, and list aliases in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-you-create-remove-and-list-aliases-in-bash
related_article5:
    id: 140899
    title: >-
        How can user input be incorporated into a 'Hello World' script in Bash?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-user-input-be-incorporated-into-a-hello-world-script-in-bash
---

&nbsp;