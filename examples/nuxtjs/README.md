# How to run demo

```shell

# Go to example directory 
cd examples/nuxtjs

# Build docker image
docker build -t nuxt-breadcrumbs .

# Run the container
docker run --rm -ti -p 3000:3000 nuxt-breadcrumbs
```

# How to run in development mode

```shell

# Go to example directory
cd examples/nuxtjs

# Build docker image
docker build -t nuxt-breadcrumbs --target develop-stage .

# Install dependencies
docker run --rm -ti -p 3000:3000 -v $(pwd):/app nuxt-breadcrumbs yarn install

# Run the container
docker run --rm -ti --name nuxt_breadcrumbs_demo -p 3000:3000 -v $(pwd):/app nuxt-breadcrumbs 
```
