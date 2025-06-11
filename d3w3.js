const MyForm = document.getElementById("formTodo")
MyForm.addEventListener ('submit', (e) => {prevent.Default()

const cosedafareinput = document.getElementById("cosedafare")


const valoreCdf = cosedafareinput.value}, 

console.log(`Elenco di` + valoreCdf))


const elementi = document.createElement('li')

  elementi.classList.add('elementili')

  elementi.innerHTML =
    ´<p>${valoreCdf.cosedafareinput}<p>´


    
    <button onclick ="deleteElementi(event)"> ELIMINA </button>
    



  const lista = document.getElementById('saved-contacts')
  lista.appendChild(elementi)

  
  MyForm.reset()

const deleteElementi = function (e) {
  console.log('ELIMINA', e.target)


  console.log(e.target.elementi) 
  
  e.target.parentElement.remove()} 
