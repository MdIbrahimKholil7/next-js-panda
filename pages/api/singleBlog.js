import * as fs from 'fs'

export default async function handler(req, res) {
    console.log(req.query)
    const result = await fs.promises.readFile(`blog-json/${req.query.title}.json`, 'utf-8')
    console.log(result)
    res.status(200).json({ data: JSON.parse(result) })
}

