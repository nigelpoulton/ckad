# Answers

The following lists each question and associated answer.

### Task 1

1. Deploy a Pod named `counter` using the provided `pod-logging.yaml` file. Deploy the Pod into the `dev` namespace.

    ```
    # Create `dev` namespace in case you don't have it currently
    k create ns dev

    # Change current context to use `dev` namespace so we don't have to add that to every command
    k config set-context --current --namespace=dev

    # View the pod-logging.yaml file
    cat pod-logging.yaml

    k apply -f pod-logging.yaml
    ```

1. List the ready state for each of the Pod's containers.

    ```
    # Show all properties for counter Pod. Notice there's a `containerStatuses` property.
    k get pods counter -o yaml

    # Filter to containerStatuses.ready property
    k get pods counter -o jsonpath='{.status.containerStatuses[*].ready}'

    # OR

    k get pods counter -o yaml | grep -i ready

    # OR
    k describe pod counter | grep -i ready

    ```

1. List the names of the containers in the Pod.

    ```
    k get pods counter -o jsonpath='{.spec.containers[*].name}'
    
    ```

1. List the log entries for all containers in the Pod that have occurred in the last 60 seconds.

    ```
    k logs counter --since=60s --all-containers
    ```

1. Follow the log entries for all containers in the Pod.

    ```
    k logs counter -f --all-containers
    ```

1. Delete the `counter` Pod.

    ```
    k delete pod counter
    ```