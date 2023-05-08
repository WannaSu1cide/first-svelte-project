import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
const sveltePreprocess = require('svelte-preprocess');


export default {
  kit: {
    adapter: adapter(),
  },
  preprocess: preprocess(),
};

module.exports = {
  preprocess: sveltePreprocess(),
  // rest of the config
};