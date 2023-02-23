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
$ cd ckad/1\ Application\ Design\ and\ Build/3\ Understand\ Jobs\ and\ CronJobs/
```

**NOTE:** This will set a very long working directory. If this bothers you (it bothers me) you can tell Linux just to display your current directory without the path by running this command. It will only change your prompt for your current shell session.

```
$ PS1="\W\$ "
```

## Answers

Answers to each task can be found in the `answers.md` file.

## Tasks

### Task 1

The `be-deploy.yml` file defines a Deployment called "store-backend" that relies on a separate database.

Add a second container to the Pod template and ensure it runs before the main app container starts. 

Name this additional container "check-db", base it on the `postgres:9.6.5` image, and configure it with the following command block.

```
command: ['sh', '-c', 
  'until pg_isready -h postgres -p 5432; 
  do echo waiting for database; sleep 2; done;']
```

Deploy the Deployment and confirm the main app container does not start.


### Task 2

You must have successfully completed Task 1 before you attempt this task.

You have a Deployment running called "store-backend" that has a single Pod. Check the logs of the "check-db" container of the "store-backend" Pod. If the logs show "waiting for database" you have successfully completed the task.


### Task 3

The `db-deploy.yml` file defines a Deployment called "store-db". Add the following container as a sidecar and deploy it to your cluster.

Ensure the Deployment comes up and both Pods execute side-by-side.

```
- name: db-admin
  image: adminer
  ports:
    - containerPort: 8080
```


### Clean up

The following comands will cleanup any objects deployed as part of these tasks. Be sure to run the commands from the `1 Application Design and Build/4 Understanding Multi-container Pod Design Patterns` directory.

```
kubectl delete -f be-deploy.yml -f db-deploy.yml
```
