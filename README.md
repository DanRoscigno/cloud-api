# Website

## Adding redocusaurus

- Deploy Docusaurus with `npx create-docusaurus@latest cloud-api classic`
- Install redocusaurus with `yarn add redocusaurus`
- Edit docusaurus.config.js and add redocusaurus.  Here is the diff:
  https://github.com/DanRoscigno/cloud-api/blob/84d0774df8e01bb09cf59e96c0ab185d1b59ac5c/docusaurus.config.js#L59-L76

  The above specifies that the `id` of `clickhouse-cloud-api` is related to
  the OpenAPI at https://...

- Create the folder structure that corresponds to where you want to host the 
redocusaurus page.  I want it at `/cloud/api/`
```bash
mkdir -p src/pages/cloud/api/
```

Note: You should have a `src/pages` dir at the root of your Docusaurus project.  Add the rest of the folder structure there.
- Create a very simple `jsx` page in `src/pages/cloud/api/index.jsx` 
This is from the redocusaurus docs, just set the argument to `useSpecData` to
the `id` used in docusaurus.config.json (I used `clickhouse-cloud-api`).
```jsx
import React from 'react';
import Layout from '@theme/Layout';
import Redoc from '@theme/Redoc';
import useSpecData from '@theme/useSpecData';

function CustomPage() {
  const specData = useSpecData('clickhouse-cloud-api');
  return (
    <Layout
      title="Custom Layout Docs"
      description="Example showing custom layout"
    >
      <Redoc {...specData} />
    </Layout>
  );
}

export default CustomPage;
```
- Buid and serve
```bash
yarn build
yarn serve
```

I did not add the page to the nav, but the URL is http://localhost:3000/cloud/api


## Below are the regular install instructions etc.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
# cloud-api
