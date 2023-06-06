let url = new URL(location.href);
let search = url.searchParams.get("id");

let backButon = document.createElement('button');
backButon.classList.add('back-buton')
backButon.innerText = 'Back';
backButon.onclick = function () {
    history.back();
};
document.body.appendChild(backButon);
fetch('https://jsonplaceholder.typicode.com/posts/' + search)
    .then(value => value.json())
    .then(value => {
        let div1 = document.createElement('div');
        div1.classList.add('block-post')
        for (const post in value) {
            let p = document.createElement('p');
            p.classList.add('info')
            p.innerText = `${post}: ${value[post]}`
            div1.appendChild(p)
            document.body.appendChild(div1)
        }

        fetch('https://jsonplaceholder.typicode.com/posts/' + value.id + '/comments')
            .then(value => value.json())
            .then(value => {
                let div2 = document.createElement('div');
                div2.classList.add('block-comment')
                for (const comment of value) {
                    let div = document.createElement('div');
                    div.classList.add('comment')
                    for (const commentElement in comment) {
                        let p = document.createElement('p');
                        p.innerText = `${commentElement}: ${comment[commentElement]}`
                        div2.appendChild(div)
                        div.appendChild(p)
                        document.body.appendChild(div2)
                    }
                }
            })
    })