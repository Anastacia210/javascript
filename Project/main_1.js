fetch('https://jsonplaceholder.typicode.com/users')

    .then(response => response.json())
    .then(users => {

        let usersBox = document.getElementsByClassName('users-box')[0]
        for (const user of users) {
            let divUser = document.createElement('div');
            divUser.innerText = `${user.id} - ${user.name}`;
            let detailsBtn = document.createElement('button');

            // detailsBtn.innerHTML = `<form action="user-details.html" target="_blank">
            //     <button type="submit">Details</button>
            // </form>`;

            detailsBtn.innerText = 'Details';
            detailsBtn.onclick = function (){
                location.href = `user-details.html?userId = ${JSON.stringify(user)}`;
            };


            usersBox.appendChild(divUser)
            divUser.appendChild(detailsBtn)
        }
    });








