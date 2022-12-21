# Answers

The following lists each question and associated answer.


### Task 1

The `be-deploy.yml` file defines a Deployment called "store-backend" that relies on a separate database.

Add a second container to the Pod template and ensure it runs before the main app container starts. 

Name this additional container "check-db", base it on the `postgres:9.6.5` image, and configure it with the following command block.

```
command: ['sh', '-c', 
  'until pg_isready -h postgres -p 5432; 
  do echo waiting for database; sleep 2; done;']
```

Deploy the Deployment and confirm the main app container does not sart.

**Answer**

Add the following block to the `.spec.template.spec` section of the `be-deploy.yml` YAML file. This block should be nested at the same level as the existing `containers` block.

```
      initContainers:
      - name: check-db
        image: postgres:9.6.5
        command: ['sh', '-c', 
          'until pg_isready -h postgres -p 5432; 
          do echo waiting for database; sleep 2; done;']
```

Save your changes.

Deploy the Deployment with the following command. Be sure to run the command from the `1 Application Design and Build/4 Understanding Multi-container Pod Design Patterns` directory.

```
kubectl apply -f be-deploy.yml
```

Run the following command and ensure the `READY` column is showing `0/1`.

```
kubectl get pods
```


### Task 2

You must have successfully completed Task 1 before you attempt this task.

You have a Deployment running called "store-backend" that has a single Pod. Check the logs of the "check-db" container of the "store-backend" Pod. If the logs show "waiting for database" you have successfully completed the task.

**Answer**

Run the following command to show the logs from the init container called "check-db". It assumes you named the init container "check-db". You'll need to substitute the Pod name for the Pod name in your environment.

```
kubectl logs <pod-name> -c check-db
```


### Task 3

The `db-deploy.yml` file defines a Deployment called "store-db". Add the following container as a sidecar and deploy it to your cluster.

Ensure the Deployment comes up and both Pods execute side-by-side.

```
- name: db-admin
  image: adminer
  ports:
    - containerPort: 8080
```

**Answer**

Add the container config to the `.spec.template.spec.containers` section of the `db-deploy.yml` YAML file. This block should be nested at the same level as the "db" container as shown below.

```
    spec:
      containers:
        - name: db
        <Snip>
        - name: db-admin
          image: adminer
          ports:
            - containerPort: 8080
```

Save your changes.

Deploy it with the following command. Be sure to run the command from the `1 Application Design and Build/4 Understanding Multi-container Pod Design Patterns` directory.

```
kubectl apply -f db-deploy.yml
```

The following command will show that both containers are running together in the same Pod. Besure to substitute the name of the Pod in your environment.

```
kubectl get pods <pod-name>
```
