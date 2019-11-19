FROM node:10

ENV DEBIAN_FRONTEND=noninteractive

ARG USER_UID=1000
ARG USER_GID=${USER_UID}

RUN apt-get update \
    && apt-get install -y git procps fish \
    && npm install -g eslint \
    && npm install -g @vue/cli\
    && groupadd --gid ${USER_GID} node \
    && useradd -s /bin/bash --uid ${USER_UID} --gid ${USER_GID} -m node

ENV DEBIAN_FRONTEND=
