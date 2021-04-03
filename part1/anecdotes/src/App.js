import React, {useState} from 'react';

function App() {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState([0,0,0,0,0,0]);

  const handleGenerate = () => setSelected(Math.floor(Math.random()*anecdotes.length))

  const handleVote = () => {
    let vote = [...votes]
    vote[selected] += 1;
    setVotes(vote);
  }

  const getTopAnecdoteIndex = () => {
    let max = votes[0];
    let maxIndex = 0;

    for (var i = 1; i < votes.length; i++) {
      if (votes[i] > max) {
        maxIndex = i;
        max = votes[i];
      }
    }

    return maxIndex;
  }

  const topAnecdoteIndex = getTopAnecdoteIndex();

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <span>{votes[selected]} Votes</span>
      <button onClick={handleVote}>Upvote</button><button onClick={handleGenerate}>Next Anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[topAnecdoteIndex]}</p>
      <span>Has {votes[topAnecdoteIndex]} votes</span>
    </div>
  );
}

export default App;
