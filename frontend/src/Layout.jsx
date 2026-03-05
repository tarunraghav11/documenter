import Sidebar from "./Sidebar"

export default function Layout({children}){

  return (
    <div style={{display:"flex"}}>

      <Sidebar/>

      <main style={{padding:"40px"}}>
        {children}
      </main>

    </div>
  )
}