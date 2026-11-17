//  Arrays

/* const a= Array.of(0,1,2,3,4,5,6,7)
console.log(a)

const a1= Array.from('String')
console.log(a1)

const a3 =[1,2,3]
const a4= a3.shift(1)
console.log(a4)
a3.unshift(4,5,6)
console.log(a3) */

console.log('----Orders------>')
const orders =[
{dish:'pasta',price :600, qty:2},
{dish:'Biryani',price :250, qty:5},
{dish:'Chicken Starters',price :400, qty:6},
]

orders.forEach((order,index)=>{
console.log(`${index+1}  :  ${order.dish} :  ${order.qty}`)

})

//  Maps

const receipt =orders.map((o=>`${o.dish} : ${o.price *o.qty}`
    ))
   console.log(receipt);


//     FILTERS

console.log('--------Filters------->')
const price =orders.filter(o=>o.price<=400)
console.log(price)

    