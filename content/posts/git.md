---
title: "A Practical Quick Start Guide to Git"
slug: "/blog/git-gud"
date: "2020-10-20"
image: "../images/DSCF6153.JPG"
description: "Supercharge your development workflow and learn to git gud."
---

Regardless of the size of a project or size of the development team, every project needs a good version control system, well-defined workflow, and remote backup solution as these are critical to the project’s long-term success, maintainability, and scalability. The goal for this article is to leave you with a working understanding of how to use git and GitHub (or one of its lookalikes) in a practical manner as a solution to these problems. This is not a complete or definitive guide to everything git is capable of — but a quick-start guide to get you up and running with one of the most powerful tools in the software developer’s toolkit.

## First, some terminology

Version Control programs track changes to files over time, allowing you to quickly revert to specific checkpoints throughout the file’s history.

Git is one such program. It’s a blazingly fast, lightweight, and open-source tool you can use to keep your projects organized whether you are a team of one or a team of one thousand. So how does it work? Git runs on your local machine and stores your file change history (the git tree) on your local machine.

Enter GitHub (or Bitbucket, GitLab, etc). The primary benefit for these sites is that they host your git tree in a remote location which acts both as a remote backup for your projects and also as a remote synchronization point for your potentially distributed team (or even yourself with various computers). If you are a solo developer, you could in theory use git locally without using a remote code hosting site like GitHub. However, it should go without saying that you will need some method of keeping your projects backed up, and services like GitHub make this extremely easy!

So — we can use git as a Version Control system to manage our project through the development lifecycle, and we can host the project with it's development history (the git tree) in a remote code hosting site like GitHub. Let's dive deeper!

## Why learn the CLI when there's a GUI to do it for me?

There are plenty of powerful GUI (Graphical User Interface) Clients for git (SourceTree, GitHub Desktop, VS Code, etc). While these are powerful tools that wrap git with good user experience, I recommend starting out with the git CLI (command-line interface) to get a better understanding of git fundamentals. My observation is that many developers (especially juniors) end up in very sticky situations by messing up their feature branches due to running git commands they don’t fully understand through the GUI.

_I only recommend Git GUI tools once you have a solid understanding of the Git workflow and what the different commands do!_

## Core Git Concepts

### Branches

Git branches are encapsulated states of our codebase, with their own file change history. You can change files in a branch independently from the changes in other branches, and you can join branches together by merging them. Git branches are what make the entire git flow possible.

### Staging Changes

The git tree understands your project files by a few rules. First, files are added to git with `git add <file>`. Just because you have files in your project doesn’t mean that git will automatically find them! When you add a new file or make changes to an existing file, you must add it to git — this is called staging your changes. Note that you can run git status to see a printout of your changes at any time. You will almost definitely see other developers running `git add .` in their repositories, to add all the changes they’ve made in the current directory at one time — be very cautious when doing this! I’ve seen many developers (myself included) add unwanted changes by accident and introduce bugs to the codebase. The time it takes to `git add` your files individually is much less than the time it takes to figure out what changes you added by accident and then unstage them all.

Example: Let’s say you have a project with file1 and file2. You make changes to both files, then run `git add file1`. Only the changes in file1 are staged!

### Committing

Great, so now we have made our changes and staged them. We are confident that our changes are worth keeping, so it’s time to make a commit to the git tree (on a specific branch), which will take all the staged changes and create a checkpoint in the development history that we can return to later. Try to make meaningful commits as you develop your feature – think of checkpoints that might be worth returning to! The feature doesn’t have to be “done” before you commit code, but I think it’s much easier if you only commit when you reach a useful stopping point in your feature development.

### Checking Out

`git checkout` is one of the most useful git commands. You can think of checkout as your tool for creating new branches, or “checking out” code from the “library” (repository). When you run git checkout on a file or directory, it will restore those files to the state of the last commit on the current local git branch.

> `git checkout` giveth and `git checkout` taketh away.

**WARNING:** This will permanently erase work you haven’t stashed or committed! Be sure to always, always run `git status` first to make sure you aren’t about to delete a day’s work! Just as you can create new branches with git checkout, you can also checkout existing branches from the remote or local git by running `git checkout my-branch-name`. This is how you switch between feature branches. By keeping features isolated in branches and switching between them, it’s possible to develop many features concurrently.

### Pushing & Pulling

Once you have committed changes on a branch, you can sync those changes with the remote repository by running `git push`.

Conversely, `git pull` will go look for changes on the remote and download those to your local git repository. Note that if you have any working changes, you might have to clear those out by checking out or stashing them. Clear the landing zone before you git pull!

### Stashing

Sometimes you aren’t ready to commit changes just yet because things are super broken in your current branch, but you need to do something else in your project in a different branch. `git stash` takes all working changes on your git branch, and stores them locally in your git tree. Then, it checks out all working changes so you can switch branches easily. To restore those changes, you can run `git stash pop`, which will take the last thing you stashed and apply it to the current branch. This is a powerful method of moving code between branches or just saving code changes that aren’t ready for committal for later. Use `git stash list` to see the whole stack of changes you have saved.

### Navigating merge conflicts

Merge conflicts are spooky things, especially to a junior developer. Usually, git has an understanding of which changes the developer(s) intended based on the branch histories, but often you’ll end up in a situation where a file was changed in two branches that you're trying to merge and git doesn’t know which changes to accept. At this point, it will defer to the human (you, hopefully) to resolve the conflicts. Make sure to go through the files carefully! If you blindly accept merge conflicts one way or another, _bad things happen_. You can quickly add hours to your workday figuring out what bugs you introduced. Merge conflicts should be handled carefully, intentionally, and preferably with more than one set of eyes.

### Ignoring files

The .gitignore file lives at the root of your project and contains a list of files that git will not track. You can use this to ensure that sensitive, local files don’t get added to the remote repository by accident, like a list of environment variables or project secrets.

## Master the Git flow

Now that we understand some of the basic concepts of git, let’s walk through a few scenarios. I’ll assume for brevity that we’re using GitHub as our remote repository. I will also assume the default branch name for your repository is `master`, although there are some conversations around changing this to `main` in the future.

### Scenario 1: Creating a feature branch

Congratulations! You’re finally assigned to that feature you’ve been looking forward to working on, so let’s get started. First, we’ll navigate to the repository we’re working in and checkout the default branch `git checkout master` then, we’ll make sure our local copy of that default branch is up to date with the remote copy by running `git pull`.

Now, we want to create a new branch for our feature off of the default branch. We’ll create the branch with `git checkout -b my-awesome-feature`, and we’re ready to code!

> _furious typing ensues_

Now we’ve made our feature and written our tests, so it’s time to add the changes to git with `git add <file1 file2 ... fileN>`. We’ll make a quick check with `git status` to make sure everything we added was intentional, and then we’ll commit those changes to our local git branch with `git commit -m “add my awesome feature”`.

Now we want to sync the local git branch with the remote git repository, so we need to `git push`— uh oh! This is a new branch, so it’s telling us we need to create a new branch on the remote to match our local one. To create that remote branch, run the command git suggested: `git push -u origin my-awesome-feature`. Now the branch with our changes is saved on the remote GitHub repository!

### Scenario 2: Merging a feature branch

If you’ve committed and pushed your feature branch and want to merge that branch into the main branch, it’s time to open a pull request through GitHub. First, though, it’s best practice to merge the most recent default branch (run `git pull` on your project's default branch) into your local feature branch with `git merge master`, making sure you're currently on the feature branch. This will let you resolve any potential merge conflicts locally, which is much easier than resolving merge conflicts in the GitHub editor. Once that merge is committed and pushed, you can accept the pull request which merges your feature code into the default branch. Congratulations on your contribution! You can now delete the feature branch on the remote and locally if so desired — it helps keep things clean!

### Scenario 3: Switching branches with stashed work

Oh no – you gotta patch the default branch ASAP! Quick, save your working changes in your feature branch with `git stash` – we'll want to come back to those later. Run `git checkout master` and get to work on that patch!

Once you’re all done, switch back to your feature branch with `git checkout feature-branch-name` and run `git stash pop`. All your working changes from before will be restored so you can pick up where you left off.

## ... and also the Open Source flow?

The workflow for open source contributions is slightly different than the git flow I’ve outlined and varies widely per project, so I’ll defer to the [GitHub documentation on forking a repository.](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)

## Quick Reference Sheet

Here’s a quick reference to what I consider to be the most powerful git commands you should know by heart.

`git init`

Run this inside the root folder of your project. This creates the git tree and starts tracking files below this in the directory structure. This only needs to be run once per project.

`git clone`

Git clone downloads a copy of a remote repository to your local machine so you can start developing! You can usually find a prominent link to copy for this command on the remote repo’s page.

> Example: `git clone https://github.com/calbatr0ss/calbatr0ss.github.io.git`

`git branch`

Prints a list of your local branches.

`git status`

Prints your local changes, staged changes, branch information, etc.

`git add`

Stages files/changes to git.

`git commit`

Creates a checkpoint on the current branch with your staged changes. You'll usually add a message to describe it, such as `git commit -m "fix pagination bug"`.

`git checkout`

**WARNING:** This is a good way to lose progress if you don’t commit or stash changes!

This versatile command lets you switch branches or restore files — meaning you can undo changes you’ve made to a previous point in time.

> Example: `git checkout cool-feature` will switch to the cool-feature branch

> Example: `git checkout -- file1` will restore file1 to the last commit, _PERMANENTLY DELETING_ all changes to file1 since then!

`git push`

This will sync your local git commits with the remote.

`git pull`

Syncs your local git with the remote.

`git stash`

Stashes your working changes so you can set that code aside for later, or move it to another branch. Get those changes out with `git stash pop`, or see the stack of saved changes with `git stash list`.

`git merge some-branch-name`

Joins the branch `some-branch-name` with your currently selected branch. This joins the development histories and all file changes from both branches. Once this is merged and committed successfully, you can safely delete `some-branch-name`.

## Further Reading

[Git Docs](https://git-scm.com/doc)

[GitHub Docs](https://docs.github.com/)

[The Git Flow](https://guides.github.com/introduction/flow/)

[GitHub Forking Guide](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
