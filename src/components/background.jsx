function Background({children}) {
    return ( 
        <>
        <div className="w-full h-auto pb-[32px] bg-[#0A0A0D] grid grid-cols-12 gap-x-8 grid-rows-none">
            {children}
        </div>
        </>
     );
}

export default Background;