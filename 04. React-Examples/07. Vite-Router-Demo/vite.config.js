import { loadEnv, createLogger, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(async ({ command, mode, isSsrBuild, isPreview }) => {
    const logger = createLogger();
    const loggerWarn = logger.warn;

    logger.warn = (msg, options) => {
        // Ignore empty CSS files warning
        if (msg.includes('vite:css') && msg.includes(' is empty')) return;
        loggerWarn(msg, options);
    };

    const envPrefix = 'ENV_VARIABLE';
    const env = loadEnv(mode, process.cwd(), envPrefix);

    const config = {
        base: '/',
        plugins: [react()],
        customLogger: logger,
        clearScreen: false,
        envPrefix, // envPrefix should not be set as '', which will expose all your env variables and cause unexpected leaking of sensitive information
        server: {
            port: 3000,
            // strictPort: true
            /*(if strictPort: true is uncommented) — Forces Vite to fail and exit if port 3000 is already in use.
             Without it, Vite will automatically try the next available port (like 3001, 3002, etc.)
            .*/
        }
    };

    if (mode === 'production') {
        config.base = '/vite/';
    }

    console.group('Configuring Vite');
    console.info('command', command);
    console.info('mode', mode);
    console.info('isSsrBuild', isSsrBuild);
    console.info('isPreview', isPreview);
    console.info('async data', await delayForDemo());
    console.info('createLogger', logger);
    console.info('env', env);
    console.groupEnd();

    return config;
});

function delayForDemo() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    }).then(() => {
        return {
            apiCall: 'Important information',
        };
    });
}
