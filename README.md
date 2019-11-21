# ladno-pass
Password strength analyzer, for CSE 4471 at OSU.

## Requirements
The only requirement needed to build this on your local system is NodeJS and npm.
* [NodeJS Download](https://nodejs.org/en/download/)
  * If your system has a package manager, it is better to install node through it.
  * Node will come with npm when installed.

### Docker
To ease setting up the development environment, a Docker container is included in this repository
that can be used to set up a consistent development environment.

Additionally, if you use Visual Studio Code, you can use the Docker environment to additionally have
a selection of sane default configurations and development plugins.

**If you use a Linux operating system** double check your UID:GID. If it is not `1000:1000`, then
change these values in `Dockerfile` to match your UID:GID. 

To use docker by itself:
1. Run `docker-compose up` in the project's root directory.
2. After the image is built and running, you can visit `localhost:8080` on your local machine to
view the development server. Any changes you make in your local editor will reflect from the
container.
3. To stop or restart the server, run `docker-compose down` and `docker-compose restart`
respectively.

To use with VS Code: (note, you may need to reconfigure git inside the container)
1. Install the [VS Code Remote Development extension pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack).
2. Run the `Remote-Containers: Reopen in Container` command within VS Code with the project opened
locally.
3. After some setting up the Docker container, the VS Code window will reload. The predefined
configuration will be loaded as well as predetermined extensions installed.

Refer to the documentation for [remote development in containers](https://code.visualstudio.com/docs/remote/containers)
and for [Docker in general](https://docs.docker.com/), as well as for
[docker-compose specifically](https://docs.docker.com/compose/) for more information about how all
of this works.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
