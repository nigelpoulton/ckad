# Answers

The following lists each question and associated answer.

### Task 1

1. Create a namespace named `dev` in Kubernetes.

  ```
  k create ns dev
  ```

2. Use Helm to add a repo named `bitnami` located at `http://chart.bitnami.com/bitnami`.

  ```
  helm repo add bitnami https://charts.bitnami.com/bitnami
  ```

3. List all Helm repos and ensure `bitnami` appears.

  ```
  helm repo list
  ```

4. Search the `bitnami` repo for `nginx` and show all available versions.

  ```
  helm search repo nginx --versions
  ```

5. Install the `bitnami/nginx` chart into the `dev` namespace of Kubernetes. Name the release `nginx-app`.

  ```
  helm install nginx-app bitnami/nginx -n dev
  ```

6. List all Pods running in the `dev` namespace.

  ```
  k get pods -n dev
  ```

7. List all Helm charts in the `dev` namespace.

  ```
  helm list -n dev
  ```

8. Remove the `nginx-app` release.

  ```
  helm uninstall nginx -n dev
  ```

### Task 2

1. Use Helm to pull the `bitnami/wordpress` version `15.0.9` chart and untar it in the current folder.

  ```
  helm pull --untar bitnami/wordpress --version=15.0.9
  ```

2. Open the `Chart.yaml` file in the new `wordpress` folder and note the dependencies.

  ```
  cd wordpress
  cat chart.yaml
  ```

3. View the `wordpress` `15.0.9` chart values using Helm.

  ```
  helm show values bitnami/wordpress –version=15.0.9 
  ```

4. Create a `wordpress-values.yml` file in the current folder and add the following content:

    ```
    wordpressUsername: admin 
    wordpressPassword: admin 
    wordpressEmail: admin@admin.com 
    wordpressFirstName: Jane 
    wordpressLastName: Doe 
    wordpressBlogName: admin.com 
    service: 
    type: LoadBalancer
    ```

    ```
    cd ..
    nano wordpress-values.yml
    ```

5. Install version `15.0.9` of the wordpress chart into the `dev` namespace and pass the values from the `wordpress-values.yml` file.

  ```
  helm install wordpress bitnami/wordpress --values=wordpress-values.yaml --namespace dev --version 15.0.19
  ```

6. List the running Pods.

  ```
  k get pods -n dev
  ```

### Task 3

1. List all current Helm installations in the `dev` namespace.

  ```
  helm list –n dev 
  ```

2. Update the Helm `bitnami` repo.

  ```
  helm repo update
  ```

3. Show all `nginx` charts for version `13.1.5`.

  ```
  helm search repo nginx --version=13.1.5
  ```

4. Install the `nginx` version `13.1.5` chart with `5 replicas`. Name the release `nginx-app` and install it into the `dev` namespace.

  ```
  helm install nginx-app bitnami/nginx –-version 13.1.5 --set replicaCount=5 -n dev
  ```

5. List the running Pods.

  ```
  k get pods -n dev
  ```

6. Upgrade the `nginx-app` release to version `13.1.8`.

  ```
  helm upgrade nginx-app bitnami/nginx --version=13.1.8 -n dev
  ```

7. List the running Pods.

  ```
  k get pods -n dev
  ```

8. Remove the `nginx-app` release.

  ```
  helm un nginx-app -n dev
  ```
