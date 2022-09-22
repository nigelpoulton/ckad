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

Run the following command to prepare the environment by deploying two Services. Be sure to run the command from the `5 Services and Networking/4 Use Ingress Rules to Expose Applications` directory.

`kubectl apply -f be.yml -f fe.yml`

### Task 1

Your environment has two Services deployed and waiting for Pods.

**Task**

Create and deploy an Ingress object called `app.com.` Configure it to route HTTP traffic to the two Services. Traffic arriving on the path `web.app.com` should be sent to the `frontend` Service and traffic arriving on the path `admin.app.com` should be sent to the `backend` Service.


### Clean up

The following commands will clean-up any objects deployed as part of these tasks. Be sure to run the commands from the `5 Services and Networking/3 Provide and Troubleshoot Access to Applications via Services` directory.

```
kubectl delete svc backend frontend
kubectl delete ing app.com
```
