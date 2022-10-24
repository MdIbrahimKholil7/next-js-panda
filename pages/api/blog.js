
import { data } from 'autoprefixer';
import * as fs from 'fs'

export default async function handler(req, res) {
    const file = await fs.promises.readdir('blog-json')
    console.log(file)

    let allFiles=[]
    for (let i = 0; i < file.length; i++) {
        console.log('click')
        const result = await fs.promises.readFile(`blog-json/${file[i]}`,'utf-8')
        allFiles.push(JSON.parse(result))
        // console.log('allFiles',allFiles)
    }

    // console.log(allFiles)
    res.status(200).json({data:allFiles})
}
