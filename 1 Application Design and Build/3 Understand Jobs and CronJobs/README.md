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

There's a Job defined in the `parallel.yml` file. Configure it so that a total of 8 Pods run, two at a time.

Deploy the Job and the check the logs from any of the Pods and ensure "Lets smash the CKAD" is displayed.


### Task 2

Reconfigure the Job defined in `parallel.yml` so that the Job controller will stop attempting retries after 10 failures.


### Task 3

Reconfigure the Job defined in `parallel.yml` so that the job will be terminated if it's still running after 45 seconds. 

Re-deploy the Job and ensure the updated configuration terminates the Job after 45 seconds.


### Task 4

There's a CronJob defined in the `scheduled.yml` file. Re-configure it so that the job runs every 2 two minutes. 

Deploy the file and ensure the schedule works as expected.

Remember to only use the `kubernetes.io` website if you need help.


### Task 5

Reconfigure the CronJob defined in `scheduled.yml` so that new Pods will not start if existing ones are still running.

Re-deploy the updated configuration.


### Clean up

The following comands will cleanup any Jobs and CronJobs from these tasks. Be sure to run the commands from the `1 Application Design and Build/3 Understand Jobs and CronJobs` directory.

```
kubectl delete -f parallel.yml -f scheduled.yml
```
