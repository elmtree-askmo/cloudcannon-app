---
_schema: default
id: 119396
date: 2024-12-11
title: >-
    Can you provide a simple example using the pack() method in Tkinter?
article_title: >-
    Can you provide a simple example using the pack() method in Tkinter?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    A simple example demonstrating the use of the pack() method in Tkinter to create a vertical arrangement of buttons in a GUI.
  page_keywords: >-
    Tkinter, pack(), GUI, buttons, layout, fill, mainloop
author: QuickTakes
question: >-
    Can you provide a simple example using the pack() method in Tkinter?
answer: >-
    Certainly! The `pack()` method in Tkinter is a geometry manager that organizes widgets in blocks before placing them in the parent widget. It is particularly useful for simple layouts where you want to stack widgets vertically or horizontally.\n\nHere’s a simple example demonstrating how to use the `pack()` method to create a basic GUI with buttons arranged vertically:\n\n```python\nimport tkinter as tk\n\n# Create the main window\nroot = tk.Tk()\nroot.title("Pack Example")\n\n# Create buttons\nbutton1 = tk.Button(root, text="Button 1")\nbutton2 = tk.Button(root, text="Button 2")\nbutton3 = tk.Button(root, text="Button 3")\n\n# Pack buttons into the window\nbutton1.pack(side=tk.TOP, fill=tk.X)  # Fill horizontally\nbutton2.pack(side=tk.TOP, fill=tk.X)  # Fill horizontally\nbutton3.pack(side=tk.TOP, fill=tk.X)  # Fill horizontally\n\n# Start the main event loop\nroot.mainloop()\n```\n\n### Explanation:\n- **Importing Tkinter**: We start by importing the Tkinter module.\n- **Creating the main window**: We create a main window using `tk.Tk()`.\n- **Creating buttons**: We create three buttons with different text labels.\n- **Packing the buttons**: We use the `pack()` method to arrange the buttons vertically. The `side=tk.TOP` argument places each button at the top of the window, and `fill=tk.X` makes each button expand to fill the entire width of the window.\n- **Starting the event loop**: Finally, we call `root.mainloop()` to run the application.\n\nThis example illustrates how the `pack()` method can be used to create a simple vertical layout of buttons in a Tkinter application. You can modify the `side` and `fill` options to achieve different layouts as needed.
subject: Computer Science
file_name: can-you-provide-a-simple-example-using-the-pack-method-in-tkinter.md
url: /learn/computer-science/questions/can-you-provide-a-simple-example-using-the-pack-method-in-tkinter
score: -1.0
related_article1:
    id: 119395
    title: >-
        What customization options are available with the pack layout manager in Tkinter?
    subject: Computer Science
    url: /learn/computer-science/questions/what-customization-options-are-available-with-the-pack-layout-manager-in-tkinter
related_article2:
    id: 119390
    title: >-
        How does the Tkinter library in Python facilitate GUI development?
    subject: Computer Science
    url: /learn/computer-science/questions/how-does-the-tkinter-library-in-python-facilitate-gui-development
related_article3:
    id: 119400
    title: >-
        Can you provide an example of a simple survey UI using the grid layout manager in Tkinter?
    subject: Computer Science
    url: /learn/computer-science/questions/can-you-provide-an-example-of-a-simple-survey-ui-using-the-grid-layout-manager-in-tkinter
related_article4:
    id: 119402
    title: >-
        What are the steps to create a login interface using Tkinter?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-steps-to-create-a-login-interface-using-tkinter
---

&nbsp;