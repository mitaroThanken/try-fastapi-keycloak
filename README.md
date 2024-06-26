# HAProxy with jsha/minica

## Modify virtual host's name

Edit `VHOST_NAME` in `.env` file.

## Make certs

```shell
docker buildx build --build-arg $(tail -n1 .env) -t try-fastapi-keycloak/certs certs/
```

## Export certs

```shell
docker compose up -d --build
```

```shell
docker container cp try-fastapi-keycloak-haproxy-1:/usr/local/etc/haproxy/certs - | tar xv
```

```shell
docker compose down
```

## Install trusted root certification

Install `certs/minica.crt` to Trusted Root Certification Authorities.

## Prebuild dev container images

See [devcontainer-images-prebuild/README.md](./devcontainer-images-prebuild/README.md).

---

(WIP)
