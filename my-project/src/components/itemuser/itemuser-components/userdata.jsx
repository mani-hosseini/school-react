export function Userdata() {
    const users = [
        {
            name: "Emily L",
            img1: "../../../../src/assets/user/w.png",
            img2: "../../../../src/assets/user/Container.png",
            text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
        },
        {
            name: "Jennifer B",
            img1: "../../../../src/assets/user/Profile%20Container%20(2).png",
            img2: "../../../../src/assets/user/Container.png",
            text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
        },
        {
            name: "David K",
            img1: "../../../../src/assets/user/Profile%20Container%20(1).png",
            img2: "../../../../src/assets/user/Container.png",
            text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
        },
    ];

    return (
        <div className="flex justify-center lg:justify-between items-center gap-[50px]">
            {users.map((user, index) => (
                <div
                    key={index}
                    className={`custom-box flex flex-col items-center lg:gap-y-[30px] sm:gap-y-[20px] ${
                        index === 0 ? "block" : "hidden lg:flex"
                    }`}
                >
                    <div className="flex flex-col items-center space-y-[12px]">
                        <img src={user.img1} alt=""/>
                        <img src={user.img2} alt=""/>
                    </div>
                    <p className="text-[24px] font-bold">{user.name}</p>
                    <p className="text-center">{user.text}</p>
                </div>
            ))}
        </div>
    );
}
