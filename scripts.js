const buttones = document.querySelectorAll('.btn')
const result  = document.getElementById('result')

buttones.forEach((buton) => {
    buton.addEventListener('click', (e) => {
result.textContent += e.target.id
    })
})

equal.addEventListener('click', () => {
    result.textContent = eval(result.textContent);
})

clear.addEventListener('click' ,() => {
    result.textContent = ""
})
