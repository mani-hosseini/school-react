import {BanerCounter} from "./baner-counter.jsx";

export function Banerholder() {
    return (
        <div
            className={'w-full bg-[#FFEFE5] px-[40px] lg:py-[24px] sm:py-[40px] lg:shadow-[8px_10px_0px_1px_rgba(255,190,153,1)] sm:shadow-[1px_1px_8px_1px_rgba(255,190,153,1)] border-[2px] border-[#262626] rounded-[12px]'}>
            <BanerCounter/>
        </div>
    );

}

