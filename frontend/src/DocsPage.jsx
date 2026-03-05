import {useParams} from "react-router-dom"
import docs from "../../backend/docs.json"

export default function DocsPage(){

  const {slug} = useParams()

  const doc = docs.find(d => d.slug === slug)

  if(!doc){
    return <h1>Doc not found</h1>
  }

  return(

    <div>

      <h1>{doc.title}</h1>

      <div
        dangerouslySetInnerHTML={{__html:doc.html}}
      />

    </div>

  )
}