---
title: Git
description: Go back home. I mean, get started
---

Git stores and operates on your data in your local file system.
In fact, Git is referred to as a distributed version control system because the source code is stored, or distributed, locally across any number of computers and servers. This is different from many of the source control tools that preceded Git.

## repo clone

`git clone https://github.com/AckeeCZ/ackee-web-testing-task.git ackee`

#### packages installation

(in package directory, no arguments): Install the dependencies in the local node_modules folder.
`npm install`

## git stash

```git
git checkout b new-branch-name
```

do something

```git
git stash save "some message"
```

saves all the work done meanwhile

```git
git stash list
```

lists all the available stashes
`>> stash@{0}: on add: Worked on add function`

```git
git stash apply stash@{0}
```

this takes the changes but does not get rid of them.

```git
git stash pop
```

takes the first stash, applies changes and deletes the stash.

#### this thing

generate the markdowns:

`npm run scripts`

start the server

`npm start`

deploy

`npm run deploy`

update the repo
`git add .`

`git commit -m "message"`

### remote origin

A remote repository is a Git repository that lives on a server and is set up to be a mirror of your local work.

- initiate an orogin
  `git remote add origin https://github.com/your/repository`

- already exists. change:
  `git remote set-url origin https://github.com/your/repository`

- `git remote remove origin`

#### setting up google api

##### for sheets

1.) make and share to anyone with link a sheet

2.) Extract the id of the sheet form the url

acces to the data -> can do get on this.
it will generate a json represantation of the spreadsheet.

`https://spreadsheets.google.com/feeds/cells/{{spreadsheet id}}/{{ page number }}/public/full?alt=json`

`https://spreadsheets.google.com/feeds/cells/1gwm0D2LZB7WLaoZkk5yHK1q-6_3pcsQn-uywnd_YX4w/1/public/full?alt=json`

_lsof command_ stands for List Of Open File.
This command provides a list of files that are opened.
Basically, it gives the information to find out the files which are opened by which process

To list any process listening to the port 8080:

```git
lsof -i tcp:8000
lsof -i:8080
```

To kill any process listening to the port 8080:

```git
kill num
```

#### Custom domains with Github

1. Create a repo + get the domain

2. Go to your GitHub repository's settings. Under Custom domain add your custom domain and click Save. This will create a CNAME file in the root of your project publishing source. Don't delete it.
   CNAME stands for canonical name
   should be the bare minimum of your URL
