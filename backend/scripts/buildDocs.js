const fs = require("fs")
const path = require("path")
const scanDocs = require("./scanDocs")

const output = scanDocs()

fs.writeFileSync(
  path.join(__dirname,"../docs.json"),
  JSON.stringify(output, null, 2)
)

console.log("Docs metadata generated")