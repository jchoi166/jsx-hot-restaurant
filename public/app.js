console.log('wingardium levi OHH sa, not levo oh SAA')

//reserve-phone, reserve-name, reserve-email, reserve-unique-id, submit

// const reservation = {
//     name: document.querySelector('#reserve-name').value,
//     phone: document.querySelector('#reserve-phone').value,
//     email:document.querySelector('#reserve-email').value,
//     uniqueID: document.querySelector('#reserve-unique-id').value,
//     isWaitlisted: False
// }


document.querySelector('.submit').addEventListener('click', event => {
    event.preventDefault()

    fetch('/reservations' , {
        method: "POST",
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        body: JSON.stringify({
            name: document.querySelector('#reserve-name').value,
            phone: document.querySelector('#reserve-phone').value,
            email: document.querySelector('#reserve-email').value,
            uniqueID: document.querySelector('#reserve-unique-id').value,
            isWaitlisted: false
        })
    })
    .then (r => {
        window.location = '/reservations'
    })
    .catch (e => {console.log(e)})

  
})