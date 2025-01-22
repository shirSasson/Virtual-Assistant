import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 8888
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/styles/global.css";`
            }
        }
    }
});