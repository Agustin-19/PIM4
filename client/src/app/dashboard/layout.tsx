import DashboardNavbar from "@/components/DashboarNavbar";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <DashboardNavbar />
      <div className="flex flex-col items-center w-10/12 border-x-2 border-color flex-grow">
        <div className="flex-grow w-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
