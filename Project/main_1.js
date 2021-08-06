fetch('https://jsonplaceholder.typicode.com/users')

    .then(response => response.json())
    .then(users => {
        let usersBox = document.getElementsByClassName('users-box')[0]
        for (const user of users) {
            let divUser = document.createElement('div');
            let detailsBtn = document.createElement('button');

            divUser.innerText = `${user.id} - ${user.name}`;
            detailsBtn.innerText = 'show info';
            detailsBtn.onclick = () => location.href = `user-details.html?user=${JSON.stringify(user)}`;

            usersBox.appendChild(divUser)
            divUser.appendChild(detailsBtn)
        }
    });








