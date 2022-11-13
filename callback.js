//jshint esversion:6

const posts = [
    { title: 'Post One', body: 'This is  Post One' },
    { title: 'Post Two', body: 'This is  Post Two' }
];

// function to get Posts from the server
function getPosts() {
    setTimeout(() => {
        var output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// function to create post in the server
function createPost(post, cb) {
    setTimeout(() => {
        posts.push(post);
        cb();
    }, 2000);
}

//function call
createPost({ title: 'Post Three', body: 'This is  Post Three' }, getPosts);
