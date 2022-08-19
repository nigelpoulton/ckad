# Answers

The following lists each question and associated answer.

### Task 1

Your organisation is deploying a new application. External clients need to be able to reach the app via all cluster nodes on TCP port `31111`. Internal clients (other apps on the same Kubernetes cluster) need to be able to reach it on TCP port `9001`. The app itself listens on TCP port `8080`. The application will be tagged with the following labels:

```
app=tickets
club=safc
```

**Task**

Create and deploy a Kubernetes Service object that allows external and internal clients to reach the app. Be sure to call the new Service **svc-safc** and the YAML file **safc.yml**.

**Answer**

Grab a Service YAML file form the Kubernetes docs website (ideally a NodePort Service) and edit it to have the following configuration. Be sure to name the file **safc.yml**.

```
apiVersion: v1
kind: Service
metadata:
  name: svc-safc
spec:
  type: NodePort
  ports:
  - nodePort: 31111
    port: 9001
    targetPort: 8080
  selector:
    app: tickets
    club: safc
```

Save your changes.

Deploy the Service with the following command. Be sure to run the command from the `5 Services and Networking/3 Provide and Troubleshoot Access to Applications via Services` directory.

```
kubectl apply -f safc.yml
```

Run the following command to verify the Service was created correctly. The important configurations are highlighted.

```
kubectl get svc
NAME         TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
svc-safc     NodePort    10.43.174.75   <none>        9001:31111/TCP   5m

kubectl describe svc svc-safc
Name:                     svc-safc                <<====== Name must be svc-safc
Namespace:                default
Labels:                   <none>
Annotations:              <none>
Selector:                 app=tickets,club=safc   <<====== Selector must match this
Type:                     NodePort                <<====== Type must be NodePort
<SNIP>
Port:                     <unset>  9001/TCP       <<====== Port must be 9001
TargetPort:               8080/TCP                <<====== TargetPort must be 8080
NodePort:                 <unset>  31111/TCP      <<====== NodePort must be 31111
<SNIP>
```

### Task 2

Before completing this task you must have successfully deployed the Service defined in the `svc.yml` file.

Your teams are in the process of creating environments that support IPv6.

**Task**

Update and re-deploy the `svc.yml` file for the `internal-app` Service so that it will create IPv4 and IPv6 addresses if the cluster supports both.

When completed, a `kubectl describe` on the Service should show:

`IP Family Policy:  PreferDualStack`

**Answer**

Edit the `svc.yml` file and add the following line as shown in the YAML file.

`spec.ipFamilyPolicy: PreferDualStack`

This location is shown below.

```
apiVersion: v1
kind: Service
metadata:
  name: internal-app
spec:
  ipFamilyPolicy: PreferDualStack   <<===== Add this line
  <SNIP>
```

Save you changes and re-deploy the Service with the following command.

`kubectl apply -f svc.yml`

Verify the configuration was updated successfully by running the following `kubectl describe` command. The output shows the important line.

```
kubectl describe svc internal-app
Name:              internal-app
Namespace:         default
Labels:            <none>
Annotations:       <none>
Selector:          course=ckad
Type:              ClusterIP
IP Family Policy:  PreferDualStack   <<===== This line must say "PreferDualStack"
<SNIP>
```

### Task 3

In order to complete this task, you must have created and deployed the `svc-safc` Service from *Task 1*. 

The original requirements for the SAFC ticketing app were incorrect and the application running in the container will operate on port 80 instead of port 8080.

**Task**

Update the `svc-safc` Service to match the new application requirements.

**Answer**

Edit the `safc.yml` file with the following configuration update.

```
apiVersion: v1
kind: Service
metadata:
  name: svc-safc
spec:
  type: NodePort
  ports:
  - nodePort: 31111
    port: 9001
    targetPort: 80    <<===== This line was originally 8080 and needs updating to be 80
<SNIP>
```

Save your changes and re-deploy with the following command.

`kubectl apply -f safc.yml`

Verify the update worked with the following command.

```
kubectl describe svc svc-safc
Name:                     svc-safc
Namespace:                default
Labels:                   <none>
Annotations:              <none>
Selector:                 app=tickets,club=safc
Type:                     NodePort
IP Family Policy:         SingleStack
IP Families:              IPv4
IP:                       10.43.174.75
IPs:                      10.43.174.75
Port:                     <unset>  9001/TCP
TargetPort:               80/TCP              <<===== Be sure this line shows 80 and NOT 8080
<SNIP>
```