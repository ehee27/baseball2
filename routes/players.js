import express from 'express'
const playerRouter = express.Router()
import { getPlayers } from '../controllers/playerController.js'

playerRouter.get('/', (req, res) => {
  // res.send('This is the players API')
  res.json({ data: getPlayers() })
})

export default playerRouter
