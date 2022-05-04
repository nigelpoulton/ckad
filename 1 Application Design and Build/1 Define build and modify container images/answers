### Task 1

Build an OCI container image using the `Dockerfile.dev` build file. Make sure the image is tagged as `ckad:ps1'.

**Docker**
```
$ docker image build -t ckad:ps1 -f Dockerfile.dev .
```

**Buildah**
```
$ buildah build -t ckad:ps1 -f Dockerfile.dev
```

**Podman**
```
$ podman image build -t ckad:ps1 -f Dockerfile.dev .
```

### Task 2

Build an image called `ckad:ps2` using the default `Dockerfile` and tag it so it can be pushed to the `dev-fe` repo in the `internal-reg.io` registry.

**Docker**
```
$ docker image build -t internal-reg.io/dev-fe/ckad:ps2 .
```

**Buildah**
```
$ buildah build -t internal-reg.io/dev-fe/ckad:ps2 
```

**Podman**
```
$ podman image build -t internal-reg.io/dev-fe/ckad:ps2 .
```

### Task 3

Download a local copy of the official `alpine` image with the `3.15.4` tag.

**Docker**
```
$ docker image pull alpine:3.15.4
```

**Buildah**
```
$ buildah pull alpine:3.15.4
```

**Podman**
```
$ docker image pull alpine:3.15.4
```

### Task 4

**This task can only be completed if you have uccessfully completed Task 2.**

Create a tarball called `ckad-ps2.tar` from the local `ckad:ps2` image.

**Docker**
```
$ docker save internal-reg.io/dev-fe/ckad:ps2 --output ckad-ps2.tar
```

**Podman**
```
$ podman save internal-reg.io/dev-fe/ckad:ps2 --output ckad-ps2.tar
```

### Task 5

**This task can only be completed if you have uccessfully completed Task 1.**

Delete the local `alpine:3.15.4` image.

**Docker**
```
$ docker image rm alpine:3.15.4
```

**Buildah**
```
$ buildah rmi alpine:3.15.4 
```

**Podman**
```
$ podman image rm alpine:3.15.4
```

### Task 6

Build a new image called `ckad:ps3` using `buildfile.ckad` in the `dev/buildfiles` folder and using the app in the `dev/ckad` folder. Tag it so it can be pushed to the `ckad-dev` repo in the `internal-reg.io` registry.

**Docker**
```
$ docker image build -t internal-reg.io/ckad-dev/ckad:ps3 -f dev/buildfiles/buildfile.ckad dev/ckad
```

**Buildah**
```
$ buildah build -t internal-reg.io/ckad-dev/ckad:ps3 -f dev/buildfiles/buildfile.ckad dev/ckad
```

**Podman**
```
$ docker image build -t internal-reg.io/ckad-dev/ckad:ps3 -f dev/buildfiles/buildfile.ckad dev/ckad
```

