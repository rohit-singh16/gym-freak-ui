import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'work-hard',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  buildEs5: false, // Specify buildEs5 option if needed
  buildDist: false, // Specify buildDist option if needed
};
