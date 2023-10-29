import { useState } from 'react'

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statstics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad)/all;
  const positive = all === 0 ? 0 : good/all*100;

  if (all === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    );
  }
}

const Button = ({name, handleClick}) => <button onClick={handleClick}>{name}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => setGood(good+1);
  const handleClickNeutral = () => setNeutral(neutral+1);
  const handleClickBad = () => setBad(bad+1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button name='good' handleClick={handleClickGood} />
      <Button name='neutral' handleClick={handleClickNeutral} />
      <Button name='bad' handleClick={handleClickBad} />
      <h1>statistics</h1>
      <Statstics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App