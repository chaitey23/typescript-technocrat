{
    // Type Alias
    type Student = {
        name: string;
        age: number;
        gender: string;
        address: string;
        contact?: string
    }
    const student1: Student = {
        name: "chaitey",
        age: 20,
        gender: "female",
        address: "rangpur",
        contact: "01999999999"
    }
    const student2: Student = {
        name: "mithe",
        age: 21,
        gender: "female",
        address: "dhaka"
    }
    const student3: Student = {
        name: "jui",
        age: 15,
        gender: "female",
        address: "ctg"
    }
    type UserName = string;
    type IsAdmin = boolean;
    const userName: UserName = "chaitey"
    const isAdmin: IsAdmin = true
    type Add = (num1: number, num2: number) => number
    const add: Add = (num1, num2) => num1 + num2


    // 
}