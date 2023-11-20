import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'
import CardDynamic from './CardDynamic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Card className = "card" />
      <CardDynamic title="title 1" paragraph="paragraph 1" link="link 1" />
      <CardDynamic title="title 2" paragraph="paragraph 2" link="link 2" />
      <CardDynamic title="title 3" paragraph="paragraph 3" link="link 3" />
      <CardDynamic title="title 4" paragraph="paragraph 4" link="link 4" />
    </div>
    
  )
}

export default App
