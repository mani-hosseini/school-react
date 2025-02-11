import vectorStroke from '../../../assets/header/Vector (Stroke).svg';

export function Top() {
    return (
        <div
            className={'w-full flex items-center justify-center gap-x-4 border-[2px] border-black rounded-[8px] bg-custom-image py-[14px]'}>
            <p>Admission is Open, Grab your seat now</p>
            <img src={vectorStroke} alt="Vector Stroke"/>
        </div>
    );
}