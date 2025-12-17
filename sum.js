// 

// const result = sum(10,20);
// console.log(result);

// const sum2 = function(num1,num2){
//     return num1 + num2;
// }
// console.log(sum2(10,40));
// const sum2=()=> num1 = num2;
// console.log(sum2);
// const sum2 = (num1, num2) => {
//     return num1 + num2;
// };

// console.log(sum2(30,90));

// const test=()=> console.log("hello world");
// const squre = x => x*x;
// console.log(squre(10));

// const sum=(num1,num2) => num1+ num2;

// const friends = ['ami', 'tmi', 'heyana'];
// const newArray = ['niaml', ...friends];
// console.log(newArray);


// const numbers = [1,2,69,58,47,69,34,35,14,3,74,9,416,];
// console.log(Math.min(...numbers));

// const newArray =  SVGAnimatedNumberList.map()''

// const products = [
//     {id: 1, name: "iphone", color: "gold", price: 10000, brand: "apple"},
//     {id: 2, name: "iphone", color: "black", price: 1000, brand: "Symphony"},
//     {id: 3, name: "iphone", color: "orange", price: 200, brand: "finix"},
//     {id: 4, name: "iphone", color: "Yellow", price: 9000, brand: "Vivo"},
//     {id: 5, name: "iphone", color: "semi-gold", price: 69100, brand: "oppo"},
//     {id: 6, name: "iphone", color: "Silver", price: 10020, brand: "samsung"},
// ];

// const newProducts = products.map(p=> {
//     if(p.brand === "apple"){
//         p.price = p.price + 100;
//     }
//     return p;
// });

// console.log(newProducts);

// products.forEach(product => {
//     if(product.brand=='apple'){
//         console.log(product)
//     }
    
// });

// const singleProducts = products.find(p=>p.id===3);
// console.log(singleProducts);

// class product{

// }
// function sum(a,b,c){
//     console.log(arguments)
// }

// sum(10,20,30,40,50);
// console.log(typeof sum);

// let name = 'masud';
// function test(text){
//     console.log(text)
// }
// test(name);

const person={name: "niamul",  age: 18}

function sum(obj){
    obj.name = "hero Alom"
}

sum(person);
console.log(person);