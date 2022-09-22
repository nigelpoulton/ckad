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

Run the following command to change into the correct directory. The tasks expect your terminal to be in this directory. 

```
$ cd ckad/2\ Application\ Deployment/3\ Understand\ Deployments\ and\ How\ to\ Perform\ Rolling\ Updates/
```

**NOTE:** This will set a very long working directory. If this bothers you (it bothers me) you can tell Linux just to display your current directory without the path by running this command. It will only change your prompt for your current shell session.

```
$ PS1="\W\$ "
```

## Answers

Answers to the question tasks can be found in the `answers.md` file.

## Questions

### Task 1

1. Create a namespace named `dev`.

2. Create a Deployment named `web-app` that uses the `nginx:1.17.8-alpine` image and creates `6` Pods in the `dev` namespace. Add the `--save-config` flag.

3. Verify all the Pods are running.

4. Edit the Deployment and change the image to `nginx:1.23.1-alpine`.

5. Add an annotation named `kubernetes.io/change-cause` with a value of `Changed to nginx:1.23.1` to the Deployment.

6. List the value of the `kubernetes.io/change-cause` annotation (display this specific annotation).

7. Verify all Pods are running and that the previous Pods are terminated using `kubectl describe` to view events.

8. List the Deployment's rollout status.

### Task 2

1. Create a Deployment file named `biz-app.deploy.yml`. The Deployment should be named `biz-app`, use an image of `nginx:1.17.8-alpine`, and create `4` Pods.

2. Create the Deployment and add the `--save-config` flag when running the command.

3. Verify all the Pods are running.

4. Edit `biz-app.deploy.yml` and change the image to `nginx:7.85.1-alpine`. Apply the changes and use the `--record` flag.

5. List the Pods but notice there's a problem. View the `biz-app` Deployment's rollout status and rollout history.

6. Rollback to the previous Deployment version. List the Deployment history again.

7. Verify that the previous deployment is running by checking the Deployment's image value (it should be `nginx:1.17.8` now).