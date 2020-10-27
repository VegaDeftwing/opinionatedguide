!> You are on a page that is a heavy work in progress. I don't necessarily stand by anything I've written here and this page should effectively be considered not yet published.

[TOC]



# The Way We Interact With Computers Sucks.

**What do you see when you sit down to work?** My guess is a desk pressed against a wall, maybe a few shelves, one, maybe two monitors in front of you, and a keyboard and mouse dominating the work area of your desk. How do you access information? Do you simply Google something and if it's not on the first page give up? How do you get reliable information when you have a question? How do you interpret results that you find? How do you store information you've collected? How do you filter information to get exactly what you're looking for?

If you're reading this, I'd wager that you've at least thought about this a little. Maybe you're a Linux user, deep into the tiling window manager rabbit hole. Maybe you already have a fancy keyboard, monitors surrounding you on all sides. But I'm here to tell you that no matter how hard you've tried, **what you're using still probably sucks**.

I think we, as individuals and as business, need to invest more in our work spaces, probably well beyond what most people would even consider. I'm not talking about adding a third monitor or giving everyone an artistic environment. I'm talking about setting up a work environment that's conducive to productivity as instead of merely being the medium on which it takes place, the work environment should actively contribute to finding, accessing, retrieving/storing, consuming, and creating. - where data can be anything: art, documentation, code, whatever.

# HCI?

**Human Computer Interaction** is an interesting topic to me. So many people spend a crazy amount of time in front of a screen , you'd think we'd have some *damn* good hardware and software to use while we further deepen the permanent butt-shaped indentation into our seats, but alas, instead most people use *ˢʰᵘᵈᵈᵉʳ* Windows.

Back in late 2018 I wrote the first version of this post, now accessible [here](/Blog/HCI); **However,** basically everything in there has been restated here but better. Since then I've talked to many others about this, read *many* other blog posts, and just generally done a lot of new things with computers and learned a lot, so here's HCI2: Electric Boogaloo.

# Why What we have sucks

## Our Input Methods Suck.

What the fuck is this shit?

[TODO, normal TKL membrane keyboard and two button mouse]

Come on, we can do better.

[TODO gaming keyboard, gaming mouse]

Really? That's the best we can do?

[TODO ergodone and Tyon]

Alright, so this is what I use. For me, this is great. It's still attainable and usable by meme mortals without infinitely deep wallets<a class="ptr">(1)</a> and using software as it exists today, but I think that's largely still because it's the furthest edge you can go from normal before things start being a royal pain in the ass, and don't get me wrong. It's not that there's not some PITA incurred from using this weird of a keyboard. Switching to a traditional keyboard will always feel weird, other people can't easily use your computer (not sure this is reallllly a downside...), configuration still basically requires you understand the basics of C programming, and some things that expect keys to be in certain places (games) will often be awkward.

But, that's not where I want to go with this blog post. There's plenty of people that have gone on for like 20 pages about how amazing [QMK](https://qmk.fm) and the Ergodox are, I want to go **deeper**.

Let me start by lubing your brain up a little.

![](../media/largedasher.gif)

This is [Dasher](http://www.inference.org.uk/dasher/DasherSummary2.html), a software keyboard using predictive text that should sort of blow your mind. Cool init'? Now, your thoughts probably went something like this

1. What *the fuck* am I looking at?
2. Oh damn that's really cool, I want to try it.
3. Oh, hmm, but honestly even with tons of practice I can still probably type faster on a normal keyboard...

And Yep, that's about the right conclusion. End of story, let's all go home, blog post over.

But wait?

What if -->**insert your preferred mechanical keyboard here**<-- wasn't the best possible typing experience? What would something better look like?

Here is where our story really begins. You have to start asking some questions that sound like you just smoked a bowl, please feel free to read all of the following with the mental voice of a stoned dude saying "Like, man, " before each point:

* Why do we even need to type?
* What is it we want to input in the first place?
* What makes something good as an input device?

Effectively, Just keep asking Why's and What's until we're at the core of the question.

So, let's start at the top:

**Q: Why do we even need to type?**

A: We don't. We can draw, dictate, or use any of a number of other methods. Typing is convenient because it can be kept semi-private, is tactile (assuming you're keeb isn't a 💩), and generally fast enough to keep up with the speed of thought if you know how to touch type.

**Q: What do we want to input in the first place?**

A: Text (in multiple languages), Links, Images, Diagrams, Code, Commands? Dates? Our wandering thoughts? Spur of the moment ideas? Everything. Keyboards happen to be a decent input device for some of these things, and tend to pretty much suck for others. (Come on, make art by typing in RGB values for every pixel. 𝐼 𝒹𝒶𝓇𝑒 𝓎𝑜𝓊)

**Q: What makes something good as an input device?**

A: Now I'm asking myself a hard question. It's easy to list off good qualities of the familiar: Tactile, Responsive (low latency), Customizable, No αɯƙɯαɾԃ movements, keeps the users *hands and arms (hmmmm...) in a natural position, characters laid out well for the users language (and able to be switched live). But how do you get down to the core of this question without just listing traits of 'goodness' in existing things, what actual goals should we strive for. Should it be one unified device? (Hint: Touchscreens are great, but no.) What goals out weigh others? Is ergonomics more important than tactility? **Can there even be a defined list that makes an input deice good?**

**No.**

That's why this topic is so interesting. My hands are not your hands. I play music, make art, write stories (and blog posts) and code. Part of the reason I got an Ergodone keyboard in the first place is because I was starting to experience some nasty hand cramps that were particularly bad if I was switching between guitar and typing a lot. I was willing to try just about anything, which I did. I switched to Dvorak<a class="ptr">(2)</a>, an alternative keyboard layout. That didn't do the trick so I tried the ergodone (still using Dvorak, my layout is [here](https://github.com/qmk/qmk_firmware/blob/master/keyboards/ergodone/keymaps/vega/keymap.c)) and haven't looked back. But that's left a few interesting points, ignoring the obvious reason of price, why are people still using something seems to be obviously *worse* - in a word: Familiarity.

**Frankly, fuck that.**

We can do so much better. Our phones have auto correct and limited [text expansion,](https://github.com/ianzhao05/textshot) why do our beefier systems not do something a thousand times better with their superior on board resources? Why are we not doing natural language processing so that I can verbally or textually describe to you a graph or math equation without needing to have committed to memory some archaic set of $\LaTeX$ symbol names <a class="ptr">(3)</a>. Why are so many fields limited to ASCII, or maybe UTF-8, giving us those sweet, sweet emoji 🔥🔥🔥💯💯💯💯 when we could have something that allows text, diagrams, pictures, videos, etc.

**But there's more than just the keyboard**

Oh. I know. Thank you for me for bringing me to my next points so I can get back to ranting.

**Mice and Touch pads and track balls**

[foot controllers](http://www.stinkyboard.com)

* Mice & Touch pads
  * Acceleration. Why. Stop it.
  * Often there are issues with 'deadzones'
  * Scroll varies in responsiveness. Personally I think Logitech still wins here with the 'floating' scroll on the MxMaster Line.

**Pen Tablets**

* Pen Tablets
  * Admittedly this is mostly just driver hell
  * But even then most don't handle pressure in a way that's customizable in a good way, instead relying on software to do pressure-mapping

**Audio And Video**

* Webcams
  * Holy shit most look awful. Terrible everything- Auto white balance, auto focus, like my god.
* Microphones & Audio Interfaces
  * Hardware compression
  * Better noise reduction
  * Just not selling absolute garbage
  * Routing options, (not just input 1)
  * USB power, fucking why?
* MIDI Controllers
  * 7 bit, really? is this 1980?

**Voice Control**

English centric

**Object Tracking**

**Game Controllers**

**Scanners (Card and Document)**







**What's worse is half this shit already exists, and it is shit.**

Want to look up $LaTeX$ Symbols? [Done.](https://detexify.kirelabs.org/classify.html) Want to have Optical Character Recognition on your screenshots? [Textshot has that covered.](https://github.com/ianzhao05/textshot) But while I could go on with this list the big problem is of *integration* While having an OS like Linux that is tweakabe to the nth degree is unmistakably *fucking incredible*. I also **shouldn't have to**. I should be able to use any computer and trust the OS to have built in methods for getting text from a picture, to trust the OS will let me remap keys so that tapping the [shift keys types perentheses](https://docs.qmk.fm#/feature_space_cadet) or that I can bind the keys to type arbitrary Unicode. The OS should have a **local** - *don't you fucking dare collect all of this data* - store of everything I've looked at so I can go back and search for "mostly purple images" or "links clicked on October 12th". And like, there's about a dozen different chrome extensions that try to do this under the very stupid assumption that essentially all of that interaction will be in browser.

## Our Physical Environments Suck

### Your Chair Sucks

### Your Desk Sucks

### Your Audio Sucks

### Your Displays Suck



## Finding Information Sucks

## Transferring Information Sucks

### Networking Sucks

### Transferring Your Profile Sucks

## Accessing Information Sucks

## Storing Information Sucks

## Presentation of Information Sucks

### Dark Patterns

### Information Overload

## Creating New Information Sucks

## Oh, and our systems are fucking racist and suck for anyone with special needs.



# Okay, So you hate everything? What can we do better?





# What's Needed at a high level?

https://science.slashdot.org/story/20/10/26/2140202/no-implants-needed-for-precise-control-deep-into-the-brain

https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction

https://pipewire.org

https://bellard.org/bpg/

https://github.com/SolarLune/masterplan

https://dynamicland.org

http://screenl.es

https://mmcthrow-musings.blogspot.com/2020/04/a-proposal-for-flexible-composable.html

like 300x more damn responsive

https://desktopneo.com

https://apse.io

https://techcrunch.com/2017/10/18/atlas-informatics-calls-it-quits-after-less-than-a-year/, https://www.producthunt.com/posts/atlas-recall

https://hookproductivity.com

everything is a file/folder (inc. full programs)

better permissions systems

 AnIdiotOnTheNet on https://news.ycombinator.com/item?id=24783387  " ... 

5) Switchable "user profiles" instead of "user accounts", which are an artifact of giant shared computer systems. User profile just contains personalized settings and can be located anywhere, including removable media so you can take yours to other computers. If you want to keep things safe from others, encrypt them. Otherwise there are no permissions except those applied to applications themselves.

6) Sound *and video* should be routable like you see in DAWs. Plug outputs into inputs, add filters, split, mix, etc. This is of course scriptable so you can make it do what you want on arbitrary events.

7) Backwards compatibility should be a high priority, but accomplished via shim layers and/or emulation and/or vms when clean breaks are necessary. A wide array of such should be included with the OS from the beginning. In 2020, there is no excuse for not being able to run old software."

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Why can’t you easily search all of the text you read on any screen (desktop + mobile) over the past day?<br><br>It’s strange how much obvious, low-hanging fruit of this form still exists.</p>&mdash; Patrick Collison (@patrickc) <a href="https://twitter.com/patrickc/status/953011978217205760?ref_src=twsrc%5Etfw">January 15, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

# What's Needed to support that at a low level?

# What do we already have?

<ol hidden id="footnotes">
<li>alright, so, yes they're still expensive as all hell, but like if you go DIY then I think they're mostly attainable to most people. I'm sure there's a bit of privlidge talking there, but ╮(─▽─)╭</li>
<li> <a href="https://en.wikipedia.org/wiki/Dvorak_keyboard_layout#/media/File:KB_Programmer_Dvorak.svg">Programmer's Dvorak</a> is a thing and honestly I want to know if anybody actually uses it? Having the numbers like that hurts my brain. </li>
<li> <a href="http://tug.ctan.org/info/symbols/comprehensive/symbols-a4.pdf">Seriously,</a>  check these out. You won't believe some of what's in here. </li>
</ol>