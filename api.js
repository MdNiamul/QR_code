// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })

// const loadData = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })
// }

// const hanldedata = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         display(data)
//     })
// }

// const display = (ami) => {
//     console.log(ami[0])
// }

const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => showUser(data))
     
}

// const showUser = (users) => {
//     for (let i=0; i<users.length; i++){
//         const user = users[i];
//         console.log(user);
//     }
// }
const showUser = (users) => {
    for(const user of users){
        console.log(user);
    }
}