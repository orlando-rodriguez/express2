const express = require('express')
const cors = require('cors')
const app = express()
const port = parseInt(process.env.PORT || 3000)

const instructors = require('./instructors.js')

function getDataById(data, id) {
    return data.data.filter(currentItem => currentItem.id == id)
}

app.get('/', (request, response) => response.json(instructors))

app.get('/:id', (request, response) => {
    let filteredInstructor = getDataById(instructors, request.params.id)
    if (filteredInstructor.length < 1) {
        response.status(404).json({
            error: { message: 'No record found!' }
        })
    } else {
        response.json({ instructor: filteredInstructor })
    }
})

app.listen(port)
    .on('error', console.error.bind(console))
    .on('listening', console.log.bind(console, `Listening on ${port}`))
