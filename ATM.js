#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let pinCode = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "enter you pincode",
});
console.log(pinAnswer.pin);
if (pinAnswer.pin === pinCode) {
    console.log("Correct pinCode");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select one option",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter your amount"
            }
        ]);
        myBalance -= amountAnswer.amount;
        console.log("your remaining balance is:" + myBalance);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("your balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect pinCode");
}
