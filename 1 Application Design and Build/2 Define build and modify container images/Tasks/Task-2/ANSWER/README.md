Run any of the following commands to complete the task.

```
docker save ckad:pluralsight | gzip > ckad-image.zip
podman save --format oci-archive ckad:pluralsight | gzip > ckad-image.zip
```