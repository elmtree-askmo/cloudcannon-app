---
_schema: default
id: 119400
date: 2024-12-11
title: >-
    Can you provide an example of a simple survey UI using the grid layout manager in Tkinter?
article_title: >-
    Can you provide an example of a simple survey UI using the grid layout manager in Tkinter?
date_format: MMM DD, YYYY
post_on_text: Posted on
seo:
  title: QuickTakes | Computer Science
  page_description: >-
    An example of a simple survey user interface using Tkinter's grid layout manager. The UI collects user name and favorite color, demonstrating basic GUI elements such as labels, entry fields, and buttons.
  page_keywords: >-
    Tkinter, survey UI, grid layout, Python, GUI, user input, Radiobutton, Entry widget, submit button, main window
author: QuickTakes
question: >-
    Can you provide an example of a simple survey UI using the grid layout manager in Tkinter?
answer: >-
    Here is an example of a simple survey UI using the grid layout manager in Tkinter. This example will create a basic survey form that asks for the user's name and their favorite color, along with a submit button.\n\n```python\nfrom tkinter import *\n\ndef submit_survey():\n    name = name_entry.get()\n    favorite_color = color_var.get()\n    print(f"Name: {name}, Favorite Color: {favorite_color}")\n\n# Create the main window\nroot = Tk()\nroot.title("Simple Survey")\nroot.geometry("300x200")\n\n# Create and place the labels and entry widgets using grid\nLabel(root, text="Name:").grid(row=0, column=0, padx=10, pady=10, sticky=W)\nname_entry = Entry(root)\nname_entry.grid(row=0, column=1, padx=10, pady=10)\n\nLabel(root, text="Favorite Color:").grid(row=1, column=0, padx=10, pady=10, sticky=W)\ncolor_var = StringVar(value="Red")  # Default value\ncolors = ["Red", "Green", "Blue", "Yellow"]\nfor color in colors:\n    Radiobutton(root, text=color, variable=color_var, value=color).grid(row=1, column=1, sticky=W)\n\n# Create and place the submit button\nsubmit_button = Button(root, text="Submit", command=submit_survey)\nsubmit_button.grid(row=2, columnspan=2, pady=20)\n\n# Start the main event loop\nroot.mainloop()\n```\n\n### Explanation:\n- The `Tk()` function initializes the main window.\n- Labels and entry fields are created for the user's name and favorite color.\n- The `grid()` method is used to arrange the widgets in a 2D grid format, specifying the row and column for each widget.\n- A `Radiobutton` is used to allow the user to select their favorite color from a list.\n- The `submit_survey` function retrieves the input values and prints them to the console when the submit button is clicked.\n\nThis simple survey UI demonstrates how to effectively use the grid layout manager in Tkinter to create an organized and user-friendly interface.
subject: Computer Science
file_name: can-you-provide-an-example-of-a-simple-survey-ui-using-the-grid-layout-manager-in-tkinter.md
url: /learn/computer-science/questions/can-you-provide-an-example-of-a-simple-survey-ui-using-the-grid-layout-manager-in-tkinter
score: -1.0
related_article1:
    id: 119384
    title: >-
        Who was Douglas Engelbart and what was his contribution to early GUI development?
    subject: Computer Science
    url: /learn/computer-science/questions/who-was-douglas-engelbart-and-what-was-his-contribution-to-early-gui-development
related_article2:
    id: 119385
    title: >-
        What innovations did Xerox PARC introduce with the Xerox Alto in 1973?
    subject: Computer Science
    url: /learn/computer-science/questions/what-innovations-did-xerox-parc-introduce-with-the-xerox-alto-in-1973
related_article3:
    id: 119393
    title: >-
        How do layout managers in Tkinter help in designing GUIs?
    subject: Computer Science
    url: /learn/computer-science/questions/how-do-layout-managers-in-tkinter-help-in-designing-guis
related_article4:
    id: 119401
    title: >-
        How can the grid layout manager be used to create a profile entry UI in Tkinter?
    subject: Computer Science
    url: /learn/computer-science/questions/how-can-the-grid-layout-manager-be-used-to-create-a-profile-entry-ui-in-tkinter
related_article5:
    id: 119391
    title: >-
        What is the main loop in Tkinter and why is it important?
    subject: Computer Science
    url: /learn/computer-science/questions/what-is-the-main-loop-in-tkinter-and-why-is-it-important
---

&nbsp;