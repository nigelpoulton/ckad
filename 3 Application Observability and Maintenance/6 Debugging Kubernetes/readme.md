# Test yourself tasks

Complete the following tasks in your own time.

## Restrictions

The following restrictions will help emulate exam conditions.

- Only use approved websites (`kubernetes.io/docs`, `kubernetes.io/blog`, `github.com/kubernetes` and `helm.sh`)
- Use only your chosen product's man pages and other documentation installed by your products (E.g. `buildah --help`, `docker --help`, `podman --help`)
- Do not refer to any other notes
- Do not make any hand-written notes

The full list of exam requirements and restrictions can be found [here](https://docs.linuxfoundation.org/tc-docs/certification/lf-candidate-handbook/exam-rules-and-policies).

## Pre-requisites

The images and containers you'll work with are all Linux-based. It's recommended to test yourself in a Linux-based environment. This is because the exam environment is Linux-based.

You can have any of the following tools installed for use.

- Buildah
- Docker
- Podman

If you haven't already done so, clone the repo with the following command.

```
$ git clone https://github.com/nigelpoulton/ckad.git
```

Run the following command to change into the correct directory. The tasks expect your terminal to be in this directory. If it isn't, the answers won't work.

```
$ cd ckad/3\ Application\ Observability\ and\ Maintenance/6\ Debugging\ Kubernetes/
```

**NOTE:** This will set a very long working directory. If this bothers you (it bothers me) you can tell Linux to display your current directory without the path by running this command. It will only change your prompt for your current shell session.

```
$ PS1="\W\$ "
```

## Answers

Answers to the question tasks can be found in the `answers.md` file.

## Questions

### Task 1

1. Run a `busybox` Pod named `busyapp` in the `dev` namespace. Pass a command value of `false` to the Pod as it starts up.

2. Output the yaml for the Pod and determine if it has started and its state.

3. List all the events for the `dev` namespace and locate any issues.

4. View busyapp Pod events only.

5. Create a debug copy of the `busyapp` Pod and shell into it using an `sh` shell. List the folders in the current directory.

6. Exit out of the container.

7. List the Pods and then delete them.
