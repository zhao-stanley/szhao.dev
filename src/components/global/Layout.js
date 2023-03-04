import SideNav from "./SideNav";

export default function Layout({ children }) {
  return (
    <div className="w-full min-h-screen md:justify-center px-6 pt-6 pb-12 md:pt-12 lg:py-24 flex flex-col md:flex-row gap-8 relative">
      <SideNav />
      {children}
    </div>
  );
}
