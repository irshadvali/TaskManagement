
import get from 'lodash'
export const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};


function distanceBetweenPoints(p1, p2, name) {
    return Math.abs(Math.sqrt(getDistanceY(p1, p2, name) + getDistanceX(p1, p2, name)))
}

function getDistanceY(p1, p2, name) {
    return (get(p1, name.y) - get(p2, name.y)) * (get(p1, name.y) - get(p2, name.y))
}

function getDistanceX(p1, p2, name) {
    return (get(p1, name.x) - get(p2, name.x)) * (get(p1, name.x) - get(p2, name.x))
}

export const sortByDistance = (origin, points, opts = {}) => {
    if (!origin || !points || !Array.isArray(points)) {
        return new Error('An origin and array points must be provided')
    }

    const names = {
        y: opts.yName || 'y',
        x: opts.xName || 'x'
    }

    const newPoints = points.slice()

    newPoints.sort(function (a, b) {
        a.distance = distanceBetweenPoints(origin, a, names)
        b.distance = distanceBetweenPoints(origin, b, names)

        return a.distance - b.distance
    })
    return newPoints
}