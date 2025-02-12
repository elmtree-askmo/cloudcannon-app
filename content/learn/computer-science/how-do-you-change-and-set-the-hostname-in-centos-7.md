---
_schema: default
id: 140893
date: 2024-12-22
title: >-
    How do you change and set the hostname in CentOS 7?
article_title: >-
    How do you change and set the hostname in CentOS 7?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This guide explains how to change and set the hostname in CentOS 7 using terminal commands and the hostnamectl utility, along with instructions for updating the /etc/hosts file.
  page_keywords: >-
    CentOS 7, hostname, change hostname, set hostname, hostnamectl, /etc/hosts, terminal commands, reboot, nmtui, static hostname, pretty hostname, transient hostname
author: QuickTakes
question: >-
    How do you change and set the hostname in CentOS 7?
answer: >-
    To change and set the hostname in CentOS 7, you can follow these steps:\n\n### Step 1: Check the Current Hostname\nOpen a terminal and run the following command to check the current hostname:\n```bash\nhostname\n```\n\n### Step 2: Set a New Hostname\nYou can set a new hostname using the `hostnamectl` command. For example, to set the hostname to `server-01`, use:\n```bash\nsudo hostnamectl set-hostname server-01\n```\nYou can also set a "pretty" hostname (a more human-readable name) using:\n```bash\nsudo hostnamectl set-hostname "My Pretty Hostname" --pretty\n```\n\n### Step 3: Verify the Change\nTo verify that the hostname has been changed, run:\n```bash\nhostname\n```\n\n### Step 4: Update the /etc/hosts File\nIt is important to update the `/etc/hosts` file to reflect the new hostname. Open the file with a text editor, such as `nano`:\n```bash\nsudo nano /etc/hosts\n```\nAdd or modify the line that corresponds to your new hostname. For example:\n```\n127.0.0.1   server-01\n```\n\n### Step 5: Reboot or Re-login\nTo ensure that the changes take effect, you may need to reboot your system or log out and back in. You can reboot using:\n```bash\nsudo systemctl reboot\n```\n\n### Additional Notes\n- You can also change the hostname using the `nmtui` command, which provides a text user interface for users who prefer a graphical approach.\n- Remember that the hostname can be set to three types: Static, Pretty, and Transient, depending on your needs.\n\nBy following these steps, you can successfully change and set the hostname on a CentOS 7 system.
subject: Computer Science
file_name: how-do-you-change-and-set-the-hostname-in-centos-7.md
url: /learn/computer-science/questions/how-do-you-change-and-set-the-hostname-in-centos-7
score: -1.0
related_article1:
    id: 140867
    title: >-
        How did Linux distributions evolve over time?
    subject: Computer Science
    url: /learn/computer-science/questions/how-did-linux-distributions-evolve-over-time
related_article2:
    id: 140867
    title: >-
        How did Linux distributions evolve over time?
    subject: Computer Science
    url: /learn/computer-science/questions/how-did-linux-distributions-evolve-over-time
related_article3:
    id: 140887
    title: >-
        What are the steps to set up a network on Debian?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-steps-to-set-up-a-network-on-debian
related_article4:
    id: 140889
    title: >-
        What are the steps to log in via SSH on Debian?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-steps-to-log-in-via-ssh-on-debian
related_article5:
    id: 140887
    title: >-
        What are the steps to set up a network on Debian?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-steps-to-set-up-a-network-on-debian
---

&nbsp;