# kwik-file-create

This is a cli tool to create and delete many files quickly and easily using the terminal.

## Installation

```sh
npm install -g kwik-file-create
```

## Usage

There are 2 commands you can use. 
### The first one is:

```kfc create <string>```: This command accepts a path to a parent directory in which the sub files will be created. In case the path provided doesn't exist, it automatically creates it. Once you run this command, you will be prompted to enter the name of the files which you want to create. Once you are done, you can end the prompting process by typing ```END```

For example: 
```sh
kfc create ./public

Please start entering the names of the files one at a time, for example: index.html. Once you are done, type END and hit Enter.
? Enter name of the file:  octopus.txt
? Enter name of the file:  fish.txt
? Enter name of the file:  whales.txt
? Enter name of the file:  sharks.txt
? Enter name of the file:  END

Successfully created your files!
```

Note that here we are creating multiple files of the same extension, i.e, ```.txt```. You can skip adding the same extension to every file name by making use of the ```-e``` or ```--extension``` flag, like this:

```sh
kfc create ./public --extension .txt

Please start entering the names of the files one at a time, for example: index.html. Once you are done, type END and hit Enter.
? Enter name of the file:  octopus
? Enter name of the file:  fish
? Enter name of the file:  whales
? Enter name of the file:  sharks
? Enter name of the file:  END

Successfully created your files!
```

If you want to create directories/folders instead of files, you can make use of the ```-d``` or ```--directory``` flag, like this: 

```sh
kfc create ./greetings --directory

Please start entering the names of the folders one at a time, for example: controllers. Once you are done, type END and hit Enter.
? Enter name of the folder:  namaste
? Enter name of the folder:  namaskaram
? Enter name of the folder:  hola
? Enter name of the folder:  hello/hii
? Enter name of the folder:  hello/world
? Enter name of the folder:  END

Successfully created your folders!
```

This is what the ```./greetings``` folder looks like:

```sh
ls ./greetings

hello  hola  namaskaram  namaste

ls ./greetings/hello

hii  world
```

### The second command is:

```kfc remove <string>```: This command accepts a path to a parent directory from which files and directories will be deleted. Once you have entered the path, it lists down all the files and folders present there. To navigate to the files, use the arrow keys and select them by pressing the spacebar. Once you have selected the files and directories which are to be deleted, press Enter.

```sh
kfc remove ./greetings

? Select the files/directories you want to delete: (Press <space> to select, <a>
to toggle all, <i> to invert selection, and <enter> to proceed)
❯◯ hello (directory)
 ◯ hola (directory)
 ◯ namaskaram (directory)
 ◯ namaste (directory)

# After selecting and pressing enter:

? Select the files/directories you want to delete: hello (directory), hola
(directory)
? The selected files/directories will be deleted. Go ahead? (Y/n) yes
```

Here we are deleting the ```hello``` and ```hola``` directory which lie inside ```./greetings```. This is what the ```./greetings``` folder looks like: 

```sh
ls ./greetings

namaskaram  namaste
```

## Connect With Me

If you found this package helpful, do give it a star on GitHub. You can connect with me on Twitter/X - [@Krish4856](https://x.com/Krish4856)
