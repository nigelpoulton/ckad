There is a typo in the Dockerfile (`Buildfiles/Containerfile1`). 
- `FROM ode:lts-alpine` should be `FROM node:lts-alpine`

The command to build the image is any of the following:

These assume the command is ran form the `Task-1` directory.

```
buildah build -t ckad:pluralsight -f ./Buildfiles/Containerfile1 ./App
docker image build -t ckad:pluralsight -f ./Buildfiles/Containerfile1 ./App
podman image build -t ckad:pluralsight -f ./Buildfiles/Containerfile1 ./App
```