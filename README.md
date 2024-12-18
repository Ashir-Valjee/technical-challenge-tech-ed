# Linear Gradient Generator

## What is the objective?

Using either vanilla JavaScript, React or NextJS, create a single page app that lets you manipulate the background colour.

## Requirements

🎯 Inputs to change the background colours (minimum 2 colours). done

🎯 An input to control the angle of the gradient. done

## Stretch Goals

🏹 Give the user the ability to copy the CSS that is being created for them to use in their own project. done

🏹 Allow the user to add more than 2. colours done

## Restrictions

❌ You may not use any other packages, libraries or frameworks other than React & NextJS

❌ Please refrain from Googling solutions to this specific issue. For example you can Google `colour input in HTML` but not `how to make a CSS gradient generator`.

## What does my site do?

I designed the site in Next js and ended up allowing for n colors in the background gradient.
I also allowed the user to view and copy the CSS code for use in their own projects.
I tried to make the UI user friendly and appealing with plenty of conditional rendering

## How was the journey?

This challenge was harder then it initially seemed and took a fair bit of creative thinking.
My first attempt was for three colors and you can view the code in component DynamicGradient1.jsx.
Once i completed that i attempted a more general solution with n colors. This is what i used in my deployment and can be viewed in DynamicGradient2.jsx.
Getting the logic to remove an element from the color array was a bit tricky.

## References

https://www.w3schools.com/cssref/func_linear-gradient.php
https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://builtin.com/software-engineering-perspectives/javascript-filter
