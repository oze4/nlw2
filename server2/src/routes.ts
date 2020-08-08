import express, { response } from 'express'
import db from './database/connection'
const knex = db

import PointsController from './controllers/PointsController'



const routes = express.Router()
const pointsController = new PointsController()


routes.get('/items', async (req, res) => {
    const items = await knex('items').select('*')

    const serializedItems = items.map(item => {
        return {
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
        }
    })

    return res.send(serializedItems)
})



routes.post('/points', pointsController.create)

















export default routes