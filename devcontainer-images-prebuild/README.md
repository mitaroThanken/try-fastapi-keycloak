# Prebuild dev container images

cf. <https://containers.dev/guide/prebuild>

1. Open this dir in dev container.

1. Define custom dev containers.

    See [typescript-node-with-java](./typescript-node-with-java/).

1. Update [`prebuild.sh`](./prebuild.sh).

    See [prebuild.sh](./prebuild.sh).

1. Run [`prebuild.sh`](./prebuild.sh).

    ```shell
    vscode ➜ /workspaces/haproxy-with-minica/devcontainer-images-prebuild (feature/renew-devcontainers) $ ./prebuild.sh 
    [6 ms] @devcontainers/cli 0.55.0. Node.js v20.10.0. linux 6.5.0-14-generic x64.
    [3872 ms] Resolving Feature dependencies for 'ghcr.io/devcontainers/features/java:1'...
    [5523 ms] Soft-dependency 'ghcr.io/devcontainers/features/common-utils' is not required.  Removing from installation order...
    [6321 ms] Start: Run: docker buildx build --load --build-context dev_containers_feature_content_source=/tmp/devcontainercli-vscode/container-features/0.55.0-1703832448340 --build-arg _DEV_CONTAINERS_BASE_IMAGE=mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye --build-arg _DEV_CONTAINERS_IMAGE_USER=root --build-arg _DEV_CONTAINERS_FEATURE_CONTENT_SOURCE=dev_container_feature_content_temp --target dev_containers_target_stage -t vsc-typescript-node-with-java-b62a18933a4732e3248e89b326a76be1772f44480bab2017ee6057087e83c596-features -f /tmp/devcontainercli-vscode/container-features/0.55.0-1703832448340/Dockerfile.extended /tmp/devcontainercli-vscode/empty-folder
    [+] Building 1.6s (15/15) FINISHED                                                                                                                                          docker:default
    => [internal] load .dockerignore                                                                                                                                                     0.0s
    => => transferring context: 2B                                                                                                                                                       0.0s
    => [internal] load build definition from Dockerfile.extended                                                                                                                         0.0s
    => => transferring dockerfile: 2.65kB                                                                                                                                                0.0s
    => resolve image config for docker.io/docker/dockerfile:1.4                                                                                                                          0.8s
    => CACHED docker-image://docker.io/docker/dockerfile:1.4@sha256:9ba7531bd80fb0a858632727cf7a112fbfd19b17e94c4e84ced81e24ef1a0dbc                                                     0.0s
    => [internal] load metadata for mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye                                                                                        0.5s
    => [context dev_containers_feature_content_source] load .dockerignore                                                                                                                0.0s
    => => transferring dev_containers_feature_content_source: 2B                                                                                                                         0.0s
    => [context dev_containers_feature_content_source] load from client                                                                                                                  0.0s
    => => transferring dev_containers_feature_content_source: 526.32kB                                                                                                                   0.0s
    => [dev_containers_feature_content_normalize 1/3] FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye@sha256:6c9b6307dac13df40d7d27405f31660c7b14f65ecd1c57fd0c493fd  0.0s
    => CACHED [dev_containers_target_stage 2/5] RUN mkdir -p /tmp/dev-container-features                                                                                                 0.0s
    => CACHED [dev_containers_feature_content_normalize 2/3] COPY --from=dev_containers_feature_content_source devcontainer-features.builtin.env /tmp/build-features/                    0.0s
    => CACHED [dev_containers_feature_content_normalize 3/3] RUN chmod -R 0755 /tmp/build-features/                                                                                      0.0s
    => CACHED [dev_containers_target_stage 3/5] COPY --from=dev_containers_feature_content_normalize /tmp/build-features/ /tmp/dev-container-features                                    0.0s
    => CACHED [dev_containers_target_stage 4/5] RUN echo "_CONTAINER_USER_HOME=$( (command -v getent >/dev/null 2>&1 && getent passwd 'root' || grep -E '^root|^[^:]*:[^:]*:root:' /etc  0.0s
    => CACHED [dev_containers_target_stage 5/5] RUN --mount=type=bind,from=dev_containers_feature_content_source,source=java_0,target=/tmp/build-features-src/java_0     cp -ar /tmp/bu  0.0s
    => exporting to image                                                                                                                                                                0.0s
    => => exporting layers                                                                                                                                                               0.0s
    => => writing image sha256:d0631f731fbaf8a0cad9ef4f5010cc1ac1f4b7fff8635ccf7913f82712506204                                                                                          0.0s
    => => naming to docker.io/library/vsc-typescript-node-with-java-b62a18933a4732e3248e89b326a76be1772f44480bab2017ee6057087e83c596-features                                            0.0s
    {"outcome":"success","imageName":["ghcr.io/mitarothanken/haproxy-with-minica/devcontainers/typescript-node-with-java:20231229-0647"]}
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
