function handleModal() {
    const openDialogs = document.querySelectorAll('.default__button')
    const dialogBox = document.querySelector('#modalController')

    openDialogs.forEach(button => {
        button.addEventListener('click', (event) => {
            dialogBox.showModal()
        })
    })
}

handleModal()


function closeModal(){
    const close = document.getElementById('modalClose')
    const dialogBox = document.querySelector('#modalController')

   close.addEventListener('click', () => {
        dialogBox.close()
    })
}

closeModal()