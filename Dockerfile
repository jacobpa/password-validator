FROM node:10

ENV DEBIAN_FRONTEND=noninteractive

# If you run linux, these must match your UID and GID for correct permissions
ARG USER_UID=1000
ARG USER_GID=${USER_UID}

# Install git, fish, and required js things
RUN apt-get update \
    && apt-get install -y git procps fish \
    && npm install -g eslint \
    && npm install -g @vue/cli

ENV DEBIAN_FRONTEND=
