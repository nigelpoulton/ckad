# Test yourself tasks

Complete the following tasks in your own time.

## Restrictions

The following restrictions will help simulate exam conditions.

- Only use approved websites (`kubernetes.io/docs`, `kubernetes.io/blog`, `github.com/kubernetes` and `helm.sh`)
- Do not refer to any other external notes
- Do not make any hand-written notes

The full list of exam requirements and restrictions can be found [here](https://docs.linuxfoundation.org/tc-docs/certification/lf-candidate-handbook/exam-rules-and-policies).

## Pre-requisites

If you haven't already done so, clone the repo with the following command.

```
git clone https://github.com/nigelpoulton/ckad.git
```

Run the following command to change into the correct directory. The tasks expect your terminal to be in this directory. If it isn't, the answers won't work.

```
cd ckad/5\ Services\ and\ Networking/3\ Provide\ and\ Troubleshoot\ Access\ to\ Applications\ via\ Services/
```

**NOTE:** This will set a very long working directory. If this bothers you (it bothers me) you can tell Linux just to display your current directory without the path by running this command. It will only change your prompt for your current shell session. Results of this will vary depending on your OS and terminal.

```
PS1="\W\$ "
```

## Answers

Answers to each task can be found in the `answers.md` file.

## Tasks

### Task 1

Your organisation is deploying a new application. External clients need to be able to reach the app via all cluster nodes on TCP port `31111`. Internal clients (other apps on the same Kubernetes cluster) need to be able to reach it on TCP port `9001`. The app itself listens on TCP port `8080`. The application will be tagged with the following labels:

```
app=tickets
club=safc
```

**Task**

Create and deploy a Kubernetes Service object that allows external and internal clients to reach the app. Be sure to call the new Service **svc-safc** and the YAML file **safc.yml**.


### Task 2

Before attempting this task, you must deploy the Service in the `svc.yml` file. Do this by running the following command. Be sure to run it form within the `5 Services and Networking/3 Provide and Troubleshoot Access to Applications via Services` directory of the cloned repo.

`kubectl apply -f svc.yml`

Verify the Service was created with the following command. You may also have a Service called `Kubernetes` and the `CLUSTER-IP` value will be different in your cluster.

```
kubectl get svc
NAME           TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)    AGE
internal-app   ClusterIP   10.43.4.136   <none>        9000/TCP   3m25s
```
=============

Your teams are in the process of creating environments that support IPv6.

**Task**

Update and re-deploy the `svc.yml` file for the `internal-app` Service so that it will create IPv4 and IPv6 addresses if the cluster supports both.

When completed, a `kubectl describe` on the Service should show:

`IP Family Policy:  PreferDualStack`

### Task 3

In order to complete this task, you must have created and deployed the `svc-safc` Service from *Task 1*. 

The original requirements for the SAFC ticketing app were incorrect and the application running in the container will operate on port 80 instead of port 8080.

**Task**

Update the `svc-safc` Service to mach the new application requirements.

### Clean up

The following commands will clean-up any objects deployed as part of these tasks. Be sure to run the commands from the `5 Services and Networking/3 Provide and Troubleshoot Access to Applications via Services` directory.

```
kubectl delete svc svc-safc internal-app
```