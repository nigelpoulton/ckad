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

If you haven't already done so, clone the repo with the following command.

```
$ git clone https://github.com/nigelpoulton/ckad.git
```

Run the following command to change into the correct directory. The tasks expect your terminal to be in this directory. If it isn't, the answers won't work.

```
$ cd ckad/1\ Application\ Design\ and\ Build/5\ Utilize\ Persistent\ and\ Ephemeral\ Volumes/
```

**NOTE:** This will set a very long working directory. If this bothers you (it bothers me) you can tell Linux just to display your current directory without the path by running this command. It will only change your prompt for your current shell session.

```
PS1="\W\$ "
```

## Answers

Answers to each task can be found in the `answers.md` file.

## Tasks

**It is vital you run this command to setup the lab environment before continuing with the tasks.** The Pods will get stuck in the pending phase. This is expected.

```
kubectl apply -f lab-setup.yml
```

### Task 1

Edit the empty `sc.yml` file to define a new StorageClass with the following configuration.

Name: sc1
Reclaim policy: Retain
Expandable: True
Volume Binding Mode: Immediate

Save your changes, deploy it to your cluster, and verify it was created correctly.


### Task 2

There's a Pod in the `ckad` Namespace that's stuck in the pending state. Troubleshoot and resolve the issue.

When resolved, the Pod should start.


### Task 3

There's an app defined in the `app.yml` file in your working directory. The app is deployed and the Pod is stuck in the pending phase. Troubleshoot and resolve the issue.

When the issue is resolved the Pod should enter the running phase.


### Clean up

The following comands will cleanup any Jobs and CronJobs from these tasks. Be sure to run the commands from the `1 Application Design and Build/5 Utilize Persistent and Ephemeral Volumes` directory.

```
kubectl delete -f sc.yml -f lab-setup.yml
```