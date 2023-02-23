# Answers

The following lists each question and associated answer.

### Task 1

1. Build the `Dockerfile` located in the `health-probes` directory. Name the image `health-probes`. The application exposes a `healthz` endpoint that can be used for health checks.

    ```
    docker build -t health-probes .
    ```

2. Create a new `health-probes-deployment.yml` file with the following features:
    - `Name`: health-probes-deployment
    - `Image`: health-probes
    - `Image pull policy`: IfNotPresent
    - `Readiness probe`: Use HTTP to call a `/healthz` endpoint on port `80`
    - `Liveness probe`: Use HTTP to call a `/healthz` endpoint on port `80` and verify that the app is up and running every 5 seconds.

    ```
    k create deploy health-probes-deployment --image=health-probes -o yaml --dry-run="client" > health-probes.deployment.yml

    # Perform remaining edits in the YAML file
    # See `solution/health-probes.deployment.yml` 
    nano health-probes.deployment.yml
    ```

3. Deploy `health-probes-deployment.yml` to Kubernetes.

    ```
    k apply -f ./health-probes.deployment.yml
    ```

4. View the pod's events and see if any readiness or liveness probe errors are displayed.

    ```
    k get pods

    # Copy name of pod

    k describe pod/[POD_NAME]
    ```

5. Ensure that the pod's `restarts` value is `0`. 

    ```
    k get pods

    # View `restarts` value for pod - should be 0 unless 
    # there are probe errors
    ```

### Task 2

1. Create a new `busy-box.pod.yml` file with the following features:
    - `Name`: busybox-probes
    - `Image`: k8s.gcr.io/busybox
    - `Args`: /bin/sh -c touch /tmp/healthy; sleep 30; rm -rf /tmp/healthy; sleep 120
    - `Readiness probe`: Execute the command `cat /tmp/healthy`. Add a failure threshold value of `30` and a period seconds value of `10`.
    - `Liveness probe`: Execute the command `cat /tmp/healthy`. Add an initial delay value of `5` seconds and a period seconds value of `5`.

    ```
    k run busybox-probes --image=k8s.gcr.io/busybox -o yaml 
      --dry-run="client" > busy-box.pod.yml

    # Perform remaining edits in the YAML file
    # See `solution/busy-box.pod.yml` 
    nano busy-box.pod.yml
    ```

2. Deploy `busy-box.pod.yml` to Kubernetes.

    ```
    k apply -f ./busy-box.pod.yml
    ```

3. Look to see if the Pod is ready yet. After around `30` seconds, view the Pod events and notice any errors.

    ```
    k get pods

    # Copy name of pod

    k describe pod/[POD_NAME]
    ```

4. Add a watch to the Pods and notice any restarts to the busybox Pod.

    ```
    k get pods --watch

    # View `restarts` value for pod - should increase over time due to probe errors
    ```
