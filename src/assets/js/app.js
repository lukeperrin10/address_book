

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
                <span>${contact.firstName}</span> |
                <span>${contact.lastName} |
                <span>${contact.email}</span> |
                <span>${contact.telephone}</span>
            `
            ul.appendChild(li)    
        })

        div.appendChild(ul)
    }   else {
        div.innerHTML = '<p>You have no contacts in your address book!</p>'
    }
}

document.addEventListener('DOMcontentLoaded', () => {
    renderContacts()
    const contactForm = document.getElementById('new-contact')
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
            twitter: twitter.value, 
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