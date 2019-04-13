// Import stylesheets
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

console.clear();


// Write code here

const input = document.querySelector('#taskInput');
//console.log(input);

const addTaskButton = document.querySelector('#addTask');
const tasklist = document.querySelector('#tasks');
const counterTasks = document.querySelector('#countTasks');

let list = ['Go to the cinema', 'Eat breakfast'];

list.forEach(function(task){
  createTodoTask(task);
})

//Listen for when add Task button is triggered
addTaskButton.addEventListener('click', function(){


 if(input.value){
    createTodoTask(input.value);
    input.value = '';
 } 
  })

  function createTodoTask(name){

    //Create task element
    let taskElement = document.createElement('li');
    taskElement.className = "list-group-item";
    taskElement.innerHTML = name;

    //Create delete element button
    let deleteElement = document.createElement('button');
    deleteElement.className = 'btn btn-light float-right is-spaced';
    deleteElement.innerHTML = '&times;';

    //Create edit element button
    let editElement = document.createElement('button');
    editElement.className = 'btn btn-light float-right is-spaced';
    editElement.innerHTML = '&#9998;';

    //add elements to det DOM three
    let taskNode = tasklist.appendChild(taskElement);
    taskNode.appendChild(deleteElement);
    taskNode.appendChild(editElement);
    
    //Listen for click event: Delete
    deleteElement.addEventListener('click', function(){
      taskElement.remove();
      updateCounter();      
    });

     //Listen for click event: edit
     editElement.addEventListener('click', function(){
       const updateText = prompt('Edit task name');
       taskElement.firstChild.data = updateText;
     });

    updateCounter();
  }


function updateCounter(){
  counterTasks.innerHTML = tasklist.children.length;
}




