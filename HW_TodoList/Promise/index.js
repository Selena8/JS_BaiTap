function $(selector) {
    return document.querySelector(selector)
}
function fetchData(callback) {
    axios.get("https://63ca1fbfd0ab64be2b4cb971.mockapi.io/M_ApiTodo/Todo_Item")
        .then(function(response){
            return response.data;
        })
        .then(callback);
}


function li_todoList(item) {
    const li_item = document.createElement('li')
    li_item.className = 'todo-item'
    li_item.id = item.id
    const div = document.createElement('div')
    div.className = 'view'
    const input = document.createElement('input')
    input.type = 'checkbox'
    if(item.status === 'completed') input.checked = true
    input.addEventListener('change', function() {
        try {
            let data = {}
            if(input.checked) {
                data = {
                    "id": item.id,
                    "name" : item.name,
                    "status" : 'completed'
                }
            } else {
                data = {
                    "id": item.id,
                    "name" : item.name,
                    "status" : 'active'
                }
            }
            handleUpdateTodoJob(data)
        } catch (error) {
            alert(error)
        }
    })
    const inputText = document.createElement('input')
    inputText.type = 'text'
    inputText.value = item.name
    inputText.style.display = 'none'
    inputText.addEventListener('blur', () => {
        inputText.style.display = 'none'
        div.style.display = 'flex'
    })
    inputText.addEventListener('keydown', async function (e) {
        try {
            const data = {
                "id": item.id,
                "name" : inputText.value,
                "status" : item.status
            }
            if(e.keyCode  === 13) {
                e.preventDefault()
                handleUpdateTodoJob(data)
                inputText.style.display = 'none'
                label.innerText = inputText.value
                div.style.display = 'flex'
            }
        } catch (error) {
            alert(error)
        }
    })
    const label = document.createElement('label')
    label.innerText = item.name
    label.addEventListener('dblclick', () => {
        inputText.style.display = 'block'
        inputText.focus()
        div.style.display = 'none'
    })
    const button = document.createElement('button')
    button.className = 'del'
    button.addEventListener('click', function() {
        try {
            const ul_todoItems = $('.Todo_Items')

            handleDeleteTodoJob(item.id)
    
            const liRemove = document.getElementById(`${item.id}`)
    
            ul_todoItems.removeChild(liRemove)
        } catch (error) {
            alert(error);
        }
    
    })
    div.appendChild(input)
    div.appendChild(label)
    div.appendChild(button)
    li_item.appendChild(div)
    li_item.appendChild(inputText)
    return li_item
}

function filterJobs(items) {
    const todoItems = items.filter(item => item.status === 'active')
    const doneItems = items.filter(item => item.status === 'completed')

    return [items, todoItems, doneItems]
}

function showJobs(todoItems) {
    const ul_todoItems = $('.Todo_Items')
    let child = ul_todoItems.lastElementChild;
    while (child) {
        ul_todoItems.removeChild(child);
        child = ul_todoItems.lastElementChild;
    }
    
    todoItems.map(item => {
        ul_todoItems.appendChild(li_todoList(item))
    })
}
function handleCreateTodoJob(data, callback) {
    let res = axios({
        method: 'post',
        url: "https://63ca1fbfd0ab64be2b4cb971.mockapi.io/M_ApiTodo/Todo_Item" ,
        data: data
    })
    .then(function(response) {
        response.data;
    })
    .then(callback);
}

$('#input-name').addEventListener('keydown', function(e) {
    try {
        const inputJob = $('#input-name').value;
        const data = {
            "name" : inputJob,
            "status" : 'active'
        }
        if(e.keyCode  === 13) {
            e.preventDefault()
            handleCreateTodoJob(data, function() {
                fetchData(showJobs)
                $('#input-name').value = ''
            })
        }
    } catch (error) {
        alert(error);
    }
})

const filtestatus = document.querySelectorAll('.status_filter li')
filtestatus.forEach((item, index) => {
    item.addEventListener('click', function() {
        let itemSelecteds = document.querySelectorAll('.status_filter li.selected')
        itemSelecteds.forEach(itemSelected => itemSelected.classList.remove('selected'))
        item.classList.add('selected')
        fetchData(function(todoItems) {
            let itemStatus = filterJobs(todoItems)
            showJobs(itemStatus[index])
        })
    })
})
function handleDeleteTodoJob(id) {
    try {
        let options = axios({
            method: 'DELETE',
            url: `https://63ca1fbfd0ab64be2b4cb971.mockapi.io/M_ApiTodo/Todo_Item/${id}`,
            data: {
                id: id
            }
          })
        .then(function(response) {
            response.data;
        })
        .then(function() {
            const liRemove = document.getElementById(`${id}`)
            liRemove.remove()
        });
    } catch (error) {
        console.log(error)
    }
}
function handleUpdateTodoJob(data) {
    try {
        let options = axios({
            method: 'PUT',
            url: `https://63ca1fbfd0ab64be2b4cb971.mockapi.io/M_ApiTodo/Todo_Item/${data.id}`,
            data: data
          })
        .then(function(response) {
            response.data;
        });
    } catch (error) {
        console.log(error)
    }
}
function main() {
    try {
        fetchData(showJobs)
    } catch (error) {
        alert("Loading failed")
    } finally {
    }

}
main()