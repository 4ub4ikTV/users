let div1 = document.createElement('div');
div1.classList.add('block')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const user of value) {
            let div = document.createElement('div');
            div.classList.add('block-users')
            let p = document.createElement('p');
            p.classList.add('users-id-name')
            p.innerText = `${user.id} -- ${user.name}`
            let a = document.createElement('a');
            a.classList.add('go-to')
            a.href = 'user-details.html?id=' + user.id
            let btn = document.createElement('button');
            btn.innerText = `Go to`
            a.append(btn)
            div.append(p, a)
            div1.appendChild(div)
            document.body.appendChild(div1)
        }
    })

document.addEventListener('mousemove', e => {
    w = window.innerWidth;
    h = window.innerHeight;
    x = Math.round(e.pageX / w * 100);
    y = Math.round(e.pageY / h * 100);
    document.body.style.background = `radial-gradient(at ${x}% ${y}%, #6b5ef7, #f75e5e)`;
});