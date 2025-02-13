import {Icons} from "./icons.jsx";
import {TittleItem} from "./tittle-item.jsx";

export function ItemContainer() {
    return (
        <div
            className={'p-[50px] bg-white my-[68px] shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] border-[2px] relative border-[#262626] rounded-[12px]'}>
            <Icons/>
            <TittleItem/>
        </div>

    );

}

