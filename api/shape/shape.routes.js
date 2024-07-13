import express from 'express'

import { addShape } from './shape.controller.js'

export const shapeRoutes = express.Router()
shapeRoutes.post('/', addShape)
