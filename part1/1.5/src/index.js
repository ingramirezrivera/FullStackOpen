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
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
      {/* <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} /> */}
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of excercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} courses</p>
    // <p>Number of excercises {props.parts[1][2] + props.parts[2][2] + props.props.parts[3][2]} courses</p>
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
  const parts = [
  {
    name: 'Fundamentals of React:',
    exercises: 10
  },
  {
    name: 'Using props to pass data:',
    exercises: 7
  },
  {
    name: 'State of a component:',
    exercises: 14
  }
  ]
  return (
    <>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </>
    
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



