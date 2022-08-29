# Answers

The following lists each question and accompanying answer.

Some answers include commands for `Buildah`, `Docker`, and `Podman`. Only use the commands for the tool you are using.

### Task 1


**Question**

The `App` folder has the code for a web front-end app based on Node.js.

Build the app into an OCI image called `ckad:pluralsight` using the instructions in the `Containerfile1` file in the `Buildfiles` folder.

Resolve any issues that arise.

When successfully completed, you should have a local image called `ckad:pluralsight`.

**Answer**

There is a typo in the Dockerfile (`Buildfiles/Containerfile1`). 
- `FROM ode:lts-alpine` should be `FROM node:lts-alpine`

The command to build the image is any of the following:

```
buildah build -t ckad:pluralsight -f ./Buildfiles/Containerfile1 ./App
docker image build -t ckad:pluralsight -f ./Buildfiles/Containerfile1 ./App
podman image build -t ckad:pluralsight -f ./Buildfiles/Containerfile1 ./App
```

### Task 2

**Question**

You must have completed the previous task before attempting this one.

Convert the local `ckad:pluralsight` image into an OCI archive and compress it into a zip file called ckad-image.zip. 

The command to compress the archive is `gzip > ckad-image.zip`.

When completed successfully, you should have a new file in your current directory called `ckad-image.zip`.

**Answer**

Run any of the following commands to complete the task.

```
docker save ckad:pluralsight | gzip > ckad-image.zip
podman save --format oci-archive ckad:pluralsight | gzip > ckad-image.zip
```

### Task 3

**Question**

You must have completed Task 1 before attempting this one.

The local `ckad:pluralsight` image is ready for production. Perform any tasks necessary so it can be pushed to the `nigelpoulton/ckad:prod` repository on Docker Hub.

Once you've done this, delete the original `ckad:pluralsight` image, but do not delete the `nigelpoulton/ckad:prod` image.

When you've completed the task, you should have the `nigelpoulton/ckad:prod` image on your local machine and the `ckad:pluralsight` should no longer be present.

**Answer**

Add a new tag to the `ckad:pluralsight` image. This will ensure it can be pushed to the remote repo.

```
buildah tag ckad:pluralsight nigelpoulton/ckad:prod
docker image tag ckad:pluralsight nigelpoulton/ckad:prod
podman image tag ckad:pluralsight nigelpoulton/ckad:prod

buildah rmi ckad:pluralsight
docker image rm ckad:pluralsight
podman image rm ckad:pluralsight
```

### Task 4

**Question**

Build an OCI container image using the `Dockerfile.dev` build file. Make sure the image is tagged as `ckad:ps1'.

**Answer**

```
buildah build -t ckad:ps1 -f ./Buildfiles/Dockerfile.dev ./App2
docker image build -t ckad:ps1 -f ./Buildfiles/Dockerfile.dev ./App2
podman image build -t ckad:ps1 -f ./Buildfiles/Dockerfile.dev ./App2
```

### Task 5

Build an image called `ckad:ps2` using the default `Dockerfile` and tag it so it can be pushed to the `dev-fe` repo in the `internal-reg.io` registry.

```
buildah build -t internal-reg.io/dev-fe/ckad:ps2 -f ./Buildfiles/Dockerfile ./App2
docker image build -t internal-reg.io/dev-fe/ckad:ps2 -f ./Buildfiles/Dockerfile ./App2
podman image build -t internal-reg.io/dev-fe/ckad:ps2 -f ./Buildfiles/Dockerfile ./App2
```

### Task 6

Download a local copy of the official `alpine` image with the `3.15.4` tag.

```
buildah pull alpine:3.15.4
docker image pull alpine:3.15.4
docker image pull alpine:3.15.4
```

### Task 7

**This task can only be completed if you have successfully completed Task 2.**

Create a tarball called `ckad-ps2.tar` from the local `ckad:ps2` image.

```
docker save internal-reg.io/dev-fe/ckad:ps2 --output ckad-ps2.tar
podman save internal-reg.io/dev-fe/ckad:ps2 --output ckad-ps2.tar
```

### Task 8

**This task can only be completed if you have successfully completed Task 1.**

Delete the local `alpine:3.15.4` image.

```
buildah rmi alpine:3.15.4 
docker image rm alpine:3.15.4
podman image rm alpine:3.15.4
```

### Task 9

Build a new image called `ckad:ps3` using `buildfile.ckad` in the `Buildfiles` folder and using the app in the `dev/ckad` folder. Tag it so it can be pushed to the `ckad-dev` repo in the `internal-reg.io` registry.

```
buildah build -t internal-reg.io/ckad-dev/ckad:ps3 -f ./Buildfiles/buildfile.ckad ./dev/ckad
docker image build -t internal-reg.io/ckad-dev/ckad:ps3 -f ./Buildfiles/buildfile.ckad ./dev/ckad
podman image build -t internal-reg.io/ckad-dev/ckad:ps3 -f ./Buildfiles/buildfile.ckad ./dev/ckad
```
