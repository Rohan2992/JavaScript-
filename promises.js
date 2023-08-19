//jshint esversion:8

const posts = [
    { title: 'Post One', body: 'This is  Post One' },
    { title: 'Post Two', body: 'This is  Post Two' }
];

// function to get Posts from the server - 2min
function getPosts() {
    setTimeout(() => {
        var output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 2000);
}

// function to create post in the server
// custom promises takes 2 minutes to complete
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            let error = false;
            if (!error) {
                resolve("I am inside the resolve block....");
            } else {
                reject("I am not inside the reject block...");
            }
        }, 2000);
    });
}


createPost({ title: 'Post Three', body: 'This is  Post Three' }).then((msg) => {
    console.log(msg);
    getPosts();
}).catch((err) => {
    console.error(err);
});


//.all in js
const Promise1 = Promise.resolve("I am Promise 1");
const Promise2 = Promise.resolve("I am Promise 2");
const Promise3 = new Promise((resolve) => {
    setTimeout(resolve, 2000, 'Goodbye');

    // setTimeout(() => {
    //     resolve('Goodbye');
    // }, 2000);
});

const Promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

Promise.all([Promise1, Promise2, Promise3, Promise4]).then((values) =>
    console.log(values))
    .catch((values) => {
        console.log(values + " inside catch block");
    });


// Async and Await functions
async function init() {
    // await createPost({ title: 'Post Three', body: 'This is  Post Three' });
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const toJson = await response.json();
    console.log(toJson);
}

init();

console.log('after create post');

// Get the data received from the fetch operation.

function req1() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response =>  response.json())
        .then(json => {
            console.log(json);
            // json.forEach((js) => console.log(js.body));
        });
}

req1();

async function getData() {
    const Fetch = await fetch('https://dummyjson.com/products');

    const arr = await Fetch.json();

    const products = arr.products;
    products.forEach((product) => { console.log(product.title); });
    console.log(arr.products);
}

getData();


const cart = ["t-shirt", "Kurta", "Jeans"];

function createOrder(cart, callback) {
  console.log("Creating order");
  console.log(JSON.stringify(cart));
  callback("12345");
}

function proceedToPayment(orderId, callback) {
  console.log("Proceeding to payment for : " + orderId);
  callback("2,50,000");
}

function showOrderSummary(paymentInfo, callback) {
  console.log("order summary for : $" + paymentInfo);
  callback("15,00,000");
}

function updateWalletBalance(balance) {
  console.log("Updated wallet balance : " + balance);
}

createOrder(cart, function(orderId) {
  proceedToPayment(orderId, function(paymentInfo) {
    showOrderSummary(paymentInfo, function(balance) {
      updateWalletBalance(balance);
    });
  });
});
