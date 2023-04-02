const users = [
    {
        id: 1, name: 'abul', job: 'doctor'
    }
]
console.log(users[0].name);

//example2
//[] means array access like array index
//{} means object access like object
const data = {
    count: 50000,
    data: [{ id: 1, name: 'abul', job: 'doctor' }, { id: 1, name: 'babul', job: 'doctor' }]
}
console.log(data.data[1].name)

//example 3

const user = {
    id: 1,
    name: 'kabul',
    address: {
        vill: 'gazipur',
        po: 'joydebpur',
        city: 'dhaka',
        country: 'bangladesh'
    }
}

console.log(user.address.city)