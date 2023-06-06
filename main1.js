
let url = new URL(location.href);
let search = url.searchParams.get("id");
fetch('https://jsonplaceholder.typicode.com/users/' + search)
    .then(value => value.json())
    .then(value => {

        let mainDiv = document.createElement('div')
        mainDiv.classList.add('users-info')

        let div1 = document.createElement('div');
        div1.classList.add('block-users')

        for (const item in value) {

            let userDiv = document.createElement('div');
            userDiv.classList.add('user-div')

            if (typeof value[item] !== 'object') {

                userDiv.innerText = `${item} - ${value[item]}`
            } else {
                userDiv.innerText = `${item}:`

                for (const key in value[item]) {

                    let userInnerDiv = document.createElement('div');
                    userInnerDiv.classList.add('user-inner-div')

                    if (typeof value[item][key] !== 'object') {
                        userInnerDiv.innerText = `${key} - ${value[item][key]}`
                    } else {
                        userInnerDiv.innerText = `${key}:`

                        for (const element in value[item][key]) {
                            let htmlDivElement = document.createElement('div');
                            htmlDivElement.classList.add('html-div-element')
                            if (typeof value[item][key][element] !== 'object') {
                                htmlDivElement.innerText = `${element} - ${value[item][key][element]}`
                            }
                            userInnerDiv.appendChild(htmlDivElement)
                        }
                    }
                    userDiv.appendChild(userInnerDiv)
                }
            }
            div1.appendChild(userDiv)
        }
        let backButton = document.createElement('button');
        backButton.classList.add('back-button')
        backButton.innerText = 'Back';
        backButton.onclick = function () {
            history.back();
        };

        let forwardButton = document.createElement('button');
        forwardButton.classList.add('forward-button')
        forwardButton.innerText = 'Forward';
        forwardButton.onclick = function () {
            history.forward();
        };


        document.body.appendChild(backButton);
        document.body.appendChild(forwardButton);

        let btn = document.createElement('button');
        btn.classList.add('post-of-current-user')
        btn.innerText = 'Post of current user'
        btn.onclick = function () {
            fetch('https://jsonplaceholder.typicode.com/users/' + value.id + '/posts')
                .then(value => value.json())
                .then(value => {
                    let div2 = document.createElement('div');
                    div2.classList.add('block-posts')
                    for (const post of value) {
                        let div = document.createElement('div')
                        div.classList.add('posts-users')
                        let a = document.createElement('a');
                        a.classList.add('post')
                        a.href = 'post-details.html?id=' + post.id
                        a.innerText = post.title
                        div2.appendChild(div)
                        div.appendChild(a)
                        document.body.appendChild(div2)
                        btn.disabled = true
                    }
                })
        }
        mainDiv.append(div1, btn)
        document.body.appendChild(mainDiv)
    })

