# Answers

The following lists each question and associated answer.

### Task 1

1. Run a `busybox` Pod named `busyapp` in the `dev` namespace. Pass a command value of `false` to the Pod as it starts up.

    ```
    # Create `dev` namespace in case you don't have it currently
    k create ns dev

    # Change current context to use `dev` namespace so we don't have to add that to every command
    k config set-context --current --namespace=dev

    k run busyapp --image=busybox -- false
    ```

2. Output the yaml for the Pod and determine if it has started and its state.

    ```
    k get pod busyapp -o yaml

    #OR

    k get pods busyapp -o jsonpath="{.status.containerStatuses[*].ready}"
    ```

3. List all the events for the `dev` namespace and locate any issues.

    ```
    k get events -n dev
    ```

4. View `busyapp` Pod events only.

    ```
    k describe pod busyapp
    ```

5. Create a debug copy of the `busyapp` Pod and shell into it using an `sh` shell. List the folders in the current directory.

    ```
    k debug busyapp -it --image=busybox --copy-to=busyapp-debug --container=busyapp -- sh

    k exec busyapp-debug -it -- sh
    ```

6. Exit out of the container.

    ```
    exit
    ```

7. List the Pods and then delete them.

    ```
    k get pods
    k delete pod busyapp busyapp-debug
    ```
