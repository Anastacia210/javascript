fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let usDiv = document.getElementsByClassName('users')[0];
        for (const user of users) {
            let mainU = document.createElement('h1')
            mainU.innerText = `${user.id} - ${user.name}`
            let postBtn = document.createElement('button');
            postBtn.innerText = 'Post';
            postBtn.onclick = function (){
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        let pBox = document.getElementsByClassName('posts')[0];
                        pBox.innerHTML = '';
                        for (const post of posts){
                            let poSt = document.createElement('p');
                            poSt.innerText = post.body;
                            let comBtn = document.createElement('button');
                            comBtn.innerText = 'Comment';
                            comBtn.onclick = function () {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(response => response.json())
                                    .then(comments => {
                                        let comBox = document.getElementsByClassName('comments')[0];
                                        comBox.innerHTML = '';
                                        for (const comment of comments){
                                            let comMent = document.createElement('li');
                                            comMent.innerText = comment.body;
                                            comBox.append(comMent);
                                        }
                                    })
                            }
                            poSt.appendChild(comBtn);
                            pBox.append(poSt);
                        }
                    })
            }
            usDiv.appendChild(mainU)
            mainU.appendChild(postBtn)
        }

    });
