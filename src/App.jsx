import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

import Layout from "./components/header-footer/Layout"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Article from "./pages/Article"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="article" element={<Article />} />
      <Route path="aboutMe" element={<AboutMe />} />
    </Route>
  ))


  return (
   <div className="flex flex-col min-h-screen">
    <RouterProvider router={router} />
   </div>
  )
}

export default App
