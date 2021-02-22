
let usersMap = new Map();

let user1 = { name: 'Natalie'},
    user2 = { name: 'Daniel'},
    user3 = { name: 'Tal'};

    console.log(usersMap.set(user1,5).set(user2,6).set(user3,7));

    for (let obj of usersMap)
    {
        console.log(obj[0].name + '-> ' + obj[1]);
    }


   