import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import ItemCard from './components/ItemCard'
import Nav from './components/Nav'

function App() {

  return (
    <div className="w-full h-full flex items-center flex-col ">
      <Nav /> 
      <Form /> 
      <ItemCard />
    </div>
  )
}

export default App
