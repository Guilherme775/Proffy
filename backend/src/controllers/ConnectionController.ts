import { Request, Response } from 'express'
import connection from '@database/connection'

class ConnectionController {
  async create (req: Request, res: Response) {
    const { user_id } = req.body

    await connection('connections').insert({
      user_id
    })

    return res.status(201).send()
  }

  async index (req: Resquest, res: Response) {
    const totalConnections = await connection('connections').count('* as total')

    const { total } = totalConnections[0]

    return res.json({ total })
  }
}

export default ConnectionController
