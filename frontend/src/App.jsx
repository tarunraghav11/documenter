import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout"
import DocsPage from "./DocsPage"

export default function App(){

  return(

    <BrowserRouter>

      <Layout>

        <Routes>

          <Route path="/docs/:slug" element={<DocsPage/>}/>

        </Routes>

      </Layout>

    </BrowserRouter>

  )
}