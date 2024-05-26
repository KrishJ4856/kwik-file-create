// Import the exec function from the child_process module
import { exec } from 'child_process';

// Function to execute the command
const runCommand = async(command, message) => {
  await exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
    if (message)
      console.log(message)
  });
}

export default runCommand