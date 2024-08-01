
const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Aqui irian los componentes de NavBar, SideBar, Footer, etc */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;
