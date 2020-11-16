---
title: "Personalize Your Terminal"
slug: "/blog/aliases"
date: "2020-11-16"
image: "../images/DSCF1697-web.jpg"
tags: "tech"
description: "Develop at the speed of thought with custom shell aliases."
---

_This post is targeted at \*nix machines (Linux, macOS, etc.), but there are analogous options for this type of feature on Windows machines._

## What are they?

In short, aliases are commands that represent longer commands. They’re available in all modern shell environments, but for this article, we’ll look at bash or zsh shell. In either case, depending on your shell, you can save your aliases in your `.<shell_name>rc` file (e.g. `.bashrc`), and on macOS you can use the `.bash_profile` file. They are usually stored in the home directory, `~/`. Whichever file you end up in, it is here that you can save your aliases, environment variables, path extensions, etc.

The great thing about aliases in my opinion is how at-home you start to feel in your own shell environment — as a student, creating my own aliases were an inflection point from feeling like a stranger in the terminal, thus avoiding it, to becoming familiar and even preferring the command line in most cases.

## Why bother remembering all these custom aliases?

A huge swath of professional software development is focused on “developer experience”, with the primary goal of making software development as seamless as possible. Anything we can do as developers to speed up the time from feature request to deployment is highly desirable as it makes us more productive. Often, a frictionless workflow lets you remain in the flow state and retain mental context because you aren’t scrolling through your notes or shell history looking for that pesky deploy command you can’t quite remember.

One of the simplest ways to enhance your development environment is to create your own aliases for commands you frequently use. Despite how trivial this may seem, I see very few developers using this great feature! The barrier to entry is low, and before you know it you’ll be zipping around your terminal with custom commands like a true terminal rat.

I have several dozen aliases that I back up to GitHub, so I can transfer them easily to other computers. Need a value proposition? Aliases save me hundreds of keypresses per day and allow me to navigate the terminal at the speed of thought instead of the speed of type. Since they're shorter in length, they're also less prone to typos.

## Examples to get started!

I’ll share some of the everyday aliases I use, to give you an idea of how to get started. Let’s start with the simplest aliases I use: navigational commands. These aliases improve simple terminal navigation and allow me to quickly navigate to commonly used directories.

```
alias ..='cd ..'
alias ...='cd ../../'
alias ....='cd ../../../'
alias doc='cd ~/Documents'
alias down='cd ~/Downloads'
alias desk='cd ~/Desktop'
alias cz='cd ~/calzone'
```

### Automated system maintenance

On to a more complex example! I have a custom update alias called `latest`. While this is technically a bash function and not an alias, the general principle is the same.

The alias checks for macOS updates, macOS application updates, runs a Homebrew update with an automatic clean up, and then updates my `Oh My Zsh!` shell plugins as well. I believe in updating your software frequently because I’d rather fix some small thing that breaks per update instead of waiting to update it all at once later and bricking my machine with 100 small fixes. _Update your machine!_

```
function latest () {
	echo latest: Updating macOS:
	softwareupdate -i -a;
	echo Updating macOS Applications:
	mas upgrade;
	echo Updating Homebrew:
	brew update;
	echo Upgrading Homebrew:
	brew upgrade;
	echo Cleaning up after Homebrew update:
	brew cleanup;
	echo Upgrading Oh My Zsh!:
	omz update;
}
```

### Enhancing your development workflow

As a JS developer, I encounter situations once in a while where I need to delete the entire `node_modules` directory, `package-lock.json`, and then reinstall all the `node_modules`. This dependency hell shouldn’t happen, but the reality of the npm environment is that it happens — a lot. Not to worry! Use `renode` to automate this annoying process and then go get a cup of coffee while your computer deletes and downloads the half gig of dependencies your lean app needs. 😅

```
function renode () {
	echo removing node_modules
	rm -rf node_modules;
	echo removing package-lock.json
	rm -f package-lock.json;
	echo npm install
	npm i;
}
```

You also might like `nrd`, which I’ve aliased to `npm run dev` to shortcut your app's development script.

### Running custom executables

If you’re developing a program that compiles to an executable, you can map that executable command to an alias so you can get it running quickly. For example, to launch PICO-8 on macOS, I use `alias p8='/Applications/pico-8/PICO-8.app/Contents/MacOS/pico8'` which gets me up and running quickly.

**Note:** Any flags or args appended to an alias become part of the full interpreted command!

### Git

I find git aliases to be super helpful as well. These save me a ton of keystrokes, and I use them every day.

Some examples:

```
alias gcm='git commit -m'
# This reduces each commit by 10 keypresses.

alias gco='git checkout’
# This reduces each branch or checkout by 9 keypresses.
```

### Have some fun!

My personal favorite? I have `rm -rf` aliased to `yeet`, which saves me valuable time when yeeting files off my computer. You want to look like a pro, right? Just be careful not to run `yeet /`...

## Conclusion

Good aliases are usually unique to the individual or the development environment. Pay attention to verbose or frequently run commands you use and consider moving those into an alias. You might be surprised how much time you save!
