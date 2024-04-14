#!/bin/bash
devcontainer build --workspace-folder python-with-java-and-node/ --image-name ghcr.io/mitarothanken/try-fastapi-keycloak/devcontainers/python-with-java-and-node:"$(date +%Y%m%d-%H%M)"
