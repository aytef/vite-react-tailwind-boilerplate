type LayoutProps = {
    children: React.ReactNode
  }

function BaseLayout({children} : LayoutProps) {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
            {children}
        </div>
      </>
    )
  }
  
  export default BaseLayout