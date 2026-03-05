import {useParams} from "react-router-dom"

export default function DocsPage(){

  const {slug} = useParams()

  return(

    <div>

      <h1>{slug}</h1>

      <p>This is where compiled MDX content will appear.</p>

    </div>

  )
}