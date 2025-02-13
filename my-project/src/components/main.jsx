import {Baner} from "./baner/baner.jsx";
import {Heading} from "./heading/heading.jsx";
import {Items} from "./items/items.jsx";
import {MainUser} from "./itemuser/main-user.jsx";

export function Main() {
    return (
        <main className={'lg:w-[80%] m-auto w-[92%] mt-[72px]'}>
            <Baner/>
            <Heading/>
            <Items/>
            <Heading/>
            <MainUser/>
        </main>
    );

}