//  Getting all reruired elements
const inputBox = document.querySelector(".input_fuild input")
const addBtn = document.querySelector(".input_fuild button")
const todoList = document.querySelector(".todo")
const inputId = document.querySelector("#input_id")

inputBox.onkeyup = () =>{
    
    let userdata = inputBox.value;  // getting user eneterd value
    if(userdata.trim() == ''){      //  if user value aren't only space
        addBtn.classList.remove("active")  // active the add btn
    } else {
        addBtn.classList.add("active")  // unactive the add btn
    }
}
// if user click on the button
inputId.onsubmit = (e) => {
    e.preventDefault();
    if(inputBox.value){
        let userData = inputBox.value;      // getting user eneterd value
        let getLocalStorage = localStorage.getItem("New Todo")     // getting localstorage 
        if(getLocalStorage === null){     // if localstorage is null
            listArr = [];    // creating blank array
        }else{ 
            listArr = JSON.parse(getLocalStorage);  // transforming json string into a object
        }
        listArr.push(userData);      // pushing or adding user data 
        localStorage.setItem("New Todo", JSON.stringify(listArr));     // transforming js object into json string
        showTasks();   // colling showTasks function 
        addBtn.classList.remove("active")  // active the add btn
    }
   
}

// function to add task list inside ul
const showTasks = () => {
    let getLocalStorage = localStorage.getItem("New Todo")     // getting localstorage 
    if(getLocalStorage === null){     // if localstorage is null
        listArr = [];    // creating blank array
    }else{ 
        listArr = JSON.parse(getLocalStorage);  // transforming json string into a object
    }
    let newliTag = "";
    listArr.forEach((element,index) => {
        newliTag += `<div class="todolist">
        <div class="todoitem">
            <img src="img/mes1.jpg" alt="message">
        </div>
        ${element}
        <div id="todotrash" onclick = "deletTask(${index})">
            <i class="fas fa-trash" id="todoicon"></i>
        </div>
    </div>`;
    });
    todoList.innerHTML = newliTag;     // adding new li tag inside ul tag 
    inputBox.value = "";     // once task added leave the input field blank 
}
showTasks();   // colling showTasks function 

// Delet chet function
const deletTask = (index) => {
    let getLocalStorage = localStorage.getItem("New Todo")
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1)    // delete or remove the particular div

    // after remove the div again update the local storage 
    localStorage.setItem("New Todo", JSON.stringify(listArr));     // transforming js object into json string
    showTasks();   // colling showTasks function 
}
