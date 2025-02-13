import {ItemContainer} from "./item-components/itemContainer.jsx";

export function Items() {
    return (
        <div className={'flex flex-col lg:mt-[100px] sm:mt-[50px]'}>
            <div>
                <div className={'lg:flex sm:block items-center justify-between gap-[40px]'}>
                    <ItemContainer/>
                    <ItemContainer/>
                    <ItemContainer/>
                </div>
                <div className={'lg:flex sm:block items-center justify-between gap-[40px]'}>
                    <ItemContainer/>
                    <ItemContainer/>
                    <ItemContainer/>
                </div>
            </div>
        </div>
    );

}

