{
    // spread operator
    // rest operator
    // destructuring operator


    // learn spread operator
    const bros1: string[] = ['gini', "mini", "tini"]
    const bros2: string[] = ['ginia', "minia", "tinia"]
    bros1.push(...bros2)

    console.log(bros1);
    const mentors1 = {
        typescript: "mezba",
        nextjs: "hablu",
        redux: "bablu"
    }
    const mentors2 = {
        prisma: "lilu",
        cloud: "kallu",
        dbms: "jillu"
    }
    const mentorsList = {
        ...mentors1,
        ...mentors2
    }
    console.log(mentorsList);

    // learn rest operator
    const greetFriends = (...friends: string[]) => {
        // console.log(`hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend: string) => console.log(`hi ${friend}`)
        )
    }
    greetFriends("laili", "baili", "kaili")
}