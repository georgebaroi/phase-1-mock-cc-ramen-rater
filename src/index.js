// write your code here
//grab form using query selector
let form= document.querySelector('#new-ramen')
//add submit event listener to form
form.addEventListener('submit', (e) =>{e.preventDefault()
    let newNameVal = e.target['new-name'].value
    let p = document.createElement('p')
    p.textContent = newNameVal




})




let newRestaurant = document.querySelector('#new-restaurant')







