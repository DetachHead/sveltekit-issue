import adapter from '@sveltejs/adapter-node'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    compilerOptions: {
        enableSourcemap: true,
    },
    // @ts-expect-error https://github.com/sveltejs/svelte-preprocess/issues/591
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- see issue above
    preprocess: preprocess({
        sourceMap: true,
    }),

    kit: {
        adapter: adapter(),
    },
}

export default config
