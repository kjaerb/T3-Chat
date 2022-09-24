import Header from "../components/Layout/header";

interface DefaultLayoutProps {
  children: React.ReactNode;
  hasFooter?: boolean;
}

function DefaultLayout({ children, hasFooter = true }: DefaultLayoutProps) {
  return (
    <div className='flex justify-center'>
      <div className='min-h-screen max-w-3xl w-full'>
        <Header />
        <div className='flex flex-col min-h-screen'>
          <div className='flex-grow'>
            <div className='max-w-7xl mx-auto'>
              <div>{children}</div>
            </div>
          </div>
          {hasFooter && (
            <div className='bg-slate-700'>
              <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
