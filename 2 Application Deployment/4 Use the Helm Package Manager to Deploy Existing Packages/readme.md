# Test yourself tasks

Complete the following tasks in your own time.

## Restrictions

The following restrictions will help emulate exam conditions.

- Only use approved websites (`kubernetes.io/docs`, `kubernetes.io/blog`, `github.com/kubernetes` and `helm.sh`)
- Use only your chosen product's man pages and other documentation installed by your products (E.g. `buildah --help`, `docker --help`, `podman --help`)
- Do not refer to any other notes
- Do not make any hand-written notes

The full list of exam requirements and restrictions can be found [here](https://docs.linuxfoundation.org/tc-docs/certification/lf-candidate-handbook/exam-rules-and-policies).

## Pre-requisites

The images and containers you'll work with are all Linux-based. It's recommended to test yourself in a Linux-based environment. This is because the exam environment is Linux-based.

You can have any of the following tools installed for use.

- Buildah
- Docker
- Podman

If you haven't already done so, clone the repo with the following command.

```
$ git clone https://github.com/nigelpoulton/ckad.git
```

Run the following command to change into the correct directory. The tasks expect your terminal to be in this directory. 

```
$ cd ckad/2\ Application\ Deployment/4\ Use\ the\ Helm\ Package\ Manager\ to\ Deploy\ Existing\ Packages/
```

**NOTE:** This will set a very long working directory. If this bothers you (it bothers me) you can tell Linux just to display your current directory without the path by running this command. It will only change your prompt for your current shell session.

```
$ PS1="\W\$ "
```

## Answers

Answers to the question tasks can be found in the `answers.md` file.

## Questions

### Task 1

1. Create a namespace named `dev` in Kubernetes.

2. Use Helm to add a repo named `bitnami` located at `https://charts.bitnami.com/bitnami`.

3. List all Helm repos and ensure `bitnami` appears.

4. Search the `bitnami` repo for `nginx` and show all available versions.

5. Install the `bitnami/nginx` chart into the `dev` namespace of Kubernetes. Name the release `nginx-app`.

6. List all Pods running in the `dev` namespace.

7. List all Helm charts in the `dev` namespace.

8. Remove the `nginx-app` release.

### Task 2

1. Use Helm to pull the `bitnami/wordpress` version `15.0.9` chart and untar it in the current folder.

2. Open the `Chart.yaml` file in the new `wordpress` folder and note the dependencies.

3. View the `wordpress` `15.0.9` chart values using Helm.

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

5. Install version `15.0.9` of the wordpress chart into the `dev` namespace and pass the values from the `wordpress-values.yml` file.

6. List the running Pods.

### Task 3

1. List all current Helm installations in the `dev` namespace.

2. Update the Helm `bitnami` repo.

3. Show all `nginx` charts for version `13.1.5`.

4. Install the `nginx` version `13.1.5` chart with `5 replicas`. Name the release `nginx-app` and install it into the `dev` namespace.

5. List the running Pods.

6. Upgrade the `nginx-app` release to version `13.1.8`.

7. List the running Pods.

8. Remove the `nginx-app` release.

