App start instructions

ADD entry to localhosts
127.0.0.1 kubernetes.docker.internal
127.0.0.1 api.kubernetes.docker.internal

Build local images (backend, frontend)
    docker image build -t pluralsight_backend:latest ./djackets_django
    docker image build -t pluralsight_vue:latest ./djackets_vue

INSTALL NGINX INGRESS CONTROLLER
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml

>>>>>>>>Bring up DB
kubectl apply -f ./kubernetes/db/config.yaml \
  -f ./kubernetes/db/service.yaml \
  -f ./kubernetes/db/deployment.yaml \
  -f ./kubernetes/db/statefulset.yaml
    
>>>>>>>>Bring up backend
kubectl apply -f ./kubernetes/backend/deployment.yaml \
  -f ./kubernetes/backend/service.yaml

>>>>>>>>Bring up front-end
kubectl apply -f ./kubernetes/frontend/deployment.yaml \
  -f ./kubernetes/frontend/service.yaml

>>>>>>>>Bring up network policy and ingress
kubectl apply -f ./kubernetes/network/db-network-policy.yaml \
  -f ./kubernetes/network/ingress.yaml

APP IS UP

JOBS
    1. MIGRATE DB
        kubectl apply -f ./kubernetes/backend/migration-job.yaml
    2. POPULATE DB
        kubectl apply -f ./kubernetes/backend/populate-job.yaml
    3. BACKUP DB
        kubectl apply -f ./kubernetes/backend/backup-cronjob.yaml

PORT FORWARD adminer postgres web UI that lets you see what's in the DB
    kubectl port-forward pod/store-db-7c496db566-bvt94 9000:8080 &
    OPEN BROWSER TO: http://api.kubernetes.docker.internal:9000/

DB details            
  SYSTEM: PostgreSQL
  SERVER: Pod name
  USERNAME: nigel
  PASSWORD: k8srocks

KILLING THE APP
kubectl delete -f ./kubernetes/network/db-network-policy.yaml -f ./kubernetes/network/ingress.yaml
kubectl delete -f ./kubernetes/frontend/deployment.yaml -f ./kubernetes/frontend/service.yaml
kubectl delete -f ./kubernetes/backend/deployment.yaml -f ./kubernetes/backend/service.yaml
kubectl delete -f ./kubernetes/db/config.yaml -f ./kubernetes/db/service.yaml -f ./kubernetes/db/deployment.yaml -f ./kubernetes/db/statefulset.yaml
