import React from 'react'
import Home from './components/Home'

const App = () => {
  let checkquery = (e) => {
    console.log(e)
  }

  return (
  <Home data={['blank','label','this']} validation={checkquery} />
  )
}

export default App
