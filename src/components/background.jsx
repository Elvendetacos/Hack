function Background({children}) {
    return ( 
        <>
        <div className="w-full h-auto pb-[32px] grid grid-cols-12 gap-x-8 grid-rows-none backG">
            {children}
        </div>
        </>
     );
}

export default Background;