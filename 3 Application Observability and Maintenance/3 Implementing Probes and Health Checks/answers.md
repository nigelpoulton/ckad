# Answers

The following lists each question and associated answer.

### Task 1

1. Build the `Dockerfile` located at `3 Application Observability and Maintenance/3 Implementing Probs and Health Checks/health-probes` directory. Name the image `health-probes`. The application exposes a `healthz` endpoint that can be used for health checks.

    ```
    docker build -t health-probes .
    ```

2. Create a new `health-probes-deployment.yml` file with the following properties:
    - `name: health-probes-deployment`
    - `image: health-probes`
    - `imagePullPolicy: IfNotPresent`
    - `readinessProbe` and `livenessProbe` that both use `httpGet` to call a `/healthz` endpoint on `port` 80.

    ```
    k create deploy health-probes-deployment --image=health-probes -o yaml --dry-run="client" > health-probes.deployment.yml

    # Perform remaining edits in the YAML file
    # See `solution/health-probes.deployment.yml` 
    nano health-probes.deployment.yml
    ```

3. View the pod's events and see if any readiness or liveness probe errors are displayed.

    ```
    k get pods

    # Get name of pod

    k describe pod/[POD_NAME]

    ```

4. Ensure that the pod's `restarts` value is at `0`. 

    ```
    k get pods

    # View `restarts` value for pod
    ```