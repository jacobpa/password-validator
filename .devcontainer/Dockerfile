FROM node:10

ENV DEBIAN_FRONTEND=noninteractive

ARG USER_UID=1000
ARG USER_GID=${USER_UID}

RUN apt-get update \
    && apt-get install -y git apt-utils procps fish \
    && npm install -g eslint \
    && npm install -g @vue/cli

ENV DEBIAN_FRONTEND=
