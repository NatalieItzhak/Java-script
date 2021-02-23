const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];
const allUsers = document.querySelector('.users');

const oL = document.createElement("ol");

users.forEach((user) => {
    const li = document.createElement("li")
    li.textContent = user.firstName + ' ' + user.lastName;
    li.setAttribute('data-id', user.id)
    oL.append(li)
    console.log(li)
})

oL.style.listStyleType = 'none';

allUsers.append(oL)
