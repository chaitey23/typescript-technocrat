{
    const user = {
        id: 1234,
        name: {
            firstName: "jannatul",
            middleName: "ferdouse",
            lastName: "chaitey"
        },
        contact: "01900000000",
        address: "uganda"
    }
    const { address, name: { lastName } } = user;

    const myFriends = ["lalu", "balu",
        "kalu", "jhillu"
    ]
    const [a, b, bestFriend] = myFriends;
}