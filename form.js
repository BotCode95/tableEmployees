
const form = document.getElementById('formulario')
const id =window.location.search.split('=')[1]

fetch(`https://6393e57e11ed187986bf9667.mockapi.io/api/curso/employees/${id}`)
  .then(response => response.json())
  .then(data => {
      const element = data;        
      const inputName = document.createElement('input')
      inputName.defaultValue = element.name
      inputName.type = "text"
      inputName.className ="form-control"
      const inputEmail = document.createElement('input')
      inputEmail.defaultValue = element.email
      inputEmail.type = "email"
      inputEmail.className ="form-control"
      const inputCity = document.createElement('input')
      inputCity.defaultValue = element.city
      inputCity.type = "text"
      inputCity.className ="form-control"
      const inputBirthday = document.createElement('input')
      inputBirthday.defaultValue = element.birthday.split('T')[0]
      inputBirthday.type = "date"
      inputBirthday.className ="form-control"
      form.appendChild(inputName)
      form.appendChild(inputEmail)
      form.appendChild(inputCity)
      form.appendChild(inputBirthday)
    })
.catch(err => console.log('Hubo un problema con la petición Fetch:' + err.message))


function goToBack() {
    window.location.href = 'index.html'
}