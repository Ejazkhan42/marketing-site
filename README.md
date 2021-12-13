This is the Gatsby generator for the Roadie marketing site. https://roadie.io

## Getting started for local development

```shell
git clone git@github.com:RoadieHQ/marketing-site.git
cd marketing-site
cp .env.sample .env
# Edit the environment variables in the .env file.
yarn install
env $(cat .env | xargs) yarn start
```

Open http://localhost:8000 in your browser.

## Building for production

```shell
cp .env.sample .env
# Edit the environment variables in the .env file.
env $(cat .env | xargs) yarn build
yarn serve
```

Open http://localhost:9000 in your browser.
