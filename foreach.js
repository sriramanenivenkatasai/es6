let eids=[101,102,103,104,105]
eids.forEach(function(eid){
    console.log(eid)
})

let eid=[101,102,103,104,105]
eids.forEach((eid)=>{console.log(eid)})


let prod_prices=[11,22,33,44,55]
let new_prod_prices=[]
for(let price of prod_prices){
    new_prod_prices.push(price+2)
}
console.log(prod_prices)
console.log(new_prod_prices)

let prod_prices1=[1,2,3,4,5,6]
let new_prod_prices1= prod_prices1.map(price=>price+2)
console.log(prod_prices1)
console.log(new_prod_prices1)

let prod_prices3=[0,1,0,0,0,0]
let new_prod_prices3=prod_prices3.map(price=>price+2)
console.log(prod_prices3)
console.log(new_prod_prices3)

let eid1=[11,22,3,4]
eids.forEach((eid)=>{console.log(eid1)})


