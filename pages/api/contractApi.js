import * as fs from 'fs'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        res.json('hello post')
        console.log(req.body)
        const data = await fs.promises.readdir('contractData')
        console.log(data)
        await fs.promises.writeFile(`contractData/${data.length + 1}.json`, JSON.stringify(req.body), (err, data) => {
            console.log(data)
        })

    } else {
        // Handle any other HTTP method
        res.json('hello ')
    }
}




