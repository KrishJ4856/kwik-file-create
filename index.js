#!/usr/bin/env node
import create from "./commands/create.js" 
import remove from "./commands/remove.js"

import {Command} from "commander"
const program = new Command()

program
.name("kfc")
.description("CLI to create multiple files easily!")
.version("1.0.0")

program
.command("create")
.description("Creates new files at the path provided")
.option("-d, --directory", "flag to create directory instead of file", false)
.argument("<string>", "path where the files will be created")
.option("-e, --extension <string>", "extension for all files")
.action(create)

program
.command("remove")
.description("Remove the files and directories at the path provided")
.argument("<string>", "path from where the files and directories will be removed")
.action(remove)

program.parse()