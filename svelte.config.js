import preprocess from 'svelte-preprocess';

const config = {
   preprocess: preprocess({
      scss: {
        prependData: `@import './src/theme.scss';`
      }
   })
};

export default config;