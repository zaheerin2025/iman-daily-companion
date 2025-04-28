
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.bd8dbcca0ab54b0e840379f2e3f6acd1',
  appName: 'iman-daily-companion',
  webDir: 'dist',
  server: {
    url: 'https://bd8dbcca-0ab5-4b0e-8403-79f2e3f6acd1.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: 'release.keystore',
      keystoreAlias: 'key0',
    }
  }
};

export default config;
