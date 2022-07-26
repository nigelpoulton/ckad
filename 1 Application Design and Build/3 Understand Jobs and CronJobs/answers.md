# Answers

The following lists each question and accompanying answer.


### Task 1

There's a Job defined in the `parallel.yml` file. Configure it so that a total of 8 Pods run, two at a time.

Deploy the Job and the check the logs from any of the Pods and ensure "Lets smash the CKAD" is displayed.

**Answer**

Add the following two lines to the `.spec` section.

```
  completions: 8
  parallelism: 2
```

Run the following command to deploy the updated Job. You must run the command from the `1 Application Design and Build/3 Understand Jobs and CronJobs` directory.

```
kubectl apply -f parallel.yml
```

The following command will show the logs from the main container in any of the Pods. Be sure to use a Pod name from your environment.

```
kubectl logs <any-pod-name>
```

### Task 2

Reconfigure the Job defined in `parallel.yml` so that the Job controller will stop attempting retries after 10 failures.

**Answer**

Configure `spec.backoffLimit` to `10` and save your changes.

### Task 3

Reconfigure the Job defined in `parallel.yml` so that the job will be terminated if it's still running after 45 seconds. 

Re-deploy the Job and ensure the updated configuration terminates the Job after 45 seconds.

**Answer**

Configure `spec.activeDeadlineSeconds` to `45` and save your changes.

Run the following commands to terminate the existing Job and deploy the updated Job. You must run the command from the `1 Application Design and Build/3 Understand Jobs and CronJobs` directory.

```
kubectl delete -f parallel.yml
kubectl apply -f parallel.yml
```

Wait at least 45 seconds and then run a `kubectl describe` command against the Job and check the events to ensure if terminated ~45 seconds after starting.

### Task 4

There's a CronJob defined in the `scheduled.yml` file. Re-configure it so that the job runs every 2 two minutes. 

Deploy the file and ensure the schedule works as expected.

Remember to only use the `kubernetes.io` website if you need help.

**Answer**

Update the `spec.schedule` field to be `*/2 * * * *`

Deploy the CronJon with the following command. You must run the command from the `1 Application Design and Build/3 Understand Jobs and CronJobs` directory.

```
kubectl apply -f scheduled.yml
```

Run a `kubectl get cronjobs` to ensure the CronJob is successfully running and against the correct schedule.

### Task 5

Reconfigure the CronJob defined in `scheduled.yml` so that new Pods will not start if existing ones are still running.

Re-deploy the updated configuration.

**Answer**

Add or configure `spec.concurrencyPolicy` to `Forbid` and save your changes.

Run the following commands to terminate the existing CronJob and deploy the updated configuration. You must run the command from the `1 Application Design and Build/3 Understand Jobs and CronJobs` directory.

```
kubectl delete -f scheduled.yml
kubectl apply -f scheduled.yml
```



