import logo from '../../../assets/header/Logo.png';

export function Nav() {
    return (
        <div className="flex justify-between items-stretch h-20">
            <div
                className="bg-[#FF8D4D]  py-4 px-5 border-r-[2px] border-black inline-block rounded-bl-[8px] rounded-tl-[8px]">
                <img src={logo} alt="Vector Stroke" className=""/>
            </div>
            <nav className="h-full">
                <ul className="flex h-full ">
                    <li className="py-4 hover:bg-[#FFEFE5] px-5 border-r-[2px] border-black flex items-center"><a href="#">Home</a></li>
                    <li className="py-4 hover:bg-[#FFEFE5] px-5 border-r-[2px] border-black flex items-center"><a href="#">About Us</a></li>
                    <li className="py-4 hover:bg-[#FFEFE5] px-5 border-r-[2px] border-black flex items-center"><a href="#">Academics</a></li>
                    <li className="py-4 hover:bg-[#FFEFE5] px-5 border-r-[2px] border-black flex items-center"><a href="#">Admissions</a></li>
                    <li className="py-4 hover:bg-[#FFEFE5] px-5 border-r-[2px] border-black flex items-center"><a href="#">Student Life</a></li>
                    <li className="py-4 hover:bg-[#FFEFE5] px-5 bg-[#FFAE80] rounded-tr-[8px] rounded-br-[8px] flex items-center"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}
