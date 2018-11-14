const reservations = require ('../data')

module.exports = app => {
    app.get('/', (req,res) => res.render('index'))
    app.get('/reserve', (req,res) => res.render('reserve'))
    app.get('/reservations', (req,res) => res.render('reservations', {reservations: reservations.getReservation()}))
    app.post('/reservations', (req, res) => {
        reservations.postReservation(req.body)
        res.sendStatus(200)
        console.log("ping")
    })
}



