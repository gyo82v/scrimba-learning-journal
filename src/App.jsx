import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import { useState } from "react"

import Layout from "./components/header-footer/Layout"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Article from "./pages/Article"

function App() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(o => !o)

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout setOpen={handleOpen} open={open} />}>
      <Route path="/" element={<Home open={open} setOpen={handleOpen} />} />
      <Route path="article" element={<Article open={open} setOpen={handleOpen} />} />
      <Route path="aboutMe" element={<AboutMe open={open} setOpen={handleOpen} />} />
    </Route>
  ))


  return (
   <div className="flex flex-col min-h-screen">
    <RouterProvider router={router} />
   </div>
  )
}

export default App
