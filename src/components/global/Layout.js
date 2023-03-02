import SideNav from "./SideNav";

export default function Layout({ children }) {
  return (
    <div className="w-full justify-center p-6 lg:py-24 flex flex-col md:flex-row gap-8">
      <SideNav />
      {children}
    </div>
  );
}
