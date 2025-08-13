import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './Game.jsx'
// import App from './App.jsx'
// import App from './pages/First.jsx'

import MyApp from './MyApp'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <MyApp />
    </HashRouter>
  </StrictMode>,
)
