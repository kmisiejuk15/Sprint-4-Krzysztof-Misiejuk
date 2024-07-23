const form = document.getElementById('form-task')
const task = document.getElementById('input-task')
const listTasks = document.getElementById('task-list')

function addTask() {
  event.preventDefault()
  const taskValue = task.value

  if (taskValue) {
    const newTask = document.createElement('li')
    listTasks.appendChild(newTask)

    const newTaskContent = document.createElement('span')
    newTaskContent.textContent = taskValue
    newTask.appendChild(newTaskContent)

    const editBtn = document.createElement('button')
    editBtn.textContent = 'Edytuj'
    newTask.appendChild(editBtn)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Usuń'
    newTask.appendChild(deleteBtn)

    let isEditing = false

    editBtn.addEventListener('click', function () {
      const changingTask = document.createElement('input')
      if (isEditing) {
        newTaskContent.textContent = newTask.querySelector('input').value
        editBtn.textContent = 'Edytuj'
        newTask.querySelector('input').replaceWith(newTaskContent)
      } else {
        changingTask.value = newTaskContent.textContent
        newTaskContent.replaceWith(changingTask)
        editBtn.textContent = 'Zatwierdź zmiany'
      }
      isEditing = !isEditing
    })

    deleteBtn.addEventListener('click', () => {
      newTask.remove()
    })
  } else {
    alert('Nazwa zadania nie może być pusta.')
  }

  form.reset()
}

form.addEventListener('submit', addTask)
