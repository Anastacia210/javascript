fetch(`https://jsonplaceholder.typicode.com/users/${post.id}/posts`)
    .then(value => value.json())
    .then(posts => {
        let postsBox = document.getElementsByClassName('posts-box')[0]
        for (const post of posts) {
            let divPost = document.createElement('div');
            divPost.innerText = `${post.title}`;
            let postDetailsBtn = document.createElement('button');
            postDetailsBtn.onclick = () => location.href = `post-details.html?userId = ${post.id.toString()}`;
            const params = (new URL(location)).searchParams;

            // postDetailsBtn.innerHTML = `<form action="post-details.html" target="_blank">
            //     <button type="submit">Post of current user</button>
            // </form>`;

            postsBox.appendChild(divPost)
            divPost.appendChild(postDetailsBtn)
        }
    })