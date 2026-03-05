import {Link} from "react-router-dom"
import docs from "../../backend/docs.json"

export default function Sidebar(){

  return(
    <div style={{width:"200px",borderRight:"1px solid #ccc"}}>

      <h3>Docs</h3>

      {docs.map(doc => (

        <div key={doc.slug}>
          <Link to={`/docs/${doc.slug}`}>
            {doc.title}
          </Link>
        </div>

      ))}

    </div>
  )
}