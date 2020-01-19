var ul=document.querySelector('#loop');

let frutas=['banana','maca','limao'];

frutas.forEach(f => {
    let li=document.createElement('li');
    li.addEventListener('click', () => {
        li.classList.toggle('highlighted');
    })
    li.textContent=f;
    ul.appendChild(li);
});