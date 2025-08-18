import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import { useState } from "react"

import Layout from "./components/header-footer/Layout"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Article from "./pages/Article"

function App() {
  const [open, setOpen] = useState(true)

  const handleOpen = () => setOpen(o => !o)

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout open={open} setOpen={setOpen} />}>
      <Route path="/" element={<Home open={open} />} />
      <Route path="article" element={<Article open={open}/>} />
      <Route path="aboutMe" element={<AboutMe open={open} />} />
    </Route>
  ))


  return (
   <div className="flex flex-col min-h-screen">
    <RouterProvider router={router} />
   </div>
  )
}

export default App
