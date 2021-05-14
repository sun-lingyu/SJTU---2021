import fs from "fs"
import path from "path"

const postsDirectory = path.join(process.cwd(), 'data')

export function fetchData(fileName) {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    return fileContents
}