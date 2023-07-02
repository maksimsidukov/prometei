(() =>  {
    const inputs = document.querySelectorAll("input")
    inputs.forEach(input => {
        input.addEventListener('input', (ev) => {
            if (ev.target.value.length) {
                document.querySelector(`#${ev.target.id} + .input_label`).classList.add('input_label_active')
            } else {
                document.querySelector(`#${ev.target.id} + .input_label`).className = 'input_label'
            }
        })
    })

    document.addEventListener('scroll', (ev) => {
        const scrollTop = ev.target.scrollingElement.scrollTop
        const menu = document.querySelector('.menu_block')
        if (scrollTop > 75) {
            menu.style.backgroundColor = 'var(--blue)'
        } else {
            menu.style.backgroundColor = 'transparent'
        }
    })
})()