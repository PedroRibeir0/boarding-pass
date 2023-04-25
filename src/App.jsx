import { useState } from 'react'
import './App.css'
import { BoardingPass } from './components/BoardingPass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1>Cartão de embarque</h1>
      <BoardingPass/>
      <p>Qualquer problema procure o balcão de atendimento da sua companhia aérea</p>
    </div>
  )
}

export default App
