// Import DB and Model
const DB = require(__dirname + "/Database/Database");
const BookModel = require(__dirname + "/Models/Model");

// Ask user for page index
const readline = require("readline");
let Page_Index = 0;
const Num_Element_Per_Page = 3;
let Num_Skip_Element = 0;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout, // Output prompt for the user
});

const Display_Current_Page = async (Page_Index) => {
    try{
        let Num_Skip_Element = (Page_Index - 1) * Num_Element_Per_Page;
        // await !BACK!
        let result = await BookModel.find()
        .sort({ Price: 1 })
        .skip(Num_Skip_Element)
        .limit(Num_Element_Per_Page)
        .select({ _id: 0, Name: 1, Price: 1 });
        console.log("Page Index: ", Page_Index);
        console.log(result)
    }catch(error){
        console.log("Display_Current_Page() Failed.");
        console.log(error);
    }
}

DB(() => {
    // Prompt the user for page index
    rl.setPrompt("Please enter page index (From 1 to 4, or -1 to exit): ");
    rl.prompt();

    // Set event listener
    rl.on('line', async (input) => {
        console.log(`Received page index: ${input}`);

        if(input >= 1 && input <= 4){
            await Display_Current_Page(input);
        }else if(input == -1){
            console.log("Execution ended.");
            rl.close(); // Close readline
            return;
        }else{
            console.log("Pgae index out of range, please re-enter.");
            rl.prompt();
        }

        rl.prompt(); // Ask for input again
    }); 
});
