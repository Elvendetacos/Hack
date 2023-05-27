import Background from "../components/background";
import Person from "../components/person";
import search from "../components/search";

function Home() {
    return ( 
        <>
        <Background>
            <div className="col-span-8 h-[60px] mt-[31px] bg-gray-100 col-start-3 rounded-xl flex beet justify-between">
                <div className="w-[30%] h-full flex justify-around items-center">
                    <p className="font-nano text-[32px]">UUPs!</p>
                    <p className="font-inter text-[20px]">profile</p>
                    <p className="font-inter text-[20px]">topics</p>
                    <p className="font-inter text-[20px]">social</p>
                </div>
                <div className="w-[10%] h-full">
                </div>
            </div>
            <div className="col-span-8 h-auto mt-[31px] bg-gray-100 col-start-3 rounded-xl flex beet justify-between">
                <Person></Person>
            </div>
        </Background>
        </>
     );
}

export default Home;