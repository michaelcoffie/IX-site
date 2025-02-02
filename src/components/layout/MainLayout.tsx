import { ReactNode } from "react";
import MainNav from "./MainNav";
import MainFooter from "./MainFooter";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">{children}</main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
