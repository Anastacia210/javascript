fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
    let posBox = document.getElementsByClassName('post-coms')[0];
    for (const post of posts){
        let posComs = document.createElement('p');
        posComs.innerText = `${post.id} - ${post.body}`;
        let comsBtn = document.createElement('button');
        comsBtn.innerText = 'comments';
        comsBtn.onclick = function (){
            console.log('posts',post.id)

            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                .then(response => response.json())
                .then(comments => {
                    let cBox = document.getElementsByClassName('coms')[0];
                    cBox.innerHTML = '';
                    for (const comment of comments){
                        let liComs = document.createElement('li');
                        liComs.innerText = comment.body;
                        cBox.append(liComs)
                    }
                })
        }
        posComs.appendChild(comsBtn)
        posBox.appendChild(posComs)
    }
});