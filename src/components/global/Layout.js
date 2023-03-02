import SideNav from "./SideNav";

export default function Layout({ children }) {
  return (
    <div className="w-full justify-center p-6 lg:py-36 flex flex-col sm:flex-row">
      <SideNav />
      {children}
    </div>
  );
}
