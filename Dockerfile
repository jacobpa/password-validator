FROM node:10-alpine

ENV DEBIAN_FRONTEND=noninteractive

# If you run linux, these must match your UID and GID for correct permissions
ARG USER_UID=1000
ARG USER_GID=${USER_UID}

# Install git, fish, and required js things

# Below is for debian-based node image
#RUN apt-get update \
#    && apt-get install -y git procps fish \
#    && npm install -g eslint \
#    && npm install -g @vue/cli

# Below is alpine-based node image
RUN apk add --no-cache git procps openssh bash \
    && npm install -g eslint \
    && npm install -g @vue/cli

ENV DEBIAN_FRONTEND=
