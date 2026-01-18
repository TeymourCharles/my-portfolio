function CardCareerStats ({ icon: Icon, number, text, gap }) {
    return (
      
        <div className="bg-iceGray dark:bg-neutral-600 w-full h-[120px] hover:-translate-y-1 hover:shadow-lg shadow-md duration-200 rounded-lg p-2 px-4 flex items-center">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-start"
                    style={{ gap: `${gap}px` }}
                >
                    <Icon size={60}/>
                    <h4>
                        {number}
                    </h4>
                </div>
                <h6>
                    {text}
                </h6>
            </div>
            
        </div>
    )
}

export default CardCareerStats;