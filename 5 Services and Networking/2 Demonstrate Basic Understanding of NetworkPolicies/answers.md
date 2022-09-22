# Answers

The following lists each question and associated answer.


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

**Answer**

Grab a NetworkPolicy YAML file form the Kubernetes docs website and edit it to have the following configuration. Choose and valid filename.

```
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: febe
spec:
  podSelector:
    matchLabels:
      app: be
  policyTypes:
    - Ingress
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: fe
      ports:
        - protocol: TCP
          port: 5432
```

Save your changes.

Deploy the NetworkPolicy with the following command. Be sure to run the command from the `5 Services and Networking/2 Demonstrate Basic Understanding of NetworkPolicies` directory. Be sure to replace `file.yml` with the name of the file in your environment.

```
kubectl apply -f file.yml
```

Run the following commands to verify the NetworkPolicy was correctly created.

```
kubectl get netpol
kubectl describe netpol febe
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

**Answer to task 2.1**

Use the following command to delete the existing `febe` NetworkPolicy in the `default` Namespace.

`kubectl delete netpol febe`

Edit your NetworkPolicy YAML file and add `spec.namespace=ps`. The following snippet shows where to put this.

```
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: febe
  namespace: ps    <<==== ADD THIS LINE
```

Once you've saved your changes, deploy the updated NetworkPolicy with the following command. Be sure to replace `file.yml` with the name of the file in your environment. 

`kubectl apply -f file.yml`

Use the following commands to verify the NetworkPolicy is now deployed to the `ps` Namespace and no longer deployed to the `default` Namespace.

```
kubectl get netpol -n ps
kubectl get netpol -n default
```

**Answer to task 2.2**

Use the following command to edit the live `febe` NetworkPolicy.

`kubectl edit netpol febe -n ps`

Add the bottom three lines of the following snippet to the `spec.ingress` section.

```
  - from:
    - podSelector:
        matchLabels:
          app: fe
      namespaceSelector:                      <<=== ADD THIS LINE
        matchLabels:                          <<=== ADD THIS LINE
          kubernetes.io/metadata.name: ps     <<=== ADD THIS LINE
```

Sve your changes and verify the new rule with the following command.

`kubectl describe netpol febe -n ps`

The following rule should be displayed.

```
    From:
      NamespaceSelector: kubernetes.io/metadata.name=ps
      PodSelector: app=fe
```


