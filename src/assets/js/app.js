

const storage = window.localStorage

const renderContacts = () => {
    const contacts = JSON.parse(storage.getItem('contacts'))

    let div = document.querySelector('#contact-list')
    if (contacts) {
        div.innerHTML = ''
        const ul = document.createElement('ul')

        contacts.forEach(contact => {
            let li = document.createElement('li')

            li.innerHTML = `
                <span>${contact.firstName}</span> 
                <span>${contact.lastName}</span> |
                <span>${contact.email}</span> |
                <span>${contact.telephone}</span> |
                <span>${contact.company}</span>
            `
            ul.appendChild(li)    
        })

        div.appendChild(ul)
    }   else {
        div.innerHTML = '<p>You have no contacts in your address book!</p>'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderContacts()
    const contactForm = document.getElementById('new-contact')
    const toggleFormVisibilityButton = document.getElementById('add-contact')
    contactForm.style.display = 'none'

    toggleFormVisibilityButton.addEventListener('click', () => {
        if (contactForm.style.display === '') {
            contactForm.style.display = 'none'
        } else {
            contactForm.style.display = ''
        }
    })
    
    contactForm.addEventListener('submit', event => {
        event.preventDefault()
        //1. Read in all input fields and their values.
        const {firstName,lastName,email,telephone,company,twitter} = contactForm.elements 

        const contact = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            telephone: telephone.value,
            company: company.value,
        }

        console.log(contact)

        let contacts = JSON.parse(storage.getItem('contacts')) || []

        contacts.push(contact)

        //2. Saves them to our local storage.

        storage.setItem('contacts', JSON.stringify(contacts))
        renderContacts()
        contactForm.reset()
    })
})

document.getElementById("email")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("calculate").click();
        }
   
}); 
document.getElementById("company")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("calculate").click();
        }
   
}); 
document.getElementById("telephone")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("calculate").click();
        }
   
}); 
document.getElementById("lastName")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("calculate").click();
        }
   
}); 
document.getElementById("firstName")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("calculate").click();
        }
   
}); 