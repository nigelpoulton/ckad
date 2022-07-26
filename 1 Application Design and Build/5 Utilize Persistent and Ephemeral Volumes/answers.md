# Answers

Below are the tasks with associated answers.


### Task 1

Edit the empty `sc.yml` file to define a new StorageClass with the following configuration.

Name: sc1
Reclaim policy: Retain
Expandable: True
Volume Binding Mode: Immediate

Save your changes, deploy it to your cluster, and verify it was created correctly.

**Answer**

Edit the `sc.yml` file so it looks like this.

You'll need to substitute the block storage plugin appropriate for your lab environment. We list some below.

```
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: sc1
provisioner: <insert-your-stoarge-plugin-name>
reclaimPolicy: Retain
allowVolumeExpansion: true
volumeBindingMode: Immediate
```

Plugin for AWS: ebs.csi.aws.com
Plugin for Azure: disk.csi.azure.com
Plugin for GCP: pd.csi.storage.gke.io
Plugin for Digital Ocean: dobs.csi.digitalocean.com
Plugin for Linode: linodebs.csi.linode.com
Plugin for Docker Desktop: docker.io/hostpath 
For a complete list, see [here](https://kubernetes-csi.github.io/docs/drivers.html)

Save your changes and deploy the object with the following command. Be sure to run it form the `1 Application Design and Build/5 Utilize Persistent and Ephemeral Volumes` directory.

```
kubectl apply -f sc.yml
```

Verify it created properly with this command.

```
kubectl get sc
```

### Task 2

There's a Pod in the `ckad` Namespace that's stuck in the pending state. Troubleshoot and resolve the issue.

When resolved, the Pod should start.

**Answer**

The Pod is stuck in the pending phase because it's configured to use a volume based on a PVC called `pvc1`. However, the PVC does not exist. You need to create the PVC so the Pod can start.

Run the following command to set your context to work in the `ckad` Namespace.

```
kubectl config set-context --current --namespace=ckad
```

Describe the Pod to see the issue. It is displayed in the `Events` section at the bottom of the `kubectl describe` output.

```
kubectl describe pod volpod
```

Deploy the missing PVC from the `pvc.yml` file with the following command. Be sure to run it form the `1 Application Design and Build/5 Utilize Persistent and Ephemeral Volumes` directory.

```
kubectl apply -f pvc.yml
```

Verify that the Pod now starts with the following command.

```
kubectl get pods
```


### Task 3

There's an app defined in the `app.yml` file in your working directory. The app is deployed and the Pod is stuck in the pending phase. Troubleshoot and resolve the issue.

When the issue is resolved the Pod should enter the running phase.

**Answer**

The Pod won't start because the PVC it is using (pvc2) is in the incorrect Namespace -- the Pod is in the "pluralsight" but the PVC is in the "ckad" Namespace.

Delete the instance of "pvc2" in the "ckad" Namespace.

```
kubectl delete pvc pvc2 -n ckad
```

Edit the `app.yml` file and update the `metadata.namespace` field to be "pluralsight". Save your changes and re-deploy the PVC with the following command. It will only work if you run it form the `1 Application Design and Build/5 Utilize Persistent and Ephemeral Volumes` directory.

```
kubectl apply -f app.yml
```

Verify the Pod enters the running phase.

```
kubectl get pods -n pluralsight
```

