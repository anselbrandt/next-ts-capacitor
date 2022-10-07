This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Export static build

Image optimization is not currently compatible with `next export`. In `next.config.js`, set:

```
  images: {
    unoptimized: true
  }
```

Add the following `package.json` `script`:

```
"export": "next build && next export"
```

## Capacitor

```
yarn add -D @capacitor/cli

npx cap init
```

In `capacitor.config.json` change `webDir` to `out`

```
yarn add @capacitor/core @capacitor/ios @capacitor/android

npx cap add ios

npx cap add android
```

```
npx cap open ios

npx cap open android
```

```
npx cap run ios

npx cap run android
```

## Ionic UI Library

```
yarn add @ionic/react ionicons
```

https://dev.to/ionic/adding-ionic-react-to-an-existing-react-project-4kib

Add the following CSS to `_app.tsx`:

```
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';

import { setupIonicReact } from '@ionic/react';
setupIonicReact()
```

```
yarn add next-transpile-modules
```

Change `next.config.js` to:

```
const withTM = require('next-transpile-modules')([
  `@ionic/react`, '@ionic/core', 'ionicons', '@stencil/core'
])

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  }
}

module.exports = withTM(nextConfig)

```