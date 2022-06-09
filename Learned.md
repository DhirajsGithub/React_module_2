# Add Daily Goals App

## Here I learnt about differnt method to sytle the react app

* Inline styling - Specific classes can be applied with inlined styling with Ternary Operator or && operator 

* creating a normal style.css file and applying classes with condition can also work 

* with style-components we can ass style directly in .js file which is quite reliable when working with big projects. Which can help us to not merge classes name [style-components](https://styled-components.com/)

* if we want to make differnt .css file for each component and not want to merge similar classe name of other component .css file we can use <compName>.module.css and import it in out compoentn as import classes from './<compName>.module.css' treating it as whole object and have classes as clsses.class

<hr>

## Other Things I learnt

* Make a variable ouside of return but iniside funtion with JSX and render it when condition satisfies
* triggring parent component function with child by passing props and initiate the parent compoent function
* deleting an item from an array ==> filtering that array for deleted item id != element.id