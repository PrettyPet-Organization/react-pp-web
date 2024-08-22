import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath} from "node:url";


export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        plugins: [react()],
        define: {
            "process.env": { ...env },
        },
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
                "@plugins": fileURLToPath(new URL("./src/plugins", import.meta.url)),
                "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
                "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
                "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
                "@services": fileURLToPath(new URL("./src/services", import.meta.url)),
                "@repositories": fileURLToPath(new URL("./src/repositories/index", import.meta.url)),
            },
        },
    };
});