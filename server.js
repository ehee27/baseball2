import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import playerRouter from './routes/players.js'

const app = express()
const port = process.env.PORT || 4000
app.use(cors())
app.get('/', (req, res) => {
  res.send('SERVER IS LIVE')
})
app.listen(port, () => console.log(`Listening on port ${port}`))
//
app.use('/players', playerRouter)
