import type { FC } from 'react';
import { useWallet } from '@suiet/wallet-kit';

const Dapp: FC = () => {
  const wallet = useWallet();

  const handleSelect = (walletName: string): void => {
    wallet.select(walletName);
  };

  const handleDisconnect = async (): Promise<void> => {
    try {
      await wallet.disconnect();
    } catch (e: unknown) {
      console.error('Failed to disconnect wallet:', e);
    }
  };

  return (
    <div>
      {wallet.connected ? (
          <button onClick={handleDisconnect}>Disconnect</button>
      ) : (
        <div className='flex flex-row'>
          {wallet.configuredWallets.concat(wallet.detectedWallets)
            .filter((w) => w.id === 'com.mystenlabs.suiwallet')
            .map((w) => (
              <button
                key={w.name}
                onClick={() => handleSelect(w.name)}
                disabled={!w.installed}
              >
                {w.installed ? 'Connect Wallet' : <a href='https://slush.app' target='_blank'>Install Slush</a>}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dapp;