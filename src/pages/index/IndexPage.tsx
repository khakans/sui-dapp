import { useWallet } from "@suiet/wallet-kit";

function IndexPage() {
  const wallet = useWallet();
  return (
    <div>
      {wallet.connected ? (
        <p>Your Wallet Address: {wallet.account?.address}</p>
      ) : (
        <p>Please connect your wallet!!!</p>
      )}
    </div>
  );
}

export default IndexPage;
