import {sep} from "path"

// function to add the system specific path separator to the path of the parent directory, in case it is absent
// eg: "./hello/world" will become "./hello/world/"
export const addSeparatorAtEnd = (path) => {
    const lastChar = path.charAt(path.length - 1)
    if(lastChar === "/" || lastChar != "\\"){
        path += sep
    }
    return path
}

// function to remove the system specific path separator at the start of the name, in case it is present
// eg: "/name.txt" will become "name.txt"
export const removeSeparatorfromStart = (name) => {
    if(name.charAt(0) === "/" || name.charAt(0) === "\\"){
        name = name.slice(1)
    }
    return name
}