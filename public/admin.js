async function admin () {
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    books.forEach(bookList)
};

function bookList(book) {
    let root = document.getElementById('root')

    let li = document.createElement('li')
        li.textContent = book.title

    let input = document.createElement('input')
        input.value = book.quantity

    let saveBtn = document.createElement('button')
        saveBtn.textContent = 'Save'

    saveBtn.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: input.value,
            }),
        })
    })

    li.append(input, saveBtn)
    root.append(li)

};

admin()