const addNew = document.querySelector('#addNew')
const board1 = document.querySelector('#board1')
const taskContainer = document.querySelector('#taskContainer')
let del = false
let key = 0
window.addEventListener('load', () => {
    for(let i = 1; i<=100; i++){
        const newTask = document.createElement('div')
        if(localStorage.hasOwnProperty(`task${i}`)){
        newTask.classList.add('newTask')
        taskContainer.append(newTask)
        const inputTask = document.createElement('h3')
        inputTask.innerText = localStorage.getItem(`task${i}`)
        newTask.append(inputTask)
        inputTask.addEventListener('click', () => {
                newTask.classList.toggle('newTaskIn')
                del = true
                key = `task${i}`
        })
        }
        const procTask = document.createElement('div')
        if(localStorage.hasOwnProperty(`proc${i}`)){
            procTask.classList.add('newTask')
            taskContainer2.append(procTask)
            const inputTask2 = document.createElement('h3')
            inputTask2.innerText = localStorage.getItem(`proc${i}`)
            procTask.append(inputTask2)
            inputTask2.addEventListener('click', () => {
                procTask.classList.toggle('newTaskIn')
                del = true
                key = `proc${i}`
            })
        }
        const doneTask = document.createElement('div')
        if(localStorage.hasOwnProperty(`done${i}`)){
            doneTask.classList.add('newTask')
            taskContainer3.append(doneTask)
            const inputTask3 = document.createElement('h3')
            inputTask3.innerText = localStorage.getItem(`done${i}`)
            doneTask.append(inputTask3)
            inputTask3.addEventListener('click', () => {
                doneTask.classList.toggle('newTaskIn')
                del = true
                key = `done${i}`
            })
        }
    }
})

addNew.addEventListener('click', () => {
    const newTask = document.createElement('div')
    newTask.classList.add('newTask')
    taskContainer.append(newTask)
    const input = document.createElement('input')
    const inputTask = document.createElement('h3')
    input.classList.add('input') 
    input.append(inputTask)
    newTask.append(input)
    const accept = document.createElement('div')
    accept.classList.add('accept')
    newTask.append(accept)
    accept.addEventListener('click', () => {
        let keyCount = localStorage.length+1
        inputValue = input.value
        inputTask.innerText = inputValue
        newTask.append(inputTask)
        localStorage.setItem(`task${keyCount}`, inputValue)
        input.remove()
        accept.remove()
        location.reload()
            inputTask.addEventListener('click', () => {
            newTask.classList.toggle('newTaskIn')
            del = true
            key = `task${i}`
        })
    })
})

const removeBtn = document.querySelector('#remove')
removeBtn.addEventListener('click', () => {
    if(del == true){
        localStorage.removeItem(key)
        location.reload()
        del = false
    }
})
const board2 = document.querySelector('#board2')
const taskContainer2 = document.querySelector('#taskContainer2')
const nextBtn = document.querySelector('#next')
nextBtn.addEventListener('click', () => {
    if(del == true){
        const procTask = document.createElement('div')
        procTask.classList.add('newTask')
        taskContainer2.append(procTask)
        const inputTask2 = document.createElement('h3')
        inputTask2.innerText = localStorage.getItem(key)
        procTask.append(inputTask2)
        localStorage.setItem(`prc${localStorage.length+1}`, 2)
        localStorage.setItem(`proc${localStorage.length+1}`, inputTask2.textContent)
        inputTask2.innerText = localStorage.getItem(key)
        localStorage.removeItem(key)
        location.reload()
    }
})

taskContainer2.classList.add('scrollBar')

const remove2 = document.querySelector('#remove2')
remove2.addEventListener('click', () => {
    if(del == true){
        localStorage.removeItem(key)
        location.reload()
    }
})

const board3 = document.querySelector('#board3')
const taskContainer3 = document.querySelector('#taskContainer3')
const nextBtn2 = document.querySelector('#next2')
nextBtn2.addEventListener('click', () => {
    if(del == true){
        const doneTask = document.createElement('div')
        doneTask.classList.add('newTask')
        taskContainer3.append(doneTask)
        const inputTask3 = document.createElement('h3')
        inputTask3.innerText = localStorage.getItem(key)
        doneTask.append(inputTask3)
        localStorage.setItem(`don${localStorage.length+1}`, 2)
        localStorage.setItem(`done${localStorage.length+1}`, inputTask3.textContent)
        localStorage.removeItem(key)
        console.log(key)
        location.reload()
        inputTask3.innerText = localStorage.getItem(localStorage.length)
    }
})

const remove3 = document.querySelector('#remove3')
remove3.addEventListener('click', () => {
    if(del == true){
        localStorage.removeItem(key)
        location.reload()
    }
})

taskContainer3.classList.add('scrollBar')
taskContainer.classList.add('scrollBar')

const backBtn = document.querySelector('#back')
backBtn.addEventListener('click', () => {
    window.location.href = '../index.html'
})