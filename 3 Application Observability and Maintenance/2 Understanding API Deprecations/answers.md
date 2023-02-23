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

This uses the `dev` namespace so create it using `kubectl create ns dev`.

1. Display the Kubernetes major and minor versions.

```bash
k config set-context --current --namespace=dev
k version -o yaml
```

2. Display all API groups and versions for the cluster. Sort by kind.

```bash
k api-resources --sort-by=kind
```

3. Display the API group and version for ingresses.

```bash
k explain ingresses
```

4. Display available versions for the autoscaling API group.

```bash
k api-versions | grep autoscaling
```

5. Display the preferred version for the autoscaling API group.

```bash
k proxy 8001 & curl localhost:8001/apis/autoscaling
```

6. List any alpha versions enabled on the cluster.

```bash
# Note that you may need to run sudo
cat /etc/kubernetes/manifests/kube-apiserver.yaml | grep runtime-config
```

