// import React from 'react';
import styled from 'styled-components'
// styled component will allow you to write css in javascript !!! 

// what if we want the seperate css file for each of our components
import styless from './Button.module.css';

// import './Button.css';
// in ./Button.css we selected button class but that only not limited to where it is imported only that 
// can be merged with other files which does not import ./Button.css file hence it will create merging of other classes 
// first we install the package as $ npm install --save styled-components
// const Button = styled.button`` 
// it will allow to make severer html element like styled.h1/h2/div/p/img/.... `` will allow you to add multiple lines code inside it 

// styled Component eventually creates a unique class always and wrap the css code go to insepect and check 

// const Button = styled.button`
// ${'' /* .button {
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
// } */}
// ${'' /* no need to select root element class  */}

//   font: inherit;
//   width : 100%;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

// ${'' /* .button:focus {
//   outline: none;
// } */}
// ${'' /* while selecting sudo selector  use &  */}

// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }

// @media (min-width: 768px){
//   width: auto;
// }
// ` 

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

const Button = props => {
  return (
    <button type={props.type} className={styless.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};


export default Button;
