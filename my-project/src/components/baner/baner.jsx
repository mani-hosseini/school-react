import baner from "../../assets/baner/Image Container.png";
import {Banertext} from "./baner-components/banertext.jsx";
import {Banerholder} from "./baner-components/banerholder.jsx";

export function Baner() {
    return (
        <div className={'lg:flex sm:block gap-x-[60px] items-center'}>
            <img className={'lg:h-[50%] sm:h-full lg:w-[50%] sm:w-full'} src={baner} alt="Vector Stroke"/>
            <div>
                <Banertext/>
                <Banerholder/>
            </div>
        </div>
    );

}