import '../styles/globals.css';

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

import type { AppProps } from 'next/app';

import NoSSRWrapper from '../components/NoSSRWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return <NoSSRWrapper><Component {...pageProps} /></NoSSRWrapper>
}

export default MyApp
