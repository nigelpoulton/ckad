# Answers

The following lists each question and associated answer.

### Task 1

1. Build the `Dockerfile` located at `3 Application Observability and Maintenance/3 Implementing Probs and Health Checks/health-probes` directory. Name the image `health-probes`. 

2. Create a new deployment named `health-probes` with the following properties:
    - Template should have a label value of `app: health-probes`.
    - Use the `health-probes` image.
    - Has an `imagePullPolicy` value of `IfNotPresent`.

3. Create a `LoadBalancer` service named `health-probes` that has a `targetPort` and `port` of `80`. The `selector` should match `app: health-probes`.