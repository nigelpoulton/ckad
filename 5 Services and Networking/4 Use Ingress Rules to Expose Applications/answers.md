# Answers

The following lists each question and associated answer.

### Task 1

Your environment has two Services deployed and waiting for Pods.

**Task**

Create and deploy an Ingress object called `app.com.` Configure it to route HTTP traffic to the two Services. Traffic arriving on the path `web.app.com` should be sent to the `frontend` Service and traffic arriving on the path `admin.app.com` should be sent to the `frontend` Service.

**Answer**

Copy an Ingress YAML from docs.kubernetes.io and edit it to look like the following. Name the file `ing.yml`.

The important bits are highlighted. It's recommended to copy a YAML file that already contains some host rules to make editing simpler.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app.com
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  rules:
  - host: web.app.com        <<===== The host must be web.app.com
    http:
      paths:
      - path: /              <<===== The path must be "/"
        pathType: Prefix     <<===== Type must be prefix
        backend:
          service:
            name: frontend   <<===== The name of the Service must be "frontend"
            port:
              number: 80     <<===== The port number must be 80 for the frontend Service
  - host: admin.app.com      <<===== The host for this block must be admin.app.com
    http:
      paths:
      - path: /              <<===== The path must be "/"
        pathType: Prefix     <<===== Type must be prefix
        backend:
          service:
            name: backend    <<===== The name of the Service must be "backend"
            port:
              number: 9000   <<===== The port number must be 9000
```

Save the file and deploy it with the following command.

`kubectl apply -f `

Run the following `kubectl get` command and ensure the Ingress object is successfully deployed.

```
kubectl get ing
NAME      CLASS   HOSTS                       ADDRESS   PORTS   AGE
app.com   nginx   web.app.com,admin.app.com             80      3s
```

Run a `kubectl describe ing app.com` command and ensure the rules are as follows. Be sure you got the ports right.

```
kubectl describe ing app.com
Name:             app.com
<SNIP>
Rules:
  Host           Path  Backends
  ----           ----  --------
  web.app.com
                 /   frontend:80 (<none>)
  admin.app.com
                 /   backend:9000 (<none>)
<SNIP>
```