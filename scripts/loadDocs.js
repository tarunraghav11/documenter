const fs = require('fs')
const path = require("path")

const getDocs = (dir) => {
    const files = fs.readdirSync(dir)

    return files.map(file =>({
        path: path.join(dir,file),
        slug: file.replace('.mdx', '')
        
    } ))
}

module.exports = getDocs