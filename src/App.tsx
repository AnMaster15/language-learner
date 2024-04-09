

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './componenets/Header'
import { Suspense, lazy } from 'react'
import Loader from './componenets/Loader'


const Home=lazy(()=>import('./componenets/Home'))
const Learning=lazy(()=>import('./componenets/Learning'))
const Quiz=lazy(()=>import('./componenets/Quiz'))
const Results=lazy(()=>import('./componenets/Results'))
const Login=lazy(() => import("./componenets/Login"))

function App() {
  
  return (
    <>

    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/learn" element={<Learning />}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/result" element={<Results />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
      </Suspense>
    </Router>
 
    </>
  )
}

export default App
