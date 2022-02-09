# How to run demo

```shell

# Go to example directory 
cd examples/vuejs

# Build docker image
docker build -t vue-breadcrumbs .

# Run the container
docker run --rm -ti -p 8080:80 vue-breadcrumbs
```

# How to run in development mode

```shell

# Go to example directory
cd examples/vuejs

# Build docker image
docker build -t vue-breadcrumbs --target develop-stage .

# Install dependencies
docker run --rm -ti -p 8080:8080 -v $(pwd):/app vue-breadcrumbs yarn install

# Run the container
docker run --rm -ti --name vue_breadcrumbs_demo -p 8080:8080 -v $(pwd):/app vue-breadcrumbs 
```
