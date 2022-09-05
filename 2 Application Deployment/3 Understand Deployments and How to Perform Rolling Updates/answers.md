# Answers

The following lists each question and associated answer.

### Task 1

1. Create a namespace named `dev`.

  ```
  k create ns dev
  k config set-context --current --namespace=dev
  ```

2. Create a Deployment named `web-app` that uses the `nginx:1.17.8-alpine` image and creates `6` Pods in the `dev` namespace. Add the `--save-config` flag.

  ```
  k create deploy web-app --image=nginx:1.17.8-alpine --replicas=6
  ```

3. Verify all the Pods are running.

  ```
  k get pods
  ```

4. Edit the Deployment and change the image to `nginx:1.23.1-alpine`.

  ```
  KUBE_EDITOR="nano" k edit deploy web-app

  OR
  
  k set image deploy web-app nginx=nginx:1.23.1-alpine
  ```

5. Add an annotation named `kubernetes.io/change-cause` with a value of `Changed to nginx:1.23.1` to the Deployment.

  ```
  k annotate deploy web-app kubernetes.io/change-cause="Change to nginx:1.23.1" --overwrite=true
  ```

6. List the value of the `kubernetes.io/change-cause` annotation (display this specific annotation).

  ```
  k get deploy web-app -o json | jq '.metadata.annotations."kubernetes.io/change-cause"'
  ```

7. Verify all Pods are running and that the previous Pods are terminated using `kubectl describe` to view events.

  ```
  k describe deploy web-app
  ```

8. List the Deployment's rollout status.

  ```
  k rollout status deploy web-app
  ```

### Task 2

1. Create a Deployment file named `biz-app.deploy.yml`. The Deployment should be named `biz-app`, use an image of `nginx:1.17.8-alpine`, and create `4` Pods.

  ```
  k config set-context --current --namespace=dev
  k create deploy biz-app --image=nginx:1.17.8-alpine --replicas=4 --dry-run=client -o yaml > biz-app.deploy.yml
  ```

2. Create the Deployment and add the `--save-config` flag when running the command.

  ```
  k create –f biz-app.deploy.yml --save-config
  ```

3. Verify all the Pods are running.

  ```
  k get pods
  ```

4. Edit `biz-app.deploy.yml` and change the image to `nginx:7.85.1-alpine`. Apply the changes and use the `--record` flag.

  ```
  nano biz-app.deploy.yml
  k apply –f biz-app.deploy.yml --record
  ```

5. List the Pods but notice there's a problem. View the `biz-app` Deployment's rollout status and rollout history.

  ```
  k get pods
  k rollout status deploy biz-app
  k rollout history deploy biz-app
  ```

6. Rollback to the previous Deployment version. List the Deployment history again.

  ```
  k rollout undo deploy biz-app
  k rollout history deploy biz-app
  ```

7. Verify that the previous deployment is running by checking the Deployment's image value (it should be `nginx:1.17.8` now).

  ```
  k get pods -o yaml | grep nginx:1.17.8-alpine
  
  OR
  
  # If we want the line count where nginx:1.17.8-alpine appears
  k get pods -o yaml | grep nginx:1.17.8-alpine | wc –l
  ```