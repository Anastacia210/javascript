fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(users => {
        let usersComment = document.getElementsByClassName('comments-box')[0];
        for (const user of users) {
            let comUser = document.createElement('p');
            comUser.innerText = `${user.id} - ${user.body}`;
            let detailsBtn = document.createElement('button');
            detailsBtn.innerText = 'comment';
            detailsBtn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${user.body}`)
                    .then(value => value.json())
                    .then(value => {
                        console.log(value);
                    });
            };
            comUser.appendChild(detailsBtn);
            usersComment.appendChild(comUser);
        };})