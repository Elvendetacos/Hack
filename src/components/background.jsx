function Background({children}) {
    return ( 
        <>
        <div className="w-full h-[100vh] bg-[#0A0A0D] grid grid-cols-12 gap-8">
            {children}
        </div>
        </>
     );
}

export default Background;