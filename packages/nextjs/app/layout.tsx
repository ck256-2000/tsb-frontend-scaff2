import '@rainbow-me/rainbowkit/styles.css';
import '~~/styles/globals.css';

import {
  ScaffoldEthAppWithProviders,
} from '~~/components/ScaffoldEthAppWithProviders';
import { ThemeProvider } from '~~/components/ThemeProvider';
import { getMetadata } from '~~/utils/scaffold-eth/getMetadata';

export const metadata = getMetadata({ title: "Scaffold-ETH 2 App", description: "Built with 🏗 Scaffold-ETH 2" });

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem defaultTheme="system" forcedTheme={undefined} themes={['light', 'cyberpunk']} systemTheme="cyberpunk">
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
