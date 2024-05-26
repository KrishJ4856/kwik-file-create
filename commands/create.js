import { input } from "@inquirer/prompts"
import chalk from "chalk"
import { addSeparatorAtEnd, removeSeparatorfromStart } from "../utils/separator.js"
import runCommand from "../utils/runCommand.js"
import createMissingFolders from "../utils/createMissingFolders.js"

const create = async(path, options) => {
    try {
        let {
            extension, // this is the file extension of the file(s) to be created <string>
            directory, // this indicates that folder must be created instead of file <boolean>
        } = options
    
        // Defaults
        let toBeMade = "files" // variable which can contain either "files" or "folders"
        let command = "touch " // basic command to be executed
    
        if(directory){
            // Check for the case when both --directory and --extension flags are present together
            if(extension){
                console.log(
                    chalk.redBright("You can't have extensions when creating directories!")
                )
                process.exit(0)
            } else {
                // changing the defaults in case "directory" is set to true
                toBeMade = "folders"
                command = "mkdir -p "
            }
        }
    
        // Editing the parent folder's path
        path = path.trim()
        path = addSeparatorAtEnd(path)
    
        // End Signal
        const endSignal = "END"
    
        console.log(
            chalk.greenBright(
                `Please start entering the names of the ${toBeMade} one at a time, for example: ${toBeMade === "files" ? "index.html" : "controllers"}. Once you are done, type ${endSignal} and hit Enter.`
            )
        )
    
        let counter = 0 // Counter to count the number of inputs from the user
        
        while(true){
            let name = await input({
                message: `Enter name of the ${toBeMade.slice(0, toBeMade.length - 1)}: `,
                validate: (value) => {
                    if(value.trim() === ""){
                        return 'Please enter a name.'
                    } else {
                        return true
                    }
                }
            })
    
            counter++ // Incrementing the counter
    
            if(name === endSignal){
                if(counter === 1){
                    process.exit(1) // Check if the first input itself is END
                } else {
                    break
                }
            } else {
                // Checking the name logic
                name = name.trim()
                name = removeSeparatorfromStart(name)
                
                // Adding extension to the name of the file
                if(extension){
                    extension = extension.trim()
                    if(extension.charAt(0) != '.'){
                        extension = '.' + extension // adding dot (.) in case it is absent in the extension
                    }
                    name += extension
                }
    
                const fullPath = path + name + " "
    
                if(toBeMade === "files"){
                    createMissingFolders(fullPath)
                }
    
                command += fullPath
            }
        }
    
        // Executing the command
        await runCommand(command, `Successfully created your ${toBeMade}!`)

    } catch (error) {
        if(error && error.message && error.message.startsWith('User force closed the prompt')){
            // eat 5star, do nothing
        }
        else{
            console.log("Something went wrong! \n", error)
        }
    }
}

export default create