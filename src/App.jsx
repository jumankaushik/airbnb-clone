import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Card from '../components/Card'
import data from './data'


function App() {
  const cards = data.map(item => {
    return(
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
