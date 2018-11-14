// const reservation = {
//     name: '',
//     phone: null,
//     email:'',
//     uniqueID: false
// }

let reservations = [
    {
        name: 'Ahmed',
        email: 'ahmed@example.com',
        uniqueID: 'afhaque89',
        phone: '000-000-0000'
      }
]

module.exports = {
        getReservation () {
            return reservations
        },

        postReservation (data){
            if (reservations.length >= 5) {
                data.isWaitlisted = true
            }
            reservations.push(data)
            console.log(reservations)
        }
}