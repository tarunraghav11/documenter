const fs = require("fs")
const path = require("path")
const matter = require("gray-matter")

const docsDir = path.join(__dirname, "../docs")

function scanDocs(){

  const files = fs.readdirSync(docsDir)

  const docs = files.map(file => {

    const filePath = path.join(docsDir, file)

    const content = fs.readFileSync(filePath, "utf-8")

    const { data } = matter(content)

    const slug = file.replace(".mdx","")

    return {
      slug,
      title: data.title
    }

  })

  return docs
}

module.exports = scanDocs