import fs from "fs"
import { checkbox, confirm } from "@inquirer/prompts"
import runCommand from "../utils/runCommand.js"

const remove = async (path) => {
    try {
        const files = fs.readdirSync(path, {withFileTypes: true}) // Reading the contents of the folder whose path is provided
        // since withFileTypes returns Dirent objects, we need to map a few properties out of them
        const filesArr = files.map((file) => {
            return {
                name: file.name,
                path: (file.parentPath + "/" + file.name),
                isDirectory: file.isDirectory()
            }
        })

        // Prompting the user to select files/directories which are to be deleted
        const answers = await checkbox({
            message: "Select the files/directories you want to delete:",
            choices: filesArr.map(choice => {
                // adding directory/file at the end of the name to be displayed
                if(choice.isDirectory){
                    choice.name += " (directory)"
                } else {
                    choice.name += " (file)"
                }
                return {
                    name: choice.name,
                    value: choice.path,
                    checked: false
                }
            })
        })

        let command = "rm -rf " // Basic command to be executed
        answers.forEach(answer => {
            command += answer + " " // concatenating the path(s) with the command
        })

        // Confirmation messafe
        const isConfirmed = await confirm({message: "The selected files/directories will be deleted. Go ahead?"})
        if (isConfirmed)
            await runCommand(command, "Deleted Successfully!") // executing the command

    } catch (error) {
        console.log("Something went wrong! \n", error)
    }
}

export default remove