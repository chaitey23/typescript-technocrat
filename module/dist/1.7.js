"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    // spread operator
    // rest operator
    // destructuring operator
    // learn spread operator
    const bros1 = ['gini', "mini", "tini"];
    const bros2 = ['ginia', "minia", "tinia"];
    bros1.push(...bros2);
    console.log(bros1);
    const mentors1 = {
        typescript: "mezba",
        nextjs: "hablu",
        redux: "bablu"
    };
    const mentors2 = {
        prisma: "lilu",
        cloud: "kallu",
        dbms: "jillu"
    };
    const mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
    console.log(mentorsList);
    // learn rest operator
    const greetFriends = (...friends) => {
        // console.log(`hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend) => console.log(`hi${friend}`));
    };
    greetFriends("laili", "baili", "kaili");
}
