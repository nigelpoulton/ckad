# Answers

The following lists each question and associated answer.

### Task 1

1. Build the `Dockerfile` located at `3 Application Observability and Maintenance/3 Implementing Probs and Health Checks/health-probes` directory. Name the image `health-probes`. The application exposes a `healthz` endpoint that can be used for health checks.

2. Create a new `health-probes-deployment.yml` file with the following properties:
    - The deployment `template` has an `app: health-probes` label.
    - `image: health-probes`
    - `imagePullPolicy: IfNotPresent`
    - `readinessProbe` and `livenessProbe` that both use `httpGet` to call a `/healthz` path on `port` 80.

3. View the pod's events and see if any readiness or liveness probe errors are displayed.

4. Ensure that the pod's `restarts` value is at `0`. 