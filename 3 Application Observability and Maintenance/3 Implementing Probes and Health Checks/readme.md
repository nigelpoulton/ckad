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

Run the following command to change into the correct directory. The tasks expect your terminal to be in this directory. If it isn't, the answers won't work.

```
$ cd ckad/3\ Application\ Observability\ and\ Maintenance/3\ Implementing\ Probes\ and\ Health\ Checks/
```

**NOTE:** This will set a very long working directory. If this bothers you (it bothers me) you can tell Linux to display your current directory without the path by running this command. It will only change your prompt for your current shell session.

```
$ PS1="\W\$ "
```

## Answers

Answers to the question tasks can be found in the `answers.md` file.

## Questions

### Task 1

1. Build the `Dockerfile` located at `3 Application Observability and Maintenance/3 Implementing Probs and Health Checks/health-probes` directory. Name the image `health-probes`. The application exposes a `healthz` endpoint that can be used for health checks.

2. Create a new `health-probes-deployment.yml` file with the following properties:
    - `name: health-probes-deployment`
    - `image: health-probes`
    - `imagePullPolicy: IfNotPresent`
    - `readinessProbe` and `livenessProbe` that both use `httpGet` to call a `/healthz` endpoint on `port` 80.

3. View the pod's events and see if any readiness or liveness probe errors are displayed.

4. Ensure that the pod's `restarts` value is at `0`. 

