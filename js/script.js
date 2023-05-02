
const FirstName = document.querySelector("#FirstName");
const LastName = document.querySelector("#LastName");
const EmailAddross = document.querySelector("#EmailAddross");
const WobsitoNamo = document.querySelector("#WobsitoNamo");
const WriteYoorMessage = document.querySelector("#WriteYoorMessage");
const submit = document.querySelector("#submit");
const tbody = document.querySelector("tbody")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = window.crypto.randomUUID().slice(-5)
    const user = {
        id: id,
        FirstName: FirstName.value,
        LastName: LastName.value,
        EmailAddross: EmailAddross.value,
        WobsitoNamo: WobsitoNamo.value,
        WriteYoorMessage: WriteYoorMessage.value
    }
    
    localStorage.setItem(` ${id}-${FirstName.value}`, JSON.stringify(user));

    tbody.innerHTML += `
        <tr>
            <td>${id}</td>
            <td>${FirstName.value}</td>
            <td>${LastName.value}</td>
            <td>${EmailAddross.value}</td>
            <td>${WobsitoNamo.value}</td>
            <td>${WriteYoorMessage.value}</td>
        </tr>
    `
    FirstName.value = ""
    LastName.value = ""
    EmailAddross.value = ""
    WobsitoNamo.value = ""
    WriteYoorMessage.value = ""
})

