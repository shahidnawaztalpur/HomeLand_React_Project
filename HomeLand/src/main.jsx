import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Properties from './Pages/Properties'
import Contact from './Pages/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="properties" element={<Properties />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)














// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Home from './Pages/Home.jsx'
// import About from './Pages/About.jsx'
// import { RouterProvider , createBrowserRouter, Routes } from "react-router-dom"
// import Layout from './Layout'



// const router = createBrowserRouter ([
  
  // <Routes>

  // <Route path= "/" element={<Layout />} />
  // <Route path= "" element={<Home />} />
  // <Route path= "/about" element={<About />} />

  // </Routes>
  
  // {
  //   path: "/",
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: "",
  //       element: <Home />
  //     },
  //     {
  //       path: "/About",
  //       element: <About />
  //     }
  //   ]
  // }
// ])
 
// cre/ateRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router = {router} />
//   </StrictMode>
// )
