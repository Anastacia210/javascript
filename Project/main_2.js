const params = (new URL(location)).searchParams;
const user = JSON.parse(params.get('user'));

document.write(`
<b>name:</b> ${user.name} <br/>
<b>email:</b>${user.email} <br/>
<b>phone:</b>${user.phone} <br/>
....<br/>
<button id="posts">show posts current user</button>
<hr/>`)

let button = document.getElementById('posts');
button.onclick = () => renderPosts(user.id);


function renderPosts(id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(value => value.json())
      .then(posts => {
        console.log(111)
        let postsBox = document.getElementsByClassName('posts-box')[0]
        for (const post of posts) {
          let divPost = document.createElement('div');
          let postDetailsBtn = document.createElement('button');

          divPost.innerText = `${post.title}`;
          postDetailsBtn.innerText = 'show post details';

          postDetailsBtn.onclick = () => location.href = `post-details.html?userId = ${post.id.toString()}`;

          // postDetailsBtn.innerHTML = `<form action="post-details.html" target="_blank">
          //     <button type="submit">Post of current user</button>
          // </form>`;

          postsBox.appendChild(divPost)
          divPost.appendChild(postDetailsBtn)
          document.body.appendChild(postsBox)
        }
      })
}
