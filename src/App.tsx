import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import IndexPage from "./pages/index/IndexPage";
import AppLayout from "./components/layouts/AppLayout";
import { WalletProvider } from "@suiet/wallet-kit";

function App() {
  return (
    <WalletProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<IndexPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </WalletProvider>
  );
}

export default App;
