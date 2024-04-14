#!/bin/bash
devcontainer build --workspace-folder typescript-node-with-java/ --image-name ghcr.io/mitarothanken/haproxy-with-minica/devcontainers/typescript-node-with-java:"$(date +%Y%m%d-%H%M)"
