const gen_btn_list = document.querySelectorAll(".gen-btn")
const board = document.querySelectorAll(".board");
const add_board_btn = document.getElementById("add-board")
const cont = document.getElementById("cont")
const deleteBoard = document.querySelectorAll(".delete-board")
const editTaskbtn = document.querySelectorAll(".edit-task-btn")
const delTaskbtn = document.querySelectorAll(".del-task-btn")



add_board_btn.addEventListener('click',()=>{
    const name = prompt('write name of the new board');
    const new_board = document.createElement('div');
    new_board.classList.add("board")
    new_board.setAttribute("id",name)
    const h3_tag = document.createElement('h3')
    h3_tag.textContent = name+"(";
    const span = document.createElement('span')
    span.classList.add("count")
    span.innerText = "0";
    h3_tag.appendChild(span)
    h3_tag.appendChild(document.createTextNode(") "))//something new create text node to prevent overridng the previously written text
    const delbtn = document.createElement('button');
    delbtn.textContent = "X"
    h3_tag.appendChild(delbtn);
    const btn = document.createElement('button');
    btn.textContent = "Add Task"
    btn.classList.add("gen-btn");
    const div = document.createElement('div');
    div.classList.add("item-container")
    new_board.appendChild(h3_tag)
    new_board.appendChild(btn)
    new_board.appendChild(div)
    cont.appendChild(new_board)
    btn.addEventListener('click',addTask)
    delbtn.addEventListener('click',delBoard)
    new_board.addEventListener('dragover', function(event){
        event.preventDefault();
        const flyingObj = document.querySelector(".flying")
        const itemContainer = this.querySelector(".item-container")  // Find the container
    itemContainer.appendChild(flyingObj)  // Append to container
    })
})

function addTask(){
    let task = prompt("add your task");
    if(!task) return;
    let cnt = 0;
    const board = this.closest(".board");
    const count = board.querySelector(".count")
    if(count.innerText == 0){
        cnt++;
        count.innerText = cnt;
    }
    else{
        cnt = Number(count.innerText);
        cnt++
        count.innerText = cnt;
    }
    
    const itemsContainer = board.querySelector(".item-container");
    const p = document.createElement('div');
    p.textContent = task;
    
    const editbutton = document.createElement('button')
    editbutton.classList.add("edit-task-btn")
    editbutton.textContent = "Edit"
    const delbutton = document.createElement('button')
    delbutton.textContent = "X"
    delbutton.classList.add("del-task-btn")
    p.appendChild(editbutton)
    p.appendChild(delbutton)
    itemsContainer.appendChild(p);
    p.classList.add("items")
    p.setAttribute("draggable","true")
    const allitems = document.querySelectorAll(".items")

    allitems.forEach((element)=>{
    element.addEventListener('dragstart',()=>{
        element.classList.add('flying')
    })
    element.addEventListener('dragend',()=>{
        element.classList.remove('flying')
    })
})
    
    editbutton.addEventListener('click',editTask)
    delbutton.addEventListener('click',delTask)
    let time = new Date();
    const date = time.getDate();
    const month = time.getMonth()+1;
    const hours = time.getHours()
    const minutes =  time.getMinutes();
    const ampm = time.getHours()>12?"PM":"AM";
    console.log("Timestamp",date,"/",month," ",hours,":",minutes,"",ampm)
    p.appendChild(document.createElement('div'));
    p.append("Timestamp:",date,"/",month," ",hours,":",minutes,"",ampm)
}

function editTask(){
    const newTask = prompt('enter new task');
    if(!newTask) return;
    const refofbutton = this.closest(".items")
    refofbutton.textContent = newTask
    const editbutton = document.createElement('button')
    editbutton.classList.add("edit-task-btn")
    editbutton.textContent = "Edit"
    const delbutton = document.createElement('button')
    delbutton.textContent = "X"
    delbutton.classList.add("del-task-btn")
    refofbutton.appendChild(editbutton)
    refofbutton.appendChild(delbutton)
    let time = new Date();
    const date = time.getDate();
    const month = time.getMonth()+1;
    const hours = time.getHours()
    const minutes =  time.getMinutes();
    const ampm = time.getHours()>12?"PM":"AM";
    refofbutton.appendChild(document.createElement('div'));
    refofbutton.append("Timestamp:",date,"/",month," ",hours,":",minutes,"",ampm)
    editbutton.addEventListener('click',editTask)
    delbutton.addEventListener('click',delTask)
 }

function delTask(){
    const board = this.closest(".board");
    const refofbutton = this.closest(".items")
    const refofParent = this.closest(".item-container")
    refofParent.removeChild(refofbutton)
    
    let count = board.querySelector(".count")

    let cnt = 0;
    if(count.innerText == 0){
        return
    }
    else{
        cnt = Number(count.innerText);
        cnt--
        count.innerText = cnt;
    }
    
}

function delBoard(){
    const container = this.closest(".board")
    cont.removeChild(container)
}


gen_btn_list.forEach(element=>{
    element.addEventListener("click",addTask)
})

deleteBoard.forEach(element=>{
    element.addEventListener('click',delBoard)
})

editTaskbtn.forEach(element=>{
    element.addEventListener('click',editTask)
})

delTaskbtn.forEach(element=>{
    element.addEventListener('click',delTask)
})

const allitems = document.querySelectorAll(".items")

allitems.forEach((element)=>{
    element.addEventListener('dragstart',()=>{
        element.classList.add('flying')
    })
    element.addEventListener('dragend',()=>{
        element.classList.remove('flying')
    })
})



board.forEach((element)=>{
    element.addEventListener('dragover',function(event){
        event.preventDefault();
        const flyingObj = document.querySelector(".flying")
        const itemContainer = this.querySelector(".item-container")  // Find the container
        itemContainer.appendChild(flyingObj)  // Append to container, not board
    })
})