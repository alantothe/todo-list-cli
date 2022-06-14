const prompt = require('prompt-sync')({sigint: true})


console.log("Welcome to the To-Do List Application!\n")

console.log("Select an action: ")
console.log("[1] Create to-do item")
console.log("[2] Complete to-do item")
console.log("[3] Exit the application")
let choice = Number(prompt("> "))

let items = [""]
let statusArray = [""]

while(choice !== 3){
    if(choice === 1){
        console.log("\nCreate a new item\n")
        
        let answer = prompt("Please enter an item: ")
        items.push(answer)
        statusArray.push(false)


        printList();
        selectChoice();
    } else if(choice === 2){

        if(statusArray.length > 1){

            console.log("\nSelect an item to complete\n")
            
            let indexChoice = Number(prompt("Enter a number: "))
            
            while(indexChoice > statusArray.length - 1 || indexChoice === 0 || isNaN(indexChoice)){    
                
                console.log("Please choose a number that corresponds to an item in the list.")
                indexChoice = Number(prompt("Enter a number: "))
            }

            if(statusArray[indexChoice] === false){
                    statusArray[indexChoice] = true
            }
        } else {
            console.log("No items in your to-do list.")
        }

        
        printList();
        selectChoice();
    } else {
        
        console.log("\nPlease choose a number between 1 and 3\n")

        selectChoice();
    }
}

// functions
function selectChoice(){
    console.log("Select an action: ")
    console.log("[1] Create to-do item")
    console.log("[2] Complete to-do item")
    console.log("[3] Exit the application")
    choice = Number(prompt("> "))
}

function printList(){
    console.log("\nCurrent To-Do list: ")
    let status = ""
    for(let i = 1; i < items.length; i++){
        if(statusArray[i] === false){
            status = "[incomplete] "
        } else if(statusArray[i] === true){
            status = "[complete] "
        }
        console.log(i + ". " + status + items[i])
    }
    console.log("")
}


