import Icon from '../assets/Hexagon.png'

function Text({text, name}){
    return (
        <>
            <div className="w-full h-full mb-[80px]">
                <div className="w-full h-[50%] flex justify-left items-center">
                    <div className="w-[60%] flex justify-center items-center">
                        <div className="w-[30%] h-[50%] flex justify-center items-center">
                            <img src={Icon} className='w-[70%] object-fill'/>
                        </div>
                        <div className="w-[70%]">
                            <p className="font-inter text-[25px] text-white">{name}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[50%] p-4">
                    <p className="font-inter text-[20px] text-white">{text}</p>
                </div>
            </div>
        </>
    );
}

export default Text;