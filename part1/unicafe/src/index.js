import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Title = ({ text }) => <h2>{text}</h2>

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Subtitle = (props) => <h2>{props.text}</h2>

const Statistics = (props) => {
  if(props.click === false){
    return (
      <p>{props.text}</p>
    )
  }  
  return (
    <div>
      <StatisticLine text="Good" value ={props.good} />
      <StatisticLine text="Neutral" value ={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />
      <StatisticLine text="All" value={props.all} />
      <StatisticLine text="Average" value={props.average} />
      <StatisticLine text="Positive" value={props.positive} percent="%" />
    </div>
  )
}

const StatisticLine = (props) => <p>{props.text}: {props.value}{props.percent}</p>

const App = () => {
  const [good ,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = (good + neutral + bad)
  const average = (good + neutral + bad) / 3
  const positive = ((good / (good + neutral + bad)) * 100)
  const [click, setClick] = useState(false)
  
  return (
    <div>
      <Title text="Give feedback"/>
      <Button 
        handleClick={() => {
          setGood(good +1);
          setClick(true);
        }} 
        click={click} text="Good"/>
      <Button 
        handleClick={() => {
          setNeutral(neutral + 1);
          setClick(true);
        }} 
        text="Neutral"/>
      <Button 
        handleClick={() => {
          setBad(bad + 1);
          setClick(true);
        }} 
        text="Bad"/>
      <Subtitle text="Statistics"/>
      <Statistics click={click} text="Feedback no given" good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
      
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

