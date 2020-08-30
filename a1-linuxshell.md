

# Appendix A- Using the Linux Shell

## The Basic Commands

Of note, while the majority of these commands should be available on nearly any unix system you may use, many of the alternate recommendations may not be.

- **man** "man [command/topic]", ex, "man ascii", bring up an indepth manual page for a given command/topic.
  - Alternative recommendation: **tldr**, actually digestible and much faster when it gives enough info 
- **pwd** - Print working directory - literally just a command to tell you the file path to where you are
- **ls** - list - list the files/folders in the current directory, lots of flags available
  - Alternative recommendation: **exa** 
- **cd** - change directory, if you can't use this may god have mercy
  - Alternative recommendation: **j (for autojump)** 
- **mv** - move (or rename) a file to a new location (or name)
  - Alternative recommendation: **rsync**
- **rm** - remove a file/folder
- **touch** - create an empty file, or change last accessed time of existing file
- **mkdir & rmdir** - make or remove an empty directory (folder)
- **cat** - output the contents of a file
  - Alternative recommendation: **bat**, **less**, **more**, **fltrdr**, or an editor like **vim** or **nano** 
- **date** - output current date and time
- **chmod & chown** - change a file or folders permissions or owner
- **ln** - make a symbolic / hard link (shortcut)
- **du & df** - Disk usage and disk free, **df** will show you how much room you have left per disk, **du** serves to help find what's using up your disk
  - Alternative recommendation: **ncdu** doesn't suck. 
- **clear** - clear the screen of text- (only use in scripts)
  - Alternative recommendation: **ctrl + l** , much faster
- **passwd** - change a users password
- **sudo & su** - run a command as another user, typically root
- **head & tail** - print a number of lines from the top or bottom of a file
- **tee** - mostly used with pipes to print output to terminal as well as put it into a file
- **grep, sed, awk, tr** - the 'big four' commands used for text processing in a terminal. **grep** (and **egrep**) are used for search, for example running `ls | grep myfile` to confirm a file is indeed in a folder. **sed** is used for text/character replacement. **awk** is a programming language in it's own right, used primarily for selecting text fields by separator, for example only printing the permissions column in the output of `ls -l` 
- **w** -  show who is currently logged in and what they're running, epically applicable on shared servers if you need to see if there's an active ssh connection to your system
- **tar, gzip, bzip, zip** - all used for making compressed folders (like .zip files)
- **ssh , scp, ftp** - used for doing remote access, letting you run commands on one system from another
- **diff** - show the differences between two files
- **sort** - sort input by a number of criteria
- **uniq** - remove duplicate entries
  - **fdupes** is recommended if the goal is to identify duplicate files 
- **export** - used to set environment variables, these for example use `export EDITOR=nano` to use nano as your terminal text viewer by default.
- **systemctl** - literally system control, wayyy to big to cover quickly, used for everything from setting services to run on boot, shutting down/restarting the system, to viewing logs. Look up Systemd for more information
- **ip, ping, & dig** - **ip** is used to view as well as modify aspects of network configuration at the more hardware-level, such as turning on/off a networking interface.  **ping** allows you to see if you're able to reach a site/ip address, and **dig** allows you to check if you're able to turn a domain name to an ip, such as checking the ip address that archlinux.org points to with `dig archlinux.org`
- **ps** - process management: listing processing, finding the parent of a particular process, etc. 
- **free** - display information about system RAM usage
- **top** - a graphical-ish view of the running processes, ram, and CPU usage
  - Alternative recommendation: **htop**
- **kill**, murder a process in various ways
- **whereis** - find the location of an executable, ex `whereis ls` will tell you it's in `/usr/bin/ls`
- **wget, curl** - retrieve a web page
  - Alternative recommendation: **lynx**, **w3m**

## Tab Completion and faster navigation

Probably the most useful shortcut for using the shell is tab completion. This is used when you need to type a really long command or chain of commands, say I want to run ncmpcpp, a name that is both long and hard to remember, instead of just typing the full name I can type `ncm` and press tab, and ta-da suddenly the full name is inserted. If you happen to have another package that has multiple possible endings say you want to run ``lstopo`` but you have `ls, lsusb, lstopo` all on your system, most shells will display a menu underneath with all the possible options. This is nice for commands, but the true power comes in file names, say I want to run `cat /etc/pacman.d/mirrorlist` while that's not too awful to type out, you could easily type `cat /e` press tab, get `cat /etc/` add pac to get `cat /etc/pac` press tab, get `cat /etc/pacman.d/` type mir and tab and get the full command, while that sounds complicated it actually speeds using the command line up rather significantly and prevents spelling mistakes

Next up for navigation is directory shortcuts, these can be massive time savers, the most obvious is `~` which is just short hand for the location of the current shell users home directory, so in my case `~` is the exact same as typing out `/home/vega`. The next two have already been touched on which are `.` for the current directory and `..` for the previous directory. Depending on the shell and arbitrary number of dots may take you back and arbitrary number of directories. Give it a shot! If nothing else you can always use `../../..` to navigate back as necessary. Finally, `-` represents the last directory you were in so if your in `~/Downloads` and then `cd /etc/pacman.d/`, running `cd -` will bring you back to downloads.

The most advanced form of built in linux navigation comes in the form of `pushd` and `popd`, which as their names imply push and pop directories to a stack (a special kind of list) of directories. Like a stack of any item you can put or 'push' an item on top, and take or 'pop' an item off. Running `dirs -v` will show you a numbered list of the stack, you can navigate to the top item with `popd` or and abitrary item with `cd ~#` where # is the number as shown by `dirs -v`.

Finally, there's one more super handy way to get around your file system but it's a non-standard tool so most systems or servers you use other than your own will not have it installed, and that's autojump. Put simply it takes a good guess about where you want to go by only typing part of the name of a folder you've navigated to before, so say you have a long file path `/mnt/data/archived/january2000/pictures/family/vacation/` you can get back to it again by simply running `j vac` which is obviously much simpler. It works the vast majority of the time in practice, only having issues if you don't include enough letters leading to ambiguity.

## I/O redirection

for the hard core, you can read good documentation here: https://www.tldp.org/LDP/abs/html/io-redirection.html

* stdin (<) (<<)

[TODO]

* stdout (>) (>>)

[TODO]

* stderr (2>) (2>>)

[TODO]

Note, `&>` redirects both stderr and stdout

* pipes ( | ) and [nammed pipes](https://www.networkworld.com/article/3251853/why-use-named-pipes-on-linux.html)

Finally, the weirdest and rarely used `<>` operator can be used to directly attch file descriptions and read/write files dirctly, this is rearely used as it's kind of a pita, but if you need to script something advanced it's available. Stollen from the above advanced link:

> [j]<>filename
> 
> Open file "filename" for reading and writing,
> and assign file descriptor "j" to it.
> If "filename" does not exist, create it.
> If file descriptor "j" is not specified, default to fd 0, stdin.
> 
> An application of this is writing at a specified place in a file.
> 
> echo 1234567890 > File    # Write string to "File".
> exec 3<> File             # Open "File" and assign fd 3 to it.
> read -n 4 <&3             # Read only 4 characters.
> echo -n . >&3             # Write a decimal point there.
> exec 3>&-                 # Close fd 3.
> cat File                  # ==> 1234.67890
> 
> Random access, by golly.

## Wild Cards & Regex

Regular Expressions or 'Regex' are an incredibly powerful tool used to match strings in a logical way. For example, say you wanted to find all the phone numbers on page that started with the area code 555, the next three digits were any number, and the last four digits could be represented as either numbers or letters, and '-' separating each group. With regex that's easy, the regular expression for this looks like:

`5{3}-[0-9]{3}-[a-zA-Z0-9]{4}`

Which while I could explain, I think just staring at that a little while should make it obvious and ideally the mental effort will lead to a better understanding. Regex can do a lot more than this though. Go ahead and checkout https://regex101.com and give it a shot.

regex can be used with a bunch of common tools like awk, sed, and grep. This means you can do fancy things like chain ls and grep together with a pipe to find any file matching a pattern or chain commands to rename any file containing characters which may be invalid in NTFS ( The file system used by Windows) to be valid before doing a transfer.

Also, you may find [The Regular Expression Visualizer, Simulator & Cross-Compiler Tool](https://blog.robertelder.org/regular-expression-visualizer/) useful.

## Job Control

[TODO]

* fg: brings a specified suspended job from the background to foreground. 

* bg: send a specified job to the background or lists background jobs if no jobs are specified

* jobs: list all running jobs 

* & operator: when added after a command, it runs the job in the background and outputs its PID. 

## Shortcuts

#### Jobs

- Ctrl+z: suspend a job to the background.
- Ctrl+c: sends a SIGNINT to the current running job and kills it; if sent before entering a command, it clears the current line in the prompt
- Ctrl+d: sends a quit signal - can be used to exit certain applications or exit a terminal
- jobs -l or ps -a: see jobs

#### Screen 

- Ctrl+l: clear screen except current line
- Ctrl+u: clear current prompt line

#### Command History

- Ctrl+r: search through command history in reverse

#### Directory Navigation

- cd -: to last dir
- cd: go to home if entered without arguments

- reptyr to move
- pushd/popd & dirs to use path stack
- history, and !№ to run that cmd
- ctrl-left/right to nav args
- expansion with mv /path/meh.{md,txt}

## Aliases and customization

### Aliases

Aliases are custom names assigned to commands. The command `alias` will display the current aliases set in your shell. An alias maps to a specific command which is run when the alias in entered. 
Aliases are useful if you have long commands that are used often. Entering `alias suinstall='sudo apt-get install'` will temporarily allow you to use `suinstall` instead of typing `sudo apt-get install`. Any switches and arguments the command takes can be used with the alias. The alias is lost when the current terminal session is closed.

To make aliases permanent, add them to your shell's configuration file (.bashrc or .zshrc). 

### Customization

Aliases are one way to customize your shell. Most shell customization occurs in the shells configuration file, usually stored as a hidden file in the home directory. .bashrc and .zshrc are the configuration files for bash and zsh. The files are loaded every time a terminal is started up and can set up its environment by loading aliases and custom functions and setting terminal colors and variables like PATH and EDITOR.

[TODO]

## Shell Scripting

[TODO] xargs, sed, awk, fzf, grep,

https://shellmagic.xyz/

https://wiki.bash-hackers.org/

## Alternative Shells

When we installed arch we actually changed the default shell from bash to zsh, but there are other options such as fish, csh, and xonsh among others

[TODO]

## Alternative commands

* bat
  * alternative to `cat`, capable of syntax highlighting and line numbering
* exa, lsd
  * alternatives to `ls`, eaiser on the eyes
  * You could also use `ranger` or `nnn` two fully featured terminal file browsers
* fd
  * altertnative to `find`, doesn't suck
* htop, gtop
  * alternatives to `top`, doesn't suck
* prettyping
  * alternative to `ping`, pretty
* diff-so-fancy, icdiff, [Delta](https://github.com/dandavison/delta)
  * alternative to `diff`, but better
* ncdu
  * while much slower than `du` it's great for finding out what's eating storage space
* [choose](https://github.com/theryangeary/choose)
  * user friendly, simple alternative to awk/cut

## Useful Non-Stock CLI Tools

* tldr
  
  * tldr, 'for too long didn't read' provides a quick, easy to read version of the man page for many common linux commands. Forget how to use `tar` ? just run `tldr tar`

* autojump
  
  * refrence above description in faster navigation

* mpd + ncmpcpp
  
  * 'music player daemon' and 'ncurses music player client plus plus' are two cli tools that work in tandem to provide an experiance that I presonally find superiour to any graphical music player

* irssi
  
  * full featured IRC client, chat right from your terminal

* screenfetch
  
  * get some nift stats about your terminal, add to your shell's RC file to be one of the cool kids

* [moreutils](https://joeyh.name/code/moreutils/)
  
  * "moreutils is a growing collection of the unix tools that nobody thought to write long ago when unix was young."

* [hr](https://github.com/octobanana/hr)
  
  * Need some way to visually seperate things, this literally just makes a horizontal line in the terminal

* [fltrdr](https://github.com/octobanana/fltrdr)
  
  * Wanna read at 1000wpm, this is the tool for you.

* [crex]( https://github.com/octobanana/crex)
  
  * test regular expressions in the terminal

* lynx, w3m, browsh
  
  * Browse the web from a terminal (not a joke and actually useful)

* entr
  
  * monitor file system for changes

* noti
  
  * send a graphical system notification when a command finishes

* progress
  
  * start a command and have no way to see what its doing (rsync, cp, etc)? This is your tool

* figlet, toilet, banner
  
  * makes big text, run `figlet Your Text Here` and see your text in big, ascii letters

* no more secrets
  
  * reveal text in a martix effect.. I'm streching the meaning of useful here

* stress-ng
  
  * stresstest your system in pretty much any super specific way you can think of, or hammer your cpu to test an overclock

* pandoc
  
  * convert between damn near any text format to any other format

* taskwarrior
  
  * keep track of To-Do's and tasks, can also be paired with timewarrior for timetracking

* waifu2x (many forks available)
  
  * Upscale and de-noise images zoom-and-enhance style but for real-    this ones' a bit GPU intensive because it uses AI

* youtube-dl
  
  * despite the name this tool can download videos or audio from almost any page on the internet, even supporting playlists in many cases too.

* [rat](https://github.com/ericfreese/rat)
  
  * "Compose shell commands to build terminal applications"

* magic-wormhole
  
  * tool for getting a file between two systems easily and secure, just run `wormhole send` and `wormhole recive` on the respective systems

* Ix, Gist
  
  * Paste tools, like pastebin

* DMIDecode
  
  * get info from BIOS

* hexyl
  
  * pretty terminal based hex viewer

* [UXY](https://github.com/sustrik/uxy)
  
  * "UXY tool also wraps some common UNIX tools and exports their output in UXY format."
    
    "UXY is a tool to manipulate UXY format, which is a basically a two-dimenstional table that's both human- and machine-readable."
    
    This gives a nice format for manipulation of commands though pipes for super complex shell scripting

* lsof
  
  * list what files a runnig process has open

While some of these may be included, they're some of the OG addons or tools to make included things better:

* tmux
  
  * multiplex your termianal, open multiple terminals in your terminal, usefull in non-graphicas ttys espically

* vim + extensions (neovim, spacevim, etc)
  
  * the old school text editor meets new school

* GDB + gef
  
  * GDB, the original debugger, has it's faults. GEF, a config file for GDB on steroids, fixes many of them. While originally made for exploit developers, many people use it for everyday debugging

* resh
  
  * replacement for ctrl+r history seach

## Common Graphical Linux Utils

[TODO]

Mostly taken from https://wiki.archlinux.org/index.php/List_of_applications and https://github.com/Kickball/awesome-selfhosted

## Graphical Enviroments++

Gnome, KDE, Pantheon,

Rofi, Polybar, j4,

Compton

Nitrogen, pywal, (feh),

## Free Graphical Utilities

### Office & Daily

Libreoffice, Xournal++,

thunar + bulk rename, nautilus, Filezilla, Deluge, qBitTorrent,

Firefox, Min, Vivalidi,

Marktext, Typora, Notable

Geogebra

Evolution

Evince

### A/V

Feh, Nomacs

Rawtherepee, Krita, Gimp, Darktable

Inkscape,

Blender, Pencil2D, OpenToonz

Goxel,

Pithos, Gnome-Music,

Cadence (jack2)

Audacity, Ardour, LMMS, non, Radium

Giada

VCV Rack

Guitarix

PureData, SonicPi, ORCA

Processing, VVVV,

VLC

DaVinci Resolve

Cheese, Motion, OBS

### Social

Thunderbird

LBRY

Discord, Telegram, qTox, HexChat, SRain, Riot/Fractal ,

### Programming

Okteta

Gitkraken

Code, Atom, Sublime, Code::Blocks, Eclipse, Netbeans, IntelliJ, Sublime

PyCharm, Spyder

Cutter, Node-Red

Etherape/cap, Wireshark

### Engineering

FreeCAD, LibreCAD, KiCad, CircuitSim, Fritzing

PulseView, Arduino, PlatformIO

### System

Alacritty, urxvt, Deepin-Terminal, Hyper,

Baobab, Filelight, GParted, VeraCrypt

Syncthing

Etcher

lsusb, lshw, lstopo, usbview,

Firewall frontend?

ClamAV

deepin-screesshot, scrot

### IRL

Gnome-Maps

Gnome-Weather

Celestia

Stellarium

### Other

GnuRadio, SDRAngel

## Paid Graphical Utilities

Renoise, Bitwig

## Self hosted / Services

Netdata

VPN (Wiregaurd)

Snort, Suritica

Gitea, Gitlab

Mathics

LAMP stack

Couchpotato, headphones

mpd, ampache

Owncloud, NextClound

Samba

DAT, IPFS

Convos.by

Ix , 0bin (pastebin)

Mathics

TaskWeb (TaskWarrior)
