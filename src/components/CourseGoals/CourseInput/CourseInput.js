import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import style from './CourseInput.module.css'

// const FormControl = styled.div`

//   margin: 0.5rem 0;


// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
//   color : ${props => (props.invalid ? 'red' : 'initial')}
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')} ;
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
//   background : ${props => (props.invalid ? '#ffd7d7' : 'transparent')}
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }

// /* read as we have form-control and invalid classes simultaneously to an element  */
// ${'' /* &.invalid input {
//   border-color: red;
//   background-color: #ffd7d7;
// }
// &.invalid label{
//   color: red;
// } */}
// ${'' /* now controlled using props  */}
// `

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(enteredValue.trim().length > 0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);

  };

  // the way he optmize the code and the thinking power, hats off
  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;    //      props.onAddGoal(enteredValue); will not exeucte if conditon meets
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className="form-control"> */}
        {/* <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input style={{borderColor: !isValid ? 'red' : '#ccc' , background : !isValid ? 'salmon' : 'transparent'}} type="text" onChange={goalInputChangeHandler} /> */}
        {/* instead of setting dynamic inline style we could set css classes dynamically  */}

        {/* if conditon is true below div has two classes form-control invalid if not then it will have only form-control class  */}
        {/* <div className={`form-control ${!isValid ? 'invalid' : '' }`}>
        <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        </div> */}

        {/* style with styled component  */}

        {/* <FormControl className={ !isValid && 'invalid'}> */}
        {/* we can use props provided by styled components as  */}
        {/* <FormControl invalid = {!isValid}>
       <label >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} /> 
        </FormControl> */}
        
        {/* styles return an object from CourseInput.module.css  */}
        <div className={`${style['form-control']} ${!isValid && style.invalid}`}>
        <label >Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
        </div>
    

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
