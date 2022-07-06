# Test yourself tasks

Complete the following tasks in your own time.

## Restrictions

The following restrictions will help emulate the exam conditions.

- Only use approved websites (`kubernetes.io/docs`, `kubernetes.io/blog`, `github.com/kubernetes` and `helm.sh`)
- Use only your chosen product's man pages and other documentation installed by your products (E.g. Buildah, Docker, Podman)
- Do not refer to any other notes
- Do not make any hand-written notes

The full list of exam requirements and restrictions can be found [here](https://docs.linuxfoundation.org/tc-docs/certification/lf-candidate-handbook/exam-rules-and-policies).

## Pre-requisites

The images and containers you'll work with are all Linux-based. It's recommended to test yourself in a Linux-based environment.

You can have any of the following tools installed for use.

- Buildah
- Docker
- Podman

If you haven't already done so, clone the repo with the following command and change into the `ckad/1 Application Design and Build/2 Define build and modify container images/Tasks` folder.

## Tasks

### Task 1

Run the following command to change into the `Task1` directory.

```
cd Task1
```

**Task**

The `App` folder has the code for a web front-end app based on Node.js.

Build the app into an OCI image called `ckad:pluralsight` using the instructions in the `Containerfile1` file in the `Buildfiles` folder.

Resolve any issues that arise.

When successfully completed, you should have a local image called `ckad:pluralsight`.

### Task 2

Run the following command to change into the `Task2` directory.

```
cd ../Task2
```


**Task**

You must have completed the previous task before attempting this one.

Convert the local `ckad:pluralsight` image into an OCI archive and compress it into a zip file called ckad-image.zip. 

The command to compress the archive is `gzip > ckad-image.zip`.

When completed successfully, you should have a new file in your current directory called `ckad-image.zip`.

### Task 3

**Task**

You must have completed Task 1 before attempting this one.

The local `ckad:pluralsight` image is ready for production. Update it so it's ready to be pushed to the `nigelpoulton/ckad:prod` repository on Docker Hub.

Once you've done this, delete the original `ckad:pluralsight` iamge, but do not delete the `nigelpoulton/ckad:prod` image.

When you've completed the task, you should have the `nigelpoulton/ckad:prod` image on your local machine and the `ckad:pluralsight` should no longer be present.

### Clean up

Use the following command to delete the `ckad-image.zip` file. Be sure to run the command from the `Task-2` directory.


```
rm ckad-image.zip
```

Run any of the following commands to delete the local `nigelpoulton/ckad:prod` image.

```
buildah rmi nigelpoulton/ckad:prod
docker image rm nigelpoulton/ckad:prod
podman image rm nigelpoulton/ckad:prod
```