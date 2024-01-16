import reloadIcon from "../../assets/images/reload_icon.svg";
import leftIcon from "../../assets/images/left_icon.svg";
import rightIcon from "../../assets/images/right_icon.svg";
import fullscreenIcon from "../../assets/images/fullscreen_icon.svg";
import { useState } from "react";

const CardsNav = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const cardsDataLength = 10;

    const handleForward = () => {
        console.log(currentCardIndex)
        if (currentCardIndex < cardsDataLength - 1)
            setCurrentCardIndex(prev => ++prev);
    }

    const handleBackward = () => {
        if (currentCardIndex > 0)
            setCurrentCardIndex(prev => --prev);

    }

    return (
        <div className="mx-auto flex justify-between items-center w-1/2">
            <img
                src={reloadIcon}
                alt="reload.svg"
                className="cursor-pointer duration-300 hover:rotate-[275deg]"
            />

            <div
                className="flex items-center justify-between w-2/5">
                <img
                    src={leftIcon}
                    alt="reload.svg"
                    className={`${currentCardIndex <= 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer btn-click-anim"}`}
                    onClick={handleBackward}
                />
                <span
                    className="text-[#202B37] text-2xl font-bold font-inter"
                >
                    {
                        (currentCardIndex + 1) < 10
                            ?
                            `${'0' + (currentCardIndex + 1)}`
                            : currentCardIndex + 1
                    }
                    /
                    {cardsDataLength}
                </span>
                <img
                    src={rightIcon}
                    alt="reload.svg"
                    className={`${currentCardIndex >= cardsDataLength - 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer btn-click-anim"}`}
                    onClick={handleForward}
                />
            </div>

            <img
                src={fullscreenIcon}
                alt="reload.svg"
                className="cursor-pointer hover:scale-110 duration-200"
            />
        </div>
    )
}

export default CardsNav