// prevents the tab key, so it won't interfere with the form.
document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") { e.preventDefault() }
});

const ul = document.querySelector('.todo-list');
let todoItems = [];
const firstLi = document.querySelector("#first-item");

function addTodo(text) {
    const todo = {
        text,
        checked: false, // checkbox
        id: Date.now(), // returns the number of milliseconds elapsed since January 1, 1970, 
    };
    todoItems.push(todo);
    // Grab the ul element and insert <li> element before the end off <ul> element
    ul.insertAdjacentHTML('beforeend',
        `<li class="todo-item" data-key="${todo.id}">
            <input id="${todo.id}" type="checkbox"/>
            <label for="${todo.id}" class="tick"></label>
            <span>${todo.text}</span>
            <button class="delete-todo ">
                <i style="pointer-events:none" class="far fa-trash-alt"></i>
            </button>
        </li>`);
    // data-key="${todo.id}     <--- to find it in the array later when we need it
    //<input id="${todo.id}     <--- to target label
    //<label for="${todo.id}    <--- to target input
    //${todo.text}              <--- text inserted when function was called       
    // class="delete-todo">     <--- for styling and event targeting
    //style="pointer-events:none" <--- So the button can be pressed even if you click in the icon
}

function toggleDone(key) {
    const index = todoItems.findIndex(x => x.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;
    const item = document.querySelector(`[data-key='${key}']`);
    if (todoItems[index].checked) {
        item.classList.add('done');
    } else {
        item.classList.remove('done')
    }
}

function deleteTodo(key) {
    todoItems = todoItems.filter(x => x.id !== Number(key));
    document.querySelector(`[data-key='${key}']`).remove();

    if (todoItems.length === 0) {
        firstLi.classList.remove("done");
    }
}

//Submit-event
const form = document.querySelector('.form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const input = document.querySelector('.todo-input');
    const text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        input.value = '';
        input.focus();
    }
    if (todoItems.length != 0) {
        firstLi.classList.add("done");
    }
});

//Done-event

ul.addEventListener('click', event => {
    console.log(event.target); // logs element that is clicked

    if (event.target.classList.contains('tick')) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }
    if (event.target.classList.contains('delete-todo')) {
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
    }
});

