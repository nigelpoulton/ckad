# Tasks

Feel free to complete the following tasks in your own environment.

## Pre-reqisites

You'll need the following:

- An installation of [Docker](https://www.docker.com/), [Buildah](https://buildah.io/), or [Podman](https://podman.io/).
- A clone of the GitHub repo

Use the following command to clone the repo into your working directory.

```
$ git clone https://github.com/nigelpoulton/ckad.git
```

Run the following command to change into the correct directory. The tasks expect your terminal to be in this directory. If it isn't, the answers won't work.

```
$ cd ckad/1\ Application\ Design\ and\ Build/1\ Define\ build\ and\ modify\ container\ images/code/images/
```

**NOTE:** This will set a very long working directory. If this bothers you (it bothers me) you can tell Linux just to display your current directory without the path by running this command. It will only change your prompt for your current shell session.

```
$ PS1="\W\$ "
```

## Help and answers

You can use each tool's built-in documentation for help. This is also allowed in the exam. For example:

```
$ docker --help | docker <command> --help
$ buildah --help | buildah <command> --help
$ podman --help | podman <command> --help
```

You're encouraged to work things out yourself, even if you use the internet. However, the only websites you can use in the exam are `kubernetes.io` and `helm.sh`.

Answers to each task can be found in the `answers` file, but 

### Task 1

Build an OCI container image using the `Dockerfile.dev` build file. Make sure the image is tagged as `ckad:ps1'.

### Task 2

Build an image called `ckad:ps2` using the default `Dockerfile` and tag it so it can be pushed to the `dev-fe` repo in the `internal-reg.io` registry.

### Task 3

Download a local copy of the official `alpine` image with the `3.15.4` tag.

### Task 4

**This task can only be completed if you have uccessfully completed Task 2.**

Create a tarball called `ckad-ps2.tar` from the local `ckad:ps2` image.

### Task 5

**This task can only be completed if you have uccessfully completed Task 1.**

Delete the local `alpine:3.15.4` image.

### Task 6

Build a new image called `ckad:ps3` using `buildfile.ckad` in the `dev/buildfiles` folder and using the app in the `dev/ckad` folder. Tag it so it can be pushed to the `ckad-dev` repo in the `internal-reg.io` registry.
