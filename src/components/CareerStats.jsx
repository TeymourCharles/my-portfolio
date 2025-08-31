function CareerStats() {
    return (
        <div className="flex flex-col gap-2 h-full">
            <div>
                <h5>Career Stats</h5>
            </div>
            <div className="grid grid-cols-3 gap-5 w-[60%] h-[90%]">
                 <div className="bg-iceGray rounded-lg p-2">
                    Experience
                </div>
                <div className="bg-iceGray rounded-lg p-2">
                    Projects
                </div>
                <div className="bg-iceGray rounded-lg p-2">
                    Technologies
                </div>
            </div>
           
        </div>
    )
}

export default CareerStats;