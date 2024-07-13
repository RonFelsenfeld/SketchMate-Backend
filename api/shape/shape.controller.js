import { shapeService } from './shape.service.js'
import { logger } from '../../services/logger.service.js'

export function addShape(req, res) {
  try {
    logger.debug('Adding shape')
    const shapeData = req.body
    const newShape = shapeService.generateNewShape(shapeData)
    res.json(newShape)
  } catch (err) {
    logger.error('Failed to add shape', err)
    res.status(500).send({ err: 'Failed to add shape' })
  }
}
