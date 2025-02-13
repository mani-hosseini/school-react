import {Baner} from "./baner/baner.jsx";
import {Heading} from "./heading/heading.jsx";
import {Items} from "./items/items.jsx";
import {MainUser} from "./itemuser/main-user.jsx";
import Navigate from "./Navigate/Navigate.jsx";

export function Div() {
    return (
        <main className={'lg:w-[80%] m-auto w-[92%] mt-[72px]'}>
            <Baner/>
            <Heading/>
            <Items/>
            <Heading/>
            <MainUser/>
            <Heading/>
            <Navigate/>
        </main>
    );

}