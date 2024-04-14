import { CorsOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { SecureContextOptions } from 'tls';
import fs from 'fs';

const HOST = 'sample';
const PORT = 5173;
const HMR_PORT = 5174;
const VHOST_FQDN = process.env.VHOST_FQDN ?? 'test.test';
const HTTPS_OPTIONS: SecureContextOptions = {
  key: fs.readFileSync(`../certs/${VHOST_FQDN}/key.pem`),
  cert: fs.readFileSync(`../certs/${VHOST_FQDN}/cert.pem`),
}
const PROTOCOL = 'https://';
const ORIGIN = `${PROTOCOL}${VHOST_FQDN}`;
const CORS_OPTION: CorsOptions = {
  origin: ORIGIN
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: HOST,
    origin: ORIGIN,
    https: HTTPS_OPTIONS,
    strictPort: true,
    cors: CORS_OPTION,
  },
  preview: {
    host: HOST,
    port: PORT,
    https: HTTPS_OPTIONS,
    strictPort: true,
    cors: CORS_OPTION,
  }
});
