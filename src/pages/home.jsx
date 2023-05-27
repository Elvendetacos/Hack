import Background from "../components/background";
import Person from "../components/person";
import search from "../components/search";
import Images from "../components/images";
import Text from "../components/text.jsx";


const publis = [
    {'name': 'Axel',
        'text': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        'name': 'Conejo',
        'text': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',

    },
    {
        'name': 'Brian',
        'text': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',

    },
    {
        'name': 'Luis',
        'text': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',

    },
    {
        'name': 'Ali',
        'text': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',

    },
    {
        'name': 'Jhon',
        'text': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',

    },
    {
        'name': 'Adolfo',
        'text': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',

    }

]


function Home() {
    return ( 
        <>
        <Background>
            <div className="col-span-8 h-[60px] mt-[31px] bg-gray-100 col-start-3 rounded-xl flex justify-between, nav">
                <div className="w-[30%] h-full flex justify-around items-center">
                    <p className="font-nano text-[32px]">UUPs!</p>
                    <p className="font-inter text-[20px]">profile</p>
                    <p className="font-inter text-[20px]">topics</p>
                    <p className="font-inter text-[20px]">social</p>
                </div>
                <div className="w-[10%] h-full">
                </div>
            </div>
            <div className="col-span-6 mt-[31px] w-full h-[246px] bg-transparent col-start-4 rounded-xl flex">
                <Person></Person>
            </div>
            <div className="col-span-6 mt-[31px] w-full h-[339px] bg-gradient-to-l from-[#1E1C32] to-[#2B161D] col-start-4 rounded-xl flex">
                <div className="w-[55%] ml-[5%] h-full">
                    <div className="h-[20%] w-full flex justify-left items-center">
                        <p className="font-inter text-[15px] font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#F06844] via-[#EE4C54] to-[#6583C1]">Say hi!</p>
                    </div>
                    <div className="h-[60%] w-full">
                        <textarea className="font-inter font-normal text-[15px] p-4 outline-none bg-transparent border-[0.5px] border-[#727888] text-white w-full h-full rounded-[24px] resize-none"  placeholder="placeholder"></textarea>
                    </div>
                    <div className="h-[20%] w-full flex justify-end items-center">
                        <button className="border-[1px] border-[#4D3EFF] pt-1 pb-1 pr-3 pl-3 rounded-[21px]  text-[#4D3EFF] text-[16px] font-medium">
                            Enviar &gt;
                        </button>
                    </div>
                </div>
                <div className="w-[40%] h-full">
                </div>
            </div>
            <div className="col-span-6 mt-[31px] w-full h-[339px] col-start-4 rounded-xl flex-col ">
                {publis.map((text, index) => (
                    <Text key={index} text={text.text} name={text.name}></Text>
                ))}
            </div>
        </Background>
        </>
     );
}

export default Home;