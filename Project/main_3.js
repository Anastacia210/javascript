fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        let commentsBox = document.getElementsByClassName('comments-box')[0]
        for (const comment of comments) {
            let pComment = document.createElement('p');
            pComment.innerText = `${comment.body}`;
            commentsBox.appendChild(pComment)
        }

    });