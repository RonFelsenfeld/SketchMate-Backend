import { utilService } from '../../services/util.service.js'

export const shapeService = {
  generateNewShape,
}

function generateNewShape({ shape, x, y, strokeColor, fillColor, strokeWidth }) {
  return {
    _id: utilService.makeId(),
    type: shape,
    x,
    y,
    width: shape === 'rect' ? 40 : 30,
    height: 40,
    angle: 0,
    strokeColor,
    fillColor,
    strokeWidth,
  }
}
