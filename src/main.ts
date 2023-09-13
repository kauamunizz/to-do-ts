import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
  <div class="container">
    <div class="title-add">
      <input type="text" placeholder="Qual sua proxima tarefa?"/>
      <button class="btn">add</button>
    </div>
    <p>Você ainda nao possui tarefas 🍕</p>
  
  </div>
`
