---
_schema: default
id: 140891
date: 2024-12-22
title: >-
    How do you install and set up MySQL on Debian?
article_title: >-
    How do you install and set up MySQL on Debian?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This guide provides step-by-step instructions on how to install and set up MySQL on Debian 12, including adding the repository, installing packages, and configuring security.
  page_keywords: >-
    MySQL, Debian 12, installation, setup, APT repository, MySQL server, MySQL client, secure installation, MySQL shell, configuration
author: QuickTakes
question: >-
    How do you install and set up MySQL on Debian?
answer: >-
    To install and set up MySQL on Debian, follow these step-by-step instructions. This guide assumes you are using Debian 12 and have a non-root user with sudo privileges, as well as SSH access to your server.\n\n### Step 1: Add the MySQL APT Repository\nSince Debian 12 ships with MariaDB as the default SQL server, you need to add the MySQL APT repository to install MySQL. You can download the MySQL APT configuration package from the MySQL website. Use the following command to install it:\n\n```bash\nsudo apt install ./mysql-apt-config_0.8.25-1_all.deb\n```\n\n### Step 2: Update Package Lists\nAfter adding the MySQL repository, update your package lists to ensure your system recognizes the new repository:\n\n```bash\nsudo apt update\n```\n\n### Step 3: Install MySQL Server and Client\nNow, you can install the MySQL server and client packages. Run the following command:\n\n```bash\nsudo apt install mysql-server mysql-client\n```\n\nDuring the installation, you will be prompted to set a root password for MySQL. Choose a strong password and remember it for future use.\n\n### Step 4: Configure MySQL\nAfter installation, you may need to reconfigure the MySQL APT configuration if necessary:\n\n```bash\nsudo dpkg-reconfigure mysql-apt-config\n```\n\nMake sure to select "Use Strong Password Encryption" when prompted.\n\n### Step 5: Start and Enable MySQL Service\nOnce MySQL is installed, you need to start the MySQL service and enable it to start automatically on boot:\n\n```bash\nsudo systemctl start mysql\nsudo systemctl enable mysql\n```\n\n### Step 6: Secure MySQL Installation\nIt is recommended to run the security script that comes with MySQL to improve security:\n\n```bash\nsudo mysql_secure_installation\n```\n\nThis script will guide you through several security-related options, including removing anonymous users, disallowing root login remotely, and removing the test database.\n\n### Conclusion\nYou now have MySQL installed and configured on your Debian system. You can access the MySQL shell by running:\n\n```bash\nmysql -u root -p\n```\n\nEnter the root password you set during installation to log in. From here, you can start creating databases and managing your MySQL server.
subject: Computer Science
file_name: how-do-you-install-and-set-up-mysql-on-debian.md
url: /learn/computer-science/questions/how-do-you-install-and-set-up-mysql-on-debian
score: -1.0
related_article1:
    id: 140869
    title: >-
        What are the main features of Linux Mint?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-main-features-of-linux-mint
related_article2:
    id: 140867
    title: >-
        How did Linux distributions evolve over time?
    subject: Computer Science
    url: /learn/computer-science/questions/how-did-linux-distributions-evolve-over-time
related_article3:
    id: 140875
    title: >-
        What are the benefits of using Arch Linux?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-benefits-of-using-arch-linux
related_article4:
    id: 140889
    title: >-
        What are the steps to log in via SSH on Debian?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-steps-to-log-in-via-ssh-on-debian
related_article5:
    id: 140883
    title: >-
        What is Debian and what are its main features?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-debian-and-what-are-its-main-features
---

&nbsp;