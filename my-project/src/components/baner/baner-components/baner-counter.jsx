export function BanerCounter() {
    const counters = [
        {number: "+7000", text: "Students Passed Out"},
        {number: "+37", text: "Awards & Recognitions"},
        {number: "+15", text: "Experience Educators"}
    ];


    return (
        <div
            className="lg:flex lg:flex-row sm:flex-col sm:flex text-center items-center lg:justify-around sm:justify-center">
            {counters.map((item, index) => (
                <div
                    key={index}
                    className={`gap-y-2 sm:my-3 w-full lg:m-0 flex flex-col ${index === 1 ? 'sm:border-t-2 lg:border-none sm:border-b-2 py-4 border-[#262626]' : ''}`}
                >
                    <h3 className="text-3xl font-bold">{item.number}</h3>
                    <p className="text-[14px]">{item.text}</p>
                </div>
            ))}
        </div>
    );
}
