# Prebuild dev container images

cf. <https://containers.dev/guide/prebuild>

1. Open this dir in dev container.

1. Define custom dev containers.

    See [python-with-java-and-node](./python-with-java-and-node/).

1. Update [`prebuild.sh`](./prebuild.sh).

    See [prebuild.sh](./prebuild.sh).

1. Run [`prebuild.sh`](./prebuild.sh).

    ```shell
    vscode ➜ /workspaces/try-fastapi-keycloak/devcontainer-images-prebuild (main) $ ./prebuild.sh 
    [6 ms] @devcontainers/cli 0.58.0. Node.js v20.12.2. linux 6.5.0-27-generic x64.
    [4665 ms] Resolving Feature dependencies for 'ghcr.io/devcontainers/features/java:1'...
    [6598 ms] Resolving Feature dependencies for 'ghcr.io/devcontainers/features/node:1'...
    [7416 ms] Soft-dependency 'ghcr.io/devcontainers/features/common-utils' is not required.  Removing from installation order...
    [7416 ms] Soft-dependency 'ghcr.io/devcontainers/features/common-utils' is not required.  Removing from installation order...
    [9066 ms] Start: Run: docker buildx build --load --build-context dev_containers_feature_content_source=/tmp/devcontainercli-vscode/container-features/0.58.0-1713073431236 --build-arg _DEV_CONTAINERS_BASE_IMAGE=mcr.microsoft.com/devcontainers/python:1-3-bookworm --build-arg _DEV_CONTAINERS_IMAGE_USER=root --build-arg _DEV_CONTAINERS_FEATURE_CONTENT_SOURCE=dev_container_feature_content_temp --target dev_containers_target_stage -t vsc-python-with-java-and-node-0534708bec87e15b56e92a3e19f7244d4da7e007639b4f7b605b0e9537318ca7-features -t ghcr.io/mitarothanken/try-fastapi-keycloak/devcontainers/python-with-java-and-node:20240414-0543 -f /tmp/devcontainercli-vscode/container-features/0.58.0-1713073431236/Dockerfile.extended /tmp/devcontainercli-vscode/empty-folder
    [+] Building 57.4s (16/16) FINISHED                                                                                                                                                                  docker:default
    => [internal] load build definition from Dockerfile.extended                                                                                                                                                  0.1s
    => => transferring dockerfile: 3.45kB                                                                                                                                                                         0.0s
    => resolve image config for docker-image://docker.io/docker/dockerfile:1.4                                                                                                                                    1.9s
    => CACHED docker-image://docker.io/docker/dockerfile:1.4@sha256:9ba7531bd80fb0a858632727cf7a112fbfd19b17e94c4e84ced81e24ef1a0dbc                                                                              0.0s
    => [internal] load .dockerignore                                                                                                                                                                              0.1s
    => => transferring context: 2B                                                                                                                                                                                0.0s
    => [internal] load metadata for mcr.microsoft.com/devcontainers/python:1-3-bookworm                                                                                                                           0.3s
    => [context dev_containers_feature_content_source] load .dockerignore                                                                                                                                         0.1s
    => => transferring dev_containers_feature_content_source: 2B                                                                                                                                                  0.0s
    => [context dev_containers_feature_content_source] load from client                                                                                                                                           0.1s
    => => transferring dev_containers_feature_content_source: 316.59kB                                                                                                                                            0.0s
    => CACHED [dev_containers_feature_content_normalize 1/3] FROM mcr.microsoft.com/devcontainers/python:1-3-bookworm@sha256:0267ad606391b5cc03877729d1db5c2cc5c00df90b55ed6d703b1a98390fa249                     0.0s
    => [dev_containers_feature_content_normalize 2/3] COPY --from=dev_containers_feature_content_source devcontainer-features.builtin.env /tmp/build-features/                                                    0.1s
    => [dev_containers_feature_content_normalize 3/3] RUN chmod -R 0755 /tmp/build-features/                                                                                                                      0.3s
    => CACHED [dev_containers_target_stage 2/6] RUN mkdir -p /tmp/dev-container-features                                                                                                                          0.0s
    => CACHED [dev_containers_target_stage 3/6] COPY --from=dev_containers_feature_content_normalize /tmp/build-features/ /tmp/dev-container-features                                                             0.0s
    => CACHED [dev_containers_target_stage 4/6] RUN echo "_CONTAINER_USER_HOME=$( (command -v getent >/dev/null 2>&1 && getent passwd 'root' || grep -E '^root|^[^:]*:[^:]*:root:' /etc/passwd || true) | cut -d  0.0s
    => [dev_containers_target_stage 5/6] RUN --mount=type=bind,from=dev_containers_feature_content_source,source=java_0,target=/tmp/build-features-src/java_0     cp -ar /tmp/build-features-src/java_0 /tmp/de  45.4s
    => [dev_containers_target_stage 6/6] RUN --mount=type=bind,from=dev_containers_feature_content_source,source=node_1,target=/tmp/build-features-src/node_1     cp -ar /tmp/build-features-src/node_1 /tmp/dev  8.1s
    => exporting to image                                                                                                                                                                                         0.6s
    => => exporting layers                                                                                                                                                                                        0.6s
    => => writing image sha256:4f3b4ed081830f5d4682c1f8596bf57bf5db6a0347122c08cb010f477d2353a0                                                                                                                   0.0s
    => => naming to docker.io/library/vsc-python-with-java-and-node-0534708bec87e15b56e92a3e19f7244d4da7e007639b4f7b605b0e9537318ca7-features                                                                     0.0s
    => => naming to ghcr.io/mitarothanken/try-fastapi-keycloak/devcontainers/python-with-java-and-node:20240414-0543                                                                                              0.0s
    {"outcome":"success","imageName":["ghcr.io/mitarothanken/try-fastapi-keycloak/devcontainers/python-with-java-and-node:20240414-0543"]}
    ```

1. Test built images.

    Temporarily change [../compose.yml](../compose.yml) to use the built images and try to use them.

1. Commit [../compose.yml](../compose.yml).

## Publish built images (option)

cf. <https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry>

1. Login

    cf. <https://docs.github.com/ja/packages/working-with-a-github-packages-registry/working-with-the-container-registry#personal-access-token-classic>

1. Publish built images.

    cf. <https://docs.github.com/ja/packages/working-with-a-github-packages-registry/working-with-the-container-registry#pushing-container-images>

1. Logout
