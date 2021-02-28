import React from 'react'
import Accordions from './Accordions';
import "./App.scss";
const Title = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center",height:"100%"}}>
      Title
    </div>
  )
}
function App() {
  return (
    <div className="App">
     
    <Accordions data={[{title:<Title/>,content:"hi"},{title:<Title/>,content:"hi2"}]}/>
    </div>
  )
}

export default App
