import * as nodePath from "path"
import fs from "fs"
import runCommand from "./runCommand.js"

// Function to create the parent folders of the file if they do not exist
// for eg: if the folder "public/home" doesnt exist in the path="public/home/index.js", it creates them
const createMissingFolders = (path) => {
    const dirname = nodePath.dirname(path) // get the dirname of the path provided
    // if the "dirname" doesnt exist, we create it using mkdir -p
    if(fs.existsSync(dirname) === false){
        runCommand(`mkdir -p ${dirname}`)
    }
}

export default createMissingFolders