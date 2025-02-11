import logo from '../../../assets/header/Logo.png';
import menu from '../../../assets/header/Icon.png';

export function Nav() {
    return (
        <div className="flex justify-between items-stretch lg:h-20 sm:h-[62px] lg:bg-none ">
            <div
                className="bg-[#FF8D4D]  py-4 px-5 border-r-[2px] border-black flex  rounded-bl-[8px] rounded-tl-[8px]">
                <img src={logo} alt="Vector Stroke"/>
            </div>
            <div className={'bg-[#FFEFE5] py-[23px] px-[33px] lg:hidden rounded-br-[8px] rounded-tr-[8px]'}>
                <a href="#"> <img src={menu} alt="Vector Stroke"/></a>
            </div>
            <nav className="h-full sm:hidden lg:block">
                <ul className="flex child:text-[20px] child:transition duration-150 h-full child:flex child-hover:bg-[#FFEFE5] child:py-4 child:px-5 child:border-r-[2px] child:border-black child:items-center ">
                    <li className="border-l-[2px]"><a
                        href="#">Home</a></li>
                    <li className=""><a href="#">About Us</a></li>
                    <li className=""><a href="#">Academics</a></li>
                    <li className=""><a href="#">Admissions</a></li>
                    <li className=""><a href="#">Student Life</a></li>
                    <li className="bg-[#FFAE80] rounded-tr-[8px] rounded-br-[8px] border-none"><a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
