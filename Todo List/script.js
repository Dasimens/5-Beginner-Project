let items = []

const itemDiv = document.getElementById("items")

const inputField = document.getElementById("itemInput")
const todoItems = "todoItems"


function renderItems() {
    itemDiv.innerHTML = null;

    for (const [index, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.style.marginLeft = "10px"
        deleteButton.onclick = () => removeItem(index)
        container.appendChild(text)
        container.appendChild(deleteButton)

        itemDiv.appendChild(container)
    }
}

function loadItems() {
    const storedItems = localStorage.getItem("todoItems")
    if (storedItems) items = JSON.parse(storedItems)

}

function saveItems() {
    const stringifiedItems = JSON.stringify(items)
    localStorage.setItem("todoItems", stringifiedItems)
}



function addItem(text) {
    const value = inputField.value;
    if (!value) {
        alert("Please enter a task.")
        return
    }
    items.push(value)
    renderItems()
    inputField.value = ""
    saveItems()
}


function removeItem(index) {
    items.splice(index, 1)
    renderItems()
    saveItems()
}

Document.addEventListener("DOMContentLoaded", loadItems)