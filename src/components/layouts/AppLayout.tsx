import { Outlet } from "react-router-dom";
import Header from "../Header";

function AppLayout() {
  return (
    <>
      <main className="min-h-screen container mx-auto">
        <Header />
        <Outlet />
      </main>
      <div className="p-2 text-[12px] text-center mt-10">
        Made with ❤️ by <a href="https://github.com/khakans" target="_blank">khakans</a>
      </div>
    </>
  );
}

export default AppLayout;