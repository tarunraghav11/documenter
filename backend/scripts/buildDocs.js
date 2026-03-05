const fs = require("fs")
const path = require("path")
const matter = require("gray-matter")
const {remark} = require("remark")
const html = require("remark-html").default

const docsDir = path.join(__dirname,"../docs")

async function buildDocs(){

  const files = fs.readdirSync(docsDir)

  const docs = []

  for(const file of files){

    const filePath = path.join(docsDir,file)

    const raw = fs.readFileSync(filePath,"utf8")

    const {content,data} = matter(raw)

    const processed = await remark()
      .use(html)
      .process(content)

    const slug = file.replace(".mdx","")

    docs.push({
      slug,
      title:data.title,
      html:processed.toString()
    })

  }

  fs.writeFileSync(
    path.join(__dirname,"../docs.json"),
    JSON.stringify(docs,null,2)
  )

  console.log("Docs compiled successfully")
}

buildDocs()