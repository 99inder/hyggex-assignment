import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import BulbLogo from "../../assets/images/bulb_logo.svg"
import SpeakerLogo from "../../assets/images/speaker_logo.svg"
import CardsNav from "./CardsNav";

function App() {
    const [flip, setFlip] = useState(false);
    const handleFlip = () => {
        setFlip(prev => !prev);
    }

    const toggleLight = (e) => e.stopPropagation();
    const toggleAudio = (e) => e.stopPropagation();

    return (
        <div>
            <div className="mx-auto">
                <ReactCardFlip isFlipped={flip}>
                    <div
                        onClick={handleFlip}
                        className="flip-card-front w-[100%] xl:w-[58%] h-[393.194px] card-bg-gradient-blue rounded-[42.507px] mx-auto flex items-center justify-center relative cursor-pointer">
                        <p className="text-white font-lato font-bold text-[2.3910625rem] tracking-[0.765px]">
                            9 + 6 + 7x - 2x - 3
                        </p>

                        <img
                            src={BulbLogo}
                            alt="bulb.svg"
                            className="absolute left-[34px] top-[34px] cursor-pointer hover:scale-110 transition-all duration-200"
                            onClick={toggleLight}
                        />
                        <img
                            src={SpeakerLogo}
                            alt="bulb.svg"
                            className="absolute right-[34px] top-[34px] cursor-pointer hover:scale-110 transition-all duration-200"
                            onClick={toggleAudio}
                        />
                    </div>


                    <div
                        onClick={handleFlip}
                        className="flip-card-back w-[713px] h-[393.194px] card-bg-gradient-darkblue rounded-[42.507px] mx-auto flex items-center justify-center relative cursor-pointer">
                        <p className="text-white font-lato font-bold text-[2.3910625rem] tracking-[0.765px]">
                            5x + 12
                        </p>

                        <img
                            src={BulbLogo}
                            alt="bulb.svg"
                            className="absolute left-[34px] top-[34px] cursor-pointer hover:scale-110 transition-all duration-200"
                            onClick={toggleLight}
                        />
                        <img
                            src={SpeakerLogo}
                            alt="bulb.svg"
                            className="absolute right-[34px] top-[34px] cursor-pointer hover:scale-110 transition-all duration-200"
                            onClick={toggleAudio}
                        />
                    </div>
                </ReactCardFlip>
            </div>

            <div className="mt-8">
                <CardsNav />
            </div>
        </div>
    );
}

export default App;