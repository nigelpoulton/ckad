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
cd ckad/5\ Services\ and\ Networking/2\ Demonstrate\ Basic\ Understanding\ of\ NetworkPolicies/
```

**NOTE:** This will set a very long working directory. If this bothers you (it bothers me) you can tell Linux just to display your current directory without the path by running this command. It will only change your prompt for your current shell session. Results of this will vary depending on your OS and terminal.

```
PS1="\W\$ "
```

## Answers

Answers to each task can be found in the `answers.md` file.

## Tasks

**It is vital you run this command to create the `ps` Namespace before continuing with the tasks.** 

```
kubectl create namespace ps
```

### Task 1

You have an app with front-end and back-end services. The front-end Pods are configured with the `app=fe` label and the back-end Pods are configured with the `app=be` label.

**Task**

Create and deploy a new NetworkPolicy called `febe` to the back-end Pods that allows them to receive traffic from the front-end Pods on port 5432.

When correctly deployed, a `kubectl describe` command against the NetworkPolicy will show the following rule.

```
Spec:
  PodSelector:     app=be
  Allowing ingress traffic:
    To Port: 5432/TCP
    From:
      PodSelector: app=fe
```

### Task 2

You must have successfully completed Task 1 before you attempt this task.

You have a NetworkPolicy called `febe` that is already deployed. However, it is deployed to the wrong Namespace and the selector is wrong.

**Task 2.1**

Perform all actions necessary to deploy the `febe` NetworkPolicy to the correct `ps` Namespace.

When this task is complete, there should be a single NetworkPolicy called `febe` in the `ps` Namespace and no NetworkPolicies in the `default` Namespace.

**Task 2.2**

Re-configure the `febe` NetworkPolicy so that it only allows ingress traffic from Pods with the `app=fe` selector that are also in the `ps` Namespace.

When this task is complete, a `kubectl describe` on the `febe` NetworkPolicy should shows a single FROM rule with one line for the app=fe selector and another line for the Namespace selector.


### Clean up

The following commands will clean-up any objects deployed as part of these tasks. Be sure to run the commands from the `5 Services and Networking/2 Demonstrate Basic Understanding of NetworkPolicies` directory.

```
kubectl delete netpol febe -n ps
kubectl delete ns ps
```