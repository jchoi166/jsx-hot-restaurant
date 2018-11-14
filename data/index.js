// const reservation = {
//     name: '',
//     phone: null,
//     email:'',
//     uniqueID: false
// }

let reservations = []

module.exports = {
        getReservation () {
            return reservations
        },

        postReservation (data){
            if (reservations.length >= 5) {
                data.isWaitlisted = true
            }
            reservations.push(data)
        }
}