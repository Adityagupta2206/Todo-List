const todoList = document.getElementById("todo");
const add1 = document.getElementById("input");
const dateInput = document.getElementById("date");
const btn1 = document.getElementById("add");

btn1.addEventListener("click", () => {
    const newTodoText = add1.value;
    const newTodoDate = dateInput.value;
    if (newTodoText !== "") {
       
        const dateTimeArray = newTodoDate.split('T');
        const newTodoDateFormatted = formatDate(dateTimeArray[0]);
        const newTodoTime = dateTimeArray[1]; 
        const newTodoItem = document.createElement("li");
        newTodoItem.innerText = newTodoText;

       
        const dateSpan = document.createElement("span");
        dateSpan.innerText = `${newTodoDateFormatted} - ${newTodoTime}`;
        newTodoItem.appendChild(dateSpan);

        const deleteTodo = document.createElement("button");
        deleteTodo.innerText = "Delete";

        deleteTodo.classList.add("delete-todo");
        deleteTodo.addEventListener("click", function () {
            newTodoItem.remove();
        });

        newTodoItem.appendChild(deleteTodo);
        todoList.appendChild(newTodoItem);
        add1.value = "";
        dateInput.value = "";
    }
});

function formatDate(date) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
}


function adjustLayout() {
    const windowWidth = window.innerWidth;

  
    if (windowWidth < 600) { 
      
        const dateSpans = document.querySelectorAll('#todo li span');
        dateSpans.forEach(span => {
            span.style.display = 'block'; 
            span.style.marginTop = '5px'; 
        });
    } else {
        // Restore default CSS styles
        const dateSpans = document.querySelectorAll('#todo li span');
        dateSpans.forEach(span => {
            span.style.display = 'inline'; 
            span.style.marginTop = '0';
        });
    }
}


adjustLayout();


window.addEventListener('resize', adjustLayout);
