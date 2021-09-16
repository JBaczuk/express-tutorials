const { Router } = require('express')
const router = new Router()

router.param('id', (req, res, next, id) => {
    if(!isNaN(parseInt(id) && isFinite(id))) {
        next()
    } else {
        return res.status(400).json({ message: 'id must be a number' })
    }
})

router.get('/:id', (req, res, next) => {
    res.status(200).json({ message: 'success' })
})

module.exports = router