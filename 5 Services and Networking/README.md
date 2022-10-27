# Readme

This course has the following 3 modules:

2. Demonstrate Basic Understanding of NetworkPolicies
3. Provide and Troubleshoot Access to Applications via Services
4. Use Ingress Rules to Expose Applications

There's no item "1." in the list because of the way lessons are numbered internally. So don't worry, nothing is missing.

## Test yourself tasks

The folder for each module contains all tasks, answers to tasks, and accompanying code.

## Code

Some modules have a `code` folder for any code accompanying that module. Not all modules have accompanying code.

## Local cluster for testing NetworkPolicies

The following commands will build a local K8s cluster that supports NetworkPolicies.

- It's intended for testing purposes. 
- It requires you to have Docker Desktop and k3d installed. 
- This is included to help you test and play with NetworkPolicies in a local dev environment.
- If it stops working in the future, I won't be prividing fixes


```
k3d cluster create netpol --k3s-arg "--flannel-backend=none@all:*" --k3s-arg "--disable-network-policy@all:*" --k3s-arg " --disable=traefik@all:*"  --k3s-arg "--cluster-cidr=192.168.0.0/16@all:*"  --k3s-arg "--tls-san=0.0.0.0@all:*"
```

`kubectl apply -f https://projectcalico.docs.tigera.io/manifests/tigera-operator.yaml`

`kubectl apply -f https://projectcalico.docs.tigera.io/manifests/custom-resources.yaml`

`kubectl get pods --all-namespaces --watch`

It may take a few minutes for all cluster services to be ready.