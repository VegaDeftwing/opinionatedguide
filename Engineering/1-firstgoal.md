

# Chapter 1 - The first goal

Every journey needs a place to start, and while many may like to start slow I think a head first approach is best. So that's exactly what we're gonna do. The very first thing we're going to do is install a new operating system (OS) on your computer.

?> Operating System: According to Wikipedia, "An operating system (OS) is system software that manages computer hardware and software resources and provides common services for computer programs." put simply on your hardware this is probably Windows or Mac OS, and it's what everything else runs on top of

You should really make a full backup of your computer before doing this, as installing an operating system can rather easily lead to lost files when you reformat or reparation your drive or when you change settings in the BIOS/UEFI and swap the bootloader.

?> Reformat: the bulk storage device in your computer, the hard drive or solid state drive, needs to be formated before use, this sets up a way for the computer and the drive to agree on a base system for how partitions should be setup, speaking of which:

?> Repartion: To partition a drive means to take all the space on the hard drive and divide it into partitions onto which you can put a file system. Most operating systems like Windows, Mac OsX, or Linux, use multiple partitions for the operating system to function. Usually a filesystem is set up on each of these partitions, in windows this is typically NTFS for Hard Drives and FAT32 for flash drives, these file systems are effectively the index for all the files you'll put on the drive, and as you may have multiple partitions and multiple file systems on one disk each will have an index to match. As complicated as it may seem this means the partition table can be seen as an 'index of inecies' of sorts. Don't worry if that's a lot to understand right now, we'll come back to this topic in depth.

?> BIOS/UEFI: The Binary Input Output System or Unified Extensible Firmware Interface is the thing you see before you computer loads the operating system, usually prompting to press delete or f2 to change settings. This is the system that is used to change the way all the components around the computer talk to one another and at what speed.

?> Bootloader: The bootloader sits at a special place on the hard drive selected for boot in the UEFI or BIOS, and is what the computer uses to load the full operating system, most will let you chose what operating system you want to boot if you have multiple installed on you computer at once

Alright, so why do I want you to install a new OS to begin with? Well, the OS we'll be using is called Linux. Linux is actually what powers both android and ChomeOS, and is a common descendant of the same system as Mac OSX as well as almost all of the servers on the internet from massive website like Facebook and Google to small Minecraft servers you can rent online to play with friends. What's cool about Linux is it lets you get much closer to the hardware and see what's going on, and it just generally makes writing code much easier. Furthermore, it's super easy to set up an amazing development environment in Linux for getting work done with code or electronics, and at the end of the day you can still watch YouTube, play *most* games that are on steam, or open up an office suite, just like Windows or Mac. Unlike Windows and (to a lesser extent) Mac though the system is laid out in way so that all the moving parts are exposed and able to be tinkered with. No setting or configuration is locked in and you have total control over your computer with Linux. Furthermore, it's not just easier to run and use software and tools for doing hardware and programming development on Linux, but it's also easier to find and install the tools, as you'll see shortly. Finally, Linux has a great track record of stability, as there are many Linux servers that run 24/7/365 to serve web pages, host services like games, and crunch big data in real time. In fact, all of the world's top 500 super computers use Linux.

Beyond that, there's a degree of respect Linux has for the user that Windows, and to a lesser extent OSX, lack. In Windows 10 ads are being baked into the preinstalled programs from Minesweeper to the Email client, the OS pesters you to use Edge and Bing while simulatiously spying on everything you do. If you attempt to do even remotely system level things it's increasingly easy to get the Frowny Face Blue Screen of Death (BSOD)

![Bsodwindows10](./openg/Bsodwindows10.png)

Add to this the fact that Microsoft [basically laid off their entire testing department](https://www.google.com/search?q=microsoft lays off testing department), and the [nightmare that windows 10 updates have cause](https://www.howtogeek.com/658194/windows-10s-new-update-is-deleting-peoples-files-again/), [forced online accounts](https://readhacker.news/s/4htmg), or well, just read [this list](https://itvision.altervista.org/why-windows-10-sucks.html). You'll see pretty quickly why most 'nerds' have a pretty deep seeded hatred for Microsoft.

I mean, this was a real error message I got when trying to upgrade my system from 8.1 to 10:

![somethinghappened](./openg/somethinghappened.png)

> [Image source](https://answers.microsoft.com/en-us/windows/forum/windows_10/unable-to-upgrade-to-windows-10-something-happened/be12b76d-af02-46a1-a00c-4e4af0c29588)
