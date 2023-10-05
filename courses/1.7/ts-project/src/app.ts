// Code goes here!
const form = document.querySelector('form')
const addressInput = document.getElementById('address')! as HTMLInputElement

function searchAddress(e:Event){
e.preventDefault()
const enteredAddress = addressInput.value
}

form?.addEventListener('submit', searchAddress)