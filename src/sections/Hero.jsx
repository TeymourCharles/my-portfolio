import CareerStats from "../components/CareerStats";

function Hero() {
    return (
    <>
        <div className="bg-white w-full h-[60%] rounded-lg p-2">
            This is hero
        </div>
        <div className="h-[37%] bg-white  my-[15px] rounded-lg p-2">
            <CareerStats/>
        </div>
        
    </>
    )
}

export default Hero;