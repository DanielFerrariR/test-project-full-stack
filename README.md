# test project

## Description

Create a tool which presents the given test data in `data/testdaten.txt` in an user interface. Use HTML.
In addition, the tool must be able to display the federal states of Germany (Bundesland) for each of the records.
Request the GoogleMaps Geocoding API to get the federal states.
_Hint: In Germany, the zip code is clearly assigned to a federal state._

`https://maps.googleapis.com/maps/api/geocode/json?address=<ADRESS>&key=<GOOGLE_API_KEY>`

**Please consider that API requests are expensive and limited.**

Write your code like you would do it for a production system in a company and please consider the following points:

- architecture / code structure
- OOP
- performance
- reusable code
- modularity
- clean code

PS: We don't care about a good frontend layout ;)

We wish you success!

## Installation

1. `yarn install`

## Run the tool

1. `yarn dev` (watcher)

<br />

# Updated for the solution please follow the steps bellow

1. **Create a .env file with the required variables:**

```sh
MAPS_API_KEY=
```

2. **Installs all dependendies**

```sh
$ yarn
```

3. **Start the webpack-dev-server**

```sh
yarn dev
```

4. **Commands**

```bash
# Runs for web production (needs yarn build first)

$ yarn start

# Runs for web development

$ yarn dev

# Builds for web (compiled to dist)

$ yarn build

# Checks eslint errors

$ yarn lint

# Fix eslint errors

$ yarn lint:fix

# Formats all files with prettier

$ yarn format
```
