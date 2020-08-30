How to Un-Suck Windows
[TOC]

Drivers. (Yes, they're awful on every OS)
First and foremost, yes, this is a pain. Yes, Something will go wrong. No, this never works the first time.

First, you're gonna need your CPU and Chipset drivers. The easiest way to get these is to just google your CPU manufacture (AMD/INTEL) OR your motherboard model and find the support page. These can come in everything from a zip file containing a load of bloatware to a contained nice installer.

Now, don't run everything just yet. Before you update your drivers you should really update the OS, unless it's absolutely necessary to do it the otherway around. Windows is kinda invasive and likes to update some microcode and firmware for you, so, heaven forbid it update to an older version after you upgrade things, you'll have wasted time. Alright, so, windows is up to date? are you sure? go compare your version to something online to be sure. Check again. if not, fix it. M$'s website has some weird update tools that will usually fix things if the stuff hits the fan.

Window's finally up to date? coolio. Go update your BIOS/UEFI. Seriously. I bet you never have, and I bet you don't want to either. Some newer system have a nice updater built into the bios (f2, del, or f12) but you might have to run some crappy .odd-extension file you can get from your MOBO/system vendor's website

Now, finally, you can update your drivers with that package you downloaded earlier. After everything is installed you should google and run IOBit's driver booster. Be careful, there's adware bundled. Install it, run it, uninstall it. It's an invasive little thing and wants to start on boot, so, uninstall when you're done.

Everything should be up to date now, so, go in to allll the control panels for you drivers and find anything that says 'reset to default' and do it. It's amazing how much this can fix. Also, might be good to set some sane settings while you're in each one. Now, it's probably a good time to go check device manager and be sure everything is actually connected and working; if not, enjoy the google-ing.

Windows Settings
The decrappifers:
Im'a be honest with you, weather you run a VPN -> Tor -> Freenet -> IPFS chain that hit's every country twice and masks your DNS behind 10 different walls or you manage to set up firewalls so high china wants your phone number, you won't be able to stop windows from knowing more about you than you know about you. That's just the way it is. But, It's still good to give it a shot, so, here we go:

https://www.oo-software.com/en/shutup10 <--- Run this, check off the things that work best for you

CCleaner (when it isn't infected with NSA malware), and … and …. and … are all gonna help you out too.

Now, I recommend you go through literally all of your settings. Both in the control panel and the new settings menu that makes you want to blow the brains out of Microsoft executives.

Don't forget, Candy Crush is installed with 10 by default. And there's more… so, so much more. Go digging though add/remove programs and start mashing remove until you're satisfied. (I know, you're using windows, there is no such thing)

So, next up is the "This might break things" section.

Uninstall Cortana https://winaero.com/blog/how-to-uninstall-and-remove-cortana-in-windows-10/
Winaero's Tweaker program can do some other minor things, https://winaero.com/download.php?view.1796
Uninstall some of the built in UWP apps https://www.howtogeek.com/224798/how-to-uninstall-windows-10s-built-in-apps-and-how-to-reinstall-them/
Some notes on settings in weird places
Some of the settings in 10 are in massively stupid places. The whole '2 Control panels' thing is the obvious big one, but, there's other things too. For example, setting wallpapers on multiple monitors can be little annoying, especially if you want something even slightly complicated. Some links for various issues + solutions follow. Many are actually 3rd party tools, but really just do registry tweaks

Old Personalization Menu: https://www.tenforums.com/tutorials/6051-add-personalize-classic-context-menu-windows-10-a.html
Make the File Explorer less crowded: https://www.msfn.org/board/topic/170375-oldnewexplorer-118/
​
If you find the picture before your password annoying: https://www.windowscentral.com/how-disable-windows-10-lock-screen
Let's make it feel a bit more like home
So, there's still a lot more work to do to make the system itself nice, but, now that we have something that's not a complete pain to work with, it'd be nice to take a break and do some house keeping.

Now would be the time to finally change the wallpaper from the ugly default windows 10 logo if you haven't already.

Let's go get some programs to kick things off. Go get Chocolatey it's a package manager for windows, it's not great but, it should do the job

I'd like to start a bit out of order here, because it will make things easier down the road.

Edge is a pile of garbage so, let's go grab a good browser. Vivaldi is my recommendation, but, chrome is fine too
If you want the same pretty start page I use, grab 8bitdash from here and make new tabs open to the local address by default
Extensions are a must have for speed and security, so, grab your adblocker of choice, HTTPS everywhere, Magic Actions for YouTube, One Tab, and Privacy Badger are all must haves. HoverHound can help you save some cash too, but, I'm sure that has privacy implications. Greenhouse, a dictionary/thesaurus, Google Keep, The Great Suspender, and a color picker can all come in handy too. Really, just get what you need
chrome://flags can have some good things to help you make sure everything is running smoothly too, espically if hardware acceleration is disabled for some reason
Rainmeter (Download the Beta) is a nice tool for adding some live widgets (clock, music visualizer, sys info) to your desktop. Doesn't have a huge overhead, but, might want to leave this one out if you have a lower end system
Some more downtime is probably on the way, so, lets go get some messaging programs:
Pushbullet is the best way I've found to do texting across devices
FB messenger, Skype (use the one for desktop, Not the Win 10 app), TeamSpeak, HexChat (IRC), Telegram, Reditr, and maybe a twitter program
Media consumption is sorta one of the main reasons for having a computer, so, let's do it in style
Kodi Media Center is probably the best thing to use if you want a nice UI and something to use with a game controller or remote
VLC is a MUST have. It can handle basically any format you give it, and handle it well.
There are no good music players. I'm just being honest. They're all garbage. If you can tolerate Windows Media Player, go for it. If not, there's always Aimp4, which can look pretty okay if you go find some skins and plugins. MusicBee or Winamp are the next best.
Steam and GOG are the 'big 2' game distribution frameworks, may as well go start the download now
RetroArch (ironically) is a absolutely beautiful frontend for managing you ROM and emulator collection
The new photoviewer in 10 is a pile of trash. XnView is a decent replacement. I still don't really like it though, so, feel free to find something better
F.lux is a nice program that can help if you're feeling a bit of eyestrain from that ugly windows UI and font.
7-Zip will pretty much be necessary for working with compressed archives in 10
Hyper Terminal is a nice terminal to replace the awful window that CMD or bash (explained in a bit) open with by default
chocolatey has: Aimp4 (aimp), Vivaldi (vivaldi), F.lux (f.lux), VLC (vlc), Atom (atom), Steam (steam), RetroArch (retroarch), Kodi (kodi), XnView (xnview), Pushbullet for 10 (pushbullet), Rainmeter (outdated) (rainmeter), Good Old Games (goggalaxy), ShutUp10 (shutup10), 7zip (7zip.install), Driver Booster (driverbooster), Hyper Terminal (hyper), Adobe Flash (flashplayerplugin), Google Chrome (googlechorme), Java 8 (jre8), Notepad++ (notepadplusplus.install), LibreOffice (libreoffice), VSCode (visualstudiocode), Python3 (python3), AutoHotkey (autohotkey), youtube-dl (youtube-dl), GitKraken (gitkraken), Belvedere (belvedere), Xming (xming), Speedfan (speedfan), Launchy (launchy), Clink (clink), Cmder(cmder), Glasswire (glasswire), Telegram (telegram.install), Skype (skype), Discord (discord), TeamSpeak (teamspeak), HexChat (hexchat), Audacity (audacity), VeraCrypet (veracrypt), ArduinoIDE (arduino), OBS Studio (obs-studio), SonicPi (sonicpi), PureData (PD) (puredata), Blender (blender), Nestopia (nestopia), vvvv (vvvv.x64)(vvvv-addonpack.x64), Process Hacker (processhacker.install), PyCharm (pycharm-community), Fira Code font (firacode), Hack Font (hackfont), Droid Sans Mono Font (droidsansmono), Resource Hacker (reshack), radare2 (radare), Go Language (golang), VirtualBox (virtualbox), Babun Shell (basically just enhanced Cygwin) (babun), Sudo (widows admin elevation) (sudo), Wireshark (wireshark?)

Event Ghost, Typora, Davinci, Helm, FL Studio, Ableton Live 9, PhotoShop, deflemask, Processing 3

Security
Security is probably the next big thing to worry about (I know linux can get virus too, but, now you might actually get one instead of just your grandmother)

Glasswire is a handly little firewall that's nice and easy to use, and it's really good about letting you know when something fishy is going on
As far as antivirus is concerned, I really just recommend you have a linux live disk with clamtk on it. It's amazing how well some viruses protect themselves, and this is really the only good option out there. Anybody interested in infosec will tell you: If someone wants to infect your box, they will. Definition based scanning doesn't matter when you already have an encrypted hard drive asking for 300 bitcoin either. so, regular backups and a fix-it-when-it-needs-fixing strategy is really the way to go. Just use your adblocker and don't do anything stupid and it should be fine.
If you want to protect your files there's VeraCrypt, just know that encryption comes with a disk overhead, so, if your on an HDD, windows 10 will be slower than bearable in my experience. Only protect what needs protecting.
Don't use a password manager. Don't use complex passwords.
Bad news, you're probably signed in using a MSlive/outlook/whatever account. Change that.
May God help you if you really want a secure OS and you're using Windows.
If you don't have a VPN I recommend getting one,