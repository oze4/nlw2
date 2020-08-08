import { Request, Response } from 'express'

import db from '../database/connection'
const knex = db



class PointsController {
    async create(req: Request, res: Response) {
        console.log("PointsController.create")
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = req.body
    



        const trx = await knex.transaction()
        
        const insertedIds = await trx('points')
            .insert({
                image: 'image-fake',
                name,
                email,
                whatsapp,
                latitude,
                longitude,
                city,
                uf
            })

        const id_point = insertedIds[0]
        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                id_point
            }
        })
    
        await trx('point_items').insert(pointItems)

        return res.json({ sucess: 'true' })
    }

}

export default PointsController