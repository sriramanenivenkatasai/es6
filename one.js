let eids=[101,102,103,104,105]
let uids=eids.map((eid)=>{
    return eid;
})
console.log(uids)

let emp={
    eid:102,
    ename:"sai",
    email:"sai22@gmail.com",
}
let details={
    email:"sai22@gmail.com",
    address:"hyd",
    avail:true
}
let emp_Details={...emp,...details}
console.log(emp_Details)