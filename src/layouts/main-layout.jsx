import Navbar from "@/components/navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
