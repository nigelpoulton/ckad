# Answers

The following lists each question and associated answer.

### Task 1

1. Display admission controllers that are enabled in the cluster by opening the appropriate yaml file.

```bash
k config set-context --current --namespace=kube-system
cat /etc/kubernetes/manifests/kube-apiserver.yaml | grep admission-plugins
```

2. Display admission controllers by using `kubectl describe`.

```bash
k describe pod kube-apiserver-master 
k describe pod kube-apiserver-master | grep enable-admission-plugins
```

3. Enable the `NamespaceAutoProvision` admission controller for the cluster.

```bash
nano /etc/kubernetes/manifests/kube-apiserver.yaml 
# ctrl + x to save
```

4. Invoke the `kube-apiserver` binary's help documentation for `enable-admission-plugins`. 

```bash
# Following command assumes you're already in the kube-system namespace
k get pods

# Locate name of kube-apiserver pod and use it below
k exec -it kube-apiserver-master -n kube-system -- kube-apiserver -h | grep enable-admission-plugins
```


### Task 2

