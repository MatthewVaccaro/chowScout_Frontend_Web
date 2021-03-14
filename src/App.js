import React, {useState} from 'react'
import './styles/main.css';
import Button from "./util/Button"
import {iconsLight} from "./assets/icons"

function App() {
  const [state, setState] = useState({name: 'hello'})
  return (
  <div className="" >
    <Button background="blue" content="Button" icon={iconsLight.arrowIcon} />
    
  </div>
  );
}

export default App;
