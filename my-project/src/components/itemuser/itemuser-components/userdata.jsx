export function Userdata() {
    return (
        <div className={'lg:flex block justify-space-between items-center gap-[50px]'}>
            <div className={'custom-box flex flex-col items-center lg:gap-y-[30px] sm:gap-y-[20px]'}>
                <div className={'flex flex-col items-center space-y-[12px]'}>
                    <img src="../../../../src/assets/user/w.png" alt=""/>
                    <img src="../../../../src/assets/user/Container.png" alt=""/>
                </div>
                <p className={'text-[24px] font-bold'}>Emily L</p>
                <p className={'text-center'}>My son's social and academic growth has been remarkable since joining
                    Little Learners Academy. I am
                    grateful for the supportive and dedicated teachers.</p>
            </div>
            <div className={'custom-box lg:flex hidden flex-col items-center lg:gap-y-[30px] sm:gap-y-[20px]'}>
                <div className={'flex items-center flex-col space-y-[12px]'}>
                    <img src="../../../../src/assets/user/Profile%20Container%20(2).png" alt=""/>
                    <img src="../../../../src/assets/user/Container.png" alt=""/>
                </div>
                <p className={'text-[24px] font-bold'}>Jennifer B</p>
                <p className={'text-center'}>My son's social and academic growth has been remarkable since joining
                    Little Learners Academy. I am
                    grateful for the supportive and dedicated teachers.</p>
            </div>
            <div className={'custom-box lg:flex hidden flex-col items-center lg:gap-y-[30px] sm:gap-y-[20px]'}>
                <div className={'flex items-center flex-col space-y-[12px]'}>
                    <img src="../../../../src/assets/user/Profile%20Container%20(1).png" alt=""/>
                    <img src="../../../../src/assets/user/Container.png" alt=""/>
                </div>
                <p className={'text-[24px] font-bold'}>David K</p>
                <p className={'text-center'}>My son's social and academic growth has been remarkable since joining
                    Little Learners Academy. I am
                    grateful for the supportive and dedicated teachers.</p>
            </div>
        </div>
    )
}