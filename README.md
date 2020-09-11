portfolio
====
A React framework for building Web application front-ends.

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

Developer Documentation
-----------------------
To generate documentation:
```bash
$> npm run gendocs
```

Development with Docker
-----------------------
Scripts are provided to build a Docker image and create a Docker
container. The container can be used as a controlled development
environment.

### Build Image and Create Container
```bash
# Build image
$> npm run build-image

> portfolio@0.1.0 build-image /Users/solijons/dev/experimental/portfolio
> docker image build -t portfolio:dev .

Sending build context to Docker daemon  920.1kB
Step 1/10 : FROM node:10.15.0-alpine
 ---> 288d2f688643
Step 2/10 : EXPOSE 3000
 ---> Using cache
 ---> a630b3e936f3
Step 3/10 : RUN mkdir /app

... output omitted ...
```

```bash
# Create and start container
$> npm run start-container

> portfolio@0.1.0 start-container /Users/solijons/dev/experimental/portfolio
> docker run -d --name portfolio -v ${PWD}:/app -v /app/node_modules -p 8080:3000 --rm portfolio:dev

21c10b4d6c3905292a0739133850b267b61bb4f8cb8c605af8ff70f4ee5a7bbf
```

### Restarting and Stopping the Container
```bash
# Stop the container
$> npm run stop-container

# Restart the container
$> npm run restart container
```

### Connecting to the Container
The containerized application is made available via localhost on port
8080. The local source files are mounted inside the container, so
changes to them will immediately be reflected.

Changes to the `package.json` file, including the adding of
dependencies necessitate the rebuilding of the Docker image.

First stop the container, then rebuild the image, finally run a
container with the new base image.

```bash
# Stop the container (container is deleted)
$> npm run container-stop

# Rebuild the image
$> npm run build-image

# Start a new container
$> npm run start-container
```
