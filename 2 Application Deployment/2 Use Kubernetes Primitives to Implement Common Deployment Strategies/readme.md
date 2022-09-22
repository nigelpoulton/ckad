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
$ cd ckad/2\ Application\ Deployment/2\ Use\ Kubernetes\ Primitives\ to\ Implement\ Common\ Deployment\ Strategies/
```

**NOTE:** This will set a very long working directory. If this bothers you (it bothers me) you can tell Linux just to display your current directory without the path by running this command. It will only change your prompt for your current shell session.

```
$ PS1="\W\$ "
```

## Answers

Answers to the question tasks can be found in the `answers.md` file.

## Questions

### Task 1

1. Create a Deployment named `nginx-deploy`. The Deployment should use the `nginx:stable-alpine` image and create `4` replicas.

2. Create a `NodePort` service named `nginx-svc` and associate it with the Pods created by the `nginx-deploy` Deployment. The service should expose port `9000` and a target port of 80.

3. Edit the `nginx-deploy` Deployment and change the number of replicas to `6`.

4. Ensure the service is associated with the `nginx-deploy` Pods by running the following command and checking that it returns HTML content. Replace `<node-port-value>` with the `nginx-svc` node port value.

`curl localhost:<node-port-value>`

### Task 2

The current folder contains Kubernetes YAML files to create Blue/Green deployments and services. Images you'll use are also available on the system. View the files in the current folder using:

`ls -l`

1. View the selectors in the `blue.svc.yml` and `green.svc.yml` files. Add a `role: blue` selector to `public.svc.yml`.

2. Create the resources in Kubernetes using the YAML files available in the current folder. Run the following command to verify that the `blue` Pods are accessible using the public service.

    `curl localhost`

3. Change the public service's `role` selector from `blue` to `green`. Run the following command to verify that the `green` Pods are accessible using the public service.

    `curl localhost`

### Task 3

Your system has `ckad:stable` and `ckad:canary` images available and the current folder contains YAML files to be used to complete the task.

1. Create resources in Kubernetes using the YAML files available in the current folder. List all the running Pods.

2. Scale the `stable` Deployment to `6` replicas and the `canary` Deployment to `2` replicas.

3. Modify the `canary` Deployment so that the Service will match it and direct traffic to the Pods.

4. Create a temporary Pod named `temp-pod` as an interactive TTY. Use the `alpine` image for the Pod and set `restart` to `Never`. 

5. Install `curl` into the `temp-pod` container using `apk add curl`, and run the following command until the output from a `canary` Pod is displayed: 

    `curl localhost`