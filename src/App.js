import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function App() {
  return (
    <div>
      <Header/>
      <h1>Main App</h1>
      <Footer somepropdata={'My data'}/>
    </div>
  )
}