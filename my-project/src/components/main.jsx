import {Baner} from "./baner/baner.jsx";
import {Heading} from "./heading/heading.jsx";

export function Main() {
    return (
        <main className={'lg:w-[80%] m-auto w-[95%] mt-[72px]'}>
            <Baner/>
            <Heading/>
        </main>
    );

}

