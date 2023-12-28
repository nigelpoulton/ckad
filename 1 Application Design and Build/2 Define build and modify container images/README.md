# Test yourself tasks

Complete the following tasks in your own time.

## Restrictions

The following restrictions will help emulate exam conditions.

- Only use approved websites (`kubernetes.io/docs`, `kubernetes.io/blog`, `github.com/kubernetes` and `helm.sh`)
- Use only your chosen product's man pages and other documentation installed by your products (E.g. `buildah --help`, `docker --help`, `podman --help`)
- Do not refer to any other notes
- Do not make any hand-written notes

The full list of exam requirements and restrictions can be found [here](https://docs.linuxfoundation.org/tc-docs/certification/lf-handbook2/exam-rules-and-policies).

## Pre-requisites

The images and containers you'll work with are all Linux-based. It's recommended to test yourself in a Linux-based environment. This is because the exam environment is Linux-based.

You can have any of the following tools installed for use.

- Buildah
- Docker
- Podman

If you haven't already done so, clone the repo with the following command.

```
git clone https://github.com/nigelpoulton/ckad.git
```

Run the following command to change into the correct directory. The tasks expect your terminal to be in this directory. If it isn't, the answers won't work.

```
cd ckad/1\ Application\ Design\ and\ Build/2\ Define\ build\ and\ modify\ container\ images/
```

**NOTE:** This will set a very long working directory. If this bothers you (it bothers me) you can tell Linux just to display your current directory without the path by running this command. It will only change your prompt for your current shell session.

```
PS1="\W\$ "
```

## Answers

Answers to each task can be found in the `answers.md` file.

## Tasks

### Task 1

The `App` folder has the code for a web front-end app based on Node.js.

Build the app into an OCI image called `ckad:pluralsight` using the instructions in the `Containerfile1` file in the `Buildfiles` folder.

Resolve any issues that arise.

When successfully completed, you should have a local image called `ckad:pluralsight`.

### Task 2

You must have completed the previous task before attempting this one.

Convert the local `ckad:pluralsight` image into an OCI archive and compress it into a zip file called ckad-image.zip. 

The command to compress the archive is `gzip > ckad-image.zip`.

When completed successfully, you should have a new file in your current directory called `ckad-image.zip`.

### Task 3

You must have completed Task 1 before attempting this one.

The local `ckad:pluralsight` image is ready for production. Perform any tasks necessary so it can be pushed to the `nigelpoulton/ckad:prod` repository on Docker Hub.

Once you've done this, delete the original `ckad:pluralsight` image, but do not delete the `nigelpoulton/ckad:prod` image.

When you've completed the task, you should have the `nigelpoulton/ckad:prod` image on your local machine and the `ckad:pluralsight` should no longer be present.

### Clean up

Use the following command to delete the `ckad-image.zip` file.

```
rm ckad-image.zip
```

Run any of the following commands to delete the local `nigelpoulton/ckad:prod` image.

```
buildah rmi nigelpoulton/ckad:prod
docker image rm nigelpoulton/ckad:prod
podman image rm nigelpoulton/ckad:prod
```


# Additional Tasks

Feel free to complete the following additional tasks in your own environment. Be sure to only use the resources that will be available to you in the exam environment

### Task 4

Build an OCI container image using the `Dockerfile.dev` build file in the `Buildfiles` directory and using the `App2` directory as your build context. Make sure the image is tagged as `ckad:ps1`.

### Task 5

Build an image called `ckad:ps2` using `Dockerfile` in the `Buildfiles` directory and tag it so it can be pushed to the `dev-fe` repo in the `internal-reg.io` registry.

### Task 6

Download a local copy of the official `alpine` image with the `3.15.4` tag.

### Task 7

**This task can only be completed if you have successfully completed Task 5.**

Create an OCI archive as a tarball called `ckad-ps2.tar` from the local `ckad:ps2` image.

### Task 8

**This task can only be completed if you have successfully completed Task 4.**

Delete the local `alpine:3.15.4` image.

### Task 9

Build a new image called `ckad:ps3` using `buildfile.ckad` in the `Buildfiles` folder and using the app in the `dev/ckad` folder. Tag it so it can be pushed to the `ckad-dev` repo in the `internal-reg.io` registry.

### Clean up

The following commands will delete the images and other artefacts created during the additional tasks. Feel free to use Podman instead of Docker.

```
docker image rm ckad:ps1
docker image rm internal-reg.io/dev/fe/ckad:ps2
docker image rm internal-reg.io/ckad-dev/ckad:ps3
rm ckad-ps2.tar
```
