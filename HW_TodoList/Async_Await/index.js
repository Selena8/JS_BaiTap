function $(selector) {
    return document.querySelector(selector)
}

async function fetchData() {
    const { data } = await axios.get("https://63ca1fbfd0ab64be2b4cb971.mockapi.io/M_ApiTodo/Todo_Item")
    return data
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
    input.addEventListener('change', async function() {
        try {
            let data = {}
            if(input.checked) {
                data = {
                    "name" : item.name,
                    "status" : 'completed'
                }
            } else {
                data = {
                    "name" : item.name,
                    "status" : 'active'
                }
            }
            const res = await axios.put(`https://63ca1fbfd0ab64be2b4cb971.mockapi.io/M_ApiTodo/Todo_Item/${item.id}`, data);
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
                "name" : inputText.value,
                "status" : item.status
            }
            if(e.keyCode  === 13) {
                e.preventDefault()
                const res = await axios.put(`https://63ca1fbfd0ab64be2b4cb971.mockapi.io/M_ApiTodo/Todo_Item/${item.id}`, data);
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
    button.addEventListener('click', async function() {
        try {
            const ul_todoItems = $('.Todo_Items')

            const res = await axios.delete(`https://63ca1fbfd0ab64be2b4cb971.mockapi.io/M_ApiTodo/Todo_Item/${item.id}`);
    
            const liRemove = document.getElementById(`${item.id}`)
    
            ul_todoItems.removeChild(liRemove)
        } catch (error) {
            alert(error);
        }
    
    })
    div.appendChild(input)
    li_item.appendChild(div)
    li_item.appendChild(inputText)
    div.appendChild(label)
    div.appendChild(button)
    return li_item
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

$('#input-name').addEventListener('keydown', async function(e) {
    try {
        const inputJob = $('#input-name').value;
        const ul_todoItems = $('.Todo_Items')

        const data = {
            "name" : inputJob,
            "status" : 'active'
        }
    
        if(e.keyCode  === 13) {
            e.preventDefault()
            const res = await axios.post("https://63ca1fbfd0ab64be2b4cb971.mockapi.io/M_ApiTodo/Todo_Item", data)
            ul_todoItems.appendChild(li_todoList(data))
            $('#input-name').value = ''
        }
    } catch (error) {
        alert(error);
    }
})
function filterJobs(items) {
    const todoItems = items.filter(item => item.status === 'active')
    const doneItems = items.filter(item => item.status === 'completed')

    return [items, todoItems, doneItems]
}

const filtestatus = document.querySelectorAll('.status_filter li')
filtestatus.forEach((item, index) => {
    item.addEventListener('click', async function() {
        const items = await fetchData()
        const itemsFilter = filterJobs(items)
        let itemSelecteds = document.querySelectorAll('.status_filter li.selected')
        itemSelecteds.forEach(itemSelected => itemSelected.classList.remove('selected'))
        item.classList.add('selected')
        showJobs(itemsFilter[index])
    })
})
async function main() {
    try {
        const items = await fetchData()
        showJobs(items)
    } catch (error) {
        alert("Loading failed")
    } finally {
    }

}
main()