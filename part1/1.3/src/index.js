import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log("Header", props)
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log("Content", props )
  return (
    <>
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of excercises {props.part1.exercises + props.part2.exercises + props.part3.exercises} courses</p>
  )
}

const Part = (props) => {
  console.log("Part", props)
  return (
    <p>{props.name} {props.exercises} courses</p>
  )
}


const App = () => {
  const course = 'Half Satck aplication development'
  const part1 = {
    name: 'Fundamentals of React:',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data:',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component:',
    exercises: 14
  }
  return (
    <>
    <Header course={course} />
    <Content 
      part1={part1}
      part2={part2}
      part3={part3}
    />
    <Total part1={part1} part2={part2} part3={part3}/>
    </>
    
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



