import Icon from '../assets/images/icon.svg'

function Person() {
    return ( 
        <>
        <div className="w-full h-full">
            <div className="w-full h-[50%] flex justify-left items-center">
                <div className="w-[60%] flex justify-center items-center">
                    <div className="w-[30%] h-[50%] flex justify-center items-center">
                        <img src={Icon} className='w-[70%] object-fill invert'/>
                    </div>
                    <div className="w-[70%]">
                        <p className="font-inter text-[25px] text-white">Conejo Hiram Mendez</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[50%] p-4">
                <p className="font-inter text-[20px] text-white">A design wizard voyaging into the metaverse. I tell the story through my design and illustrations. I spent most of my time designing for brands and creating open-source design resources.</p>
            </div>
        </div>
        </>
     );
}

export default Person;