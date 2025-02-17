---
_schema: default
id: 119671
date: 2024-12-11
title: >-
    Can you provide a simple example using the pack() method?
article_title: >-
    Can you provide a simple example using the pack() method?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    This example demonstrates how to use the pack() method in Tkinter to create a simple GUI application with three labels of different background colors.
  page_keywords: >-
    Tkinter, pack method, GUI, labels, background color, Python, event loop, widget layout, padding, simple example
author: QuickTakes
question: >-
    Can you provide a simple example using the pack() method?
answer: >-
    Certainly! Here’s a simple example of using the `pack()` method in Tkinter to create a basic GUI application with three labels, each having a different background color:\n\n```python\nimport tkinter as tk\n\n# Create the main window\nroot = tk.Tk()\nroot.title("Pack Example")\n\n# Create three labels with different background colors\nlabel1 = tk.Label(root, text="Label 1", bg="red", fg="white")\nlabel2 = tk.Label(root, text="Label 2", bg="green", fg="white")\nlabel3 = tk.Label(root, text="Label 3", bg="blue", fg="white")\n\n# Pack the labels into the window\nlabel1.pack(pady=10)  # Add some vertical padding\nlabel2.pack(pady=10)\nlabel3.pack(pady=10)\n\n# Start the Tkinter event loop\nroot.mainloop()\n```\n\n### Explanation:\n- **Creating the Main Window**: The `Tk()` function initializes the main window.\n- **Creating Labels**: Three labels are created with different background colors and text.\n- **Packing the Labels**: The `pack()` method is used to add the labels to the window. The `pady` option adds vertical padding between the labels for better spacing.\n- **Event Loop**: `mainloop()` keeps the window open and responsive to user interactions.\n\nThis example demonstrates how the `pack()` method organizes widgets in blocks before placing them in the parent widget, making it a straightforward choice for simple layouts.
subject: Computer Science
file_name: can-you-provide-a-simple-example-using-the-pack-method.md
url: /learn/computer-science/questions/can-you-provide-a-simple-example-using-the-pack-method
score: -1.0
related_article1:
    id: 119661
    title: >-
        What is a combo box and how is it used in Tkinter?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-a-combo-box-and-how-is-it-used-in-tkinter
related_article2:
    id: 119658
    title: >-
        How do you create a label widget in Tkinter?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-you-create-a-label-widget-in-tkinter
related_article3:
    id: 119673
    title: >-
        What are the steps to create a login UI using Tkinter?
    subject: Computer Science
    url: /learn/computer-science/questions/what-are-the-steps-to-create-a-login-ui-using-tkinter
---

&nbsp;