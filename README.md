# NURI BLOCKS

Shows a list of the latest Bitcoin blocks, and the Block details.

## Installation

Use yarn to install the `/client` and `/server` dependencies

```bash
yarn install
```

## Usage

Inside de `/client` and `/server` folders, run

```bash
yarn dev
```

if you change the `schema.graphql` you need to regenerate the Typescript types for the server and client

```bash
yarn generate
```

## Libraries

**graphql-code-generator**, generate code from your GraphQL schema and operations

### Client
- **React**
- **Apollo client (graphql client)**
- **Vite**, is a build tool that aims to provide a faster and leaner development experience for modern web projects. 
- **react-table**, collection of hooks for building powerful tables and datagrid experiences. These hooks are lightweight, composable, and ultra-extensible,
- **tailwind**, A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.

### Server:
- **node.js**
- **Apollo server**
- **apollo-datasource-rest**, abstract class that helps to fetch data from REST APIs

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)