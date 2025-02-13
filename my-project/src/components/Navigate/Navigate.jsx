function Navigate() {
    const sections = [
        {
            title: "About Us",
            img: "../../../src/assets/Container.png",
            text: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child.",
            link: "#",
        },
        {
            title: "Our Programs",
            img: "../../../src/assets/Container.png",
            text: "Explore our tailored programs designed to foster creativity, curiosity, and a love for learning in children of all ages.",
            link: "#",
        },
        {
            title: "Admissions",
            img: "../../../src/assets/Container.png",
            text: "Find out how to enroll your child in our academy and give them the best start on their educational journey.",
            link: "#",
        },
        {
            title: "Contact Us",
            img: "../../../src/assets/Container.png",
            text: "Have questions? Get in touch with our friendly team for more information about our programs and enrollment process.",
            link: "#",
        },
    ];

    return (
        <div>
            <div className="hidden lg:flex flex-wrap">
                {sections.map((section, index) => (
                    <div key={index} className="w-1/2 p-4">
                        <div className="custom-box">
                            <div className="flex flex-col space-y-8 items-center justify-center">
                                <h6 className="lg:text-[48px] sm:text-[26px]">{section.title}</h6>
                                <img src={section.img} className="w-[613px]" alt=""/>
                                <p className="text-[#4C4C4D] text-center">{section.text}</p>
                            </div>
                            <a
                                href={section.link}
                                className="w-full mt-[80px] flex items-center p-[18px] justify-center lg:shadow-[3px_8px_0px_1px_rgba(0,0,0,1)] rounded-[12px] bg-[#FFDECC]"
                            >
                                Learn More <img src="../../../src/assets/header/Vector%20(Stroke).svg" alt=""/>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="lg:hidden sm:block">
                {sections.map((section, index) => (
                    <div key={index} className="w-full p-4">
                        <div className="custom-box m-0 sm:mt-[50px]">
                            <div className="flex flex-col space-y-8 items-center justify-center">
                                <h6 className="lg:text-[48px] sm:text-[26px]">{section.title}</h6>
                                <img src={section.img} className="w-[613px]" alt=""/>
                                <p className="text-[#4C4C4D] text-center">{section.text}</p>
                            </div>
                            <a
                                href={section.link}
                                className="w-full mt-[20px] flex items-center p-[18px] justify-center lg:shadow-[3px_8px_0px_1px_rgba(0,0,0,1)] rounded-[12px] bg-[#FFDECC]"
                            >
                                Learn More <img src="../../../src/assets/header/Vector%20(Stroke).svg" alt=""/>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Navigate;
