import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdotes = (props) => {
  if (props.click === false) {
    return (
      <p>Click to start</p>
    )
  }
  return (
    <div>
      <p>{props.anecdotes[props.selected]}</p>
      <p>Has {props.vote[props.selected]} votes</p>
    </div>
  )
}

const MostVoted = (props) => {
  if (props.maximun === 0) {
    return (
      <p>No anecdotes has been Voted</p>
    )
  }
  return (
    <div>
      <p>{props.anecdoteMostVoted}</p>
      <p>Has {props.maximun} votes</p>
    </div>
  )
}

const Button = (props) => {
  
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  const [selected, setSelected] = useState(0)
  console.log("selected", selected)
  const [click, setClick] = useState(false)
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))
  console.log("vote...", vote)
  const copy = [...vote]
  copy[selected] += 1
  const getRandom = (min, max) => {
    return (parseInt(Math.random() * (max- min) + min))
  }
  let maximun = Math.max(...vote)
  let anecdoteMostVoted = vote.indexOf(maximun)
  console.log("anecdoteMostVoted", anecdoteMostVoted, anecdotes[anecdoteMostVoted])
    
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdotes anecdotes={anecdotes} vote={vote} click={click} selected={selected}/>
      <Button onClick={() => setVote(copy)} text="Vote" />
      <Button onClick={() => {
        setSelected(getRandom(0, anecdotes.length));
        setClick(true);
      }}
      click={click}
      text="Next anecdote" 
      />
      <h2>Anecdote with most votes</h2>
      <MostVoted maximun={maximun} anecdoteMostVoted={anecdotes[anecdoteMostVoted]}/>
      
    </div>
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

