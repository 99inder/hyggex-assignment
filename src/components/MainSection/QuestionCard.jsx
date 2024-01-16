import BulbLogo from "../../assets/images/bulb_logo.svg"
import SpeakerLogo from "../../assets/images/speaker_logo.svg"
import CardsNav from "./CardsNav"
const QuestionCard = () => {
    return (
        <div>
            <div className="w-[713px] h-[393.194px] card-bg-gradient-blue rounded-[42.507px] mx-auto flex items-center justify-center relative">
                <p className="text-white font-lato font-bold text-[2.3910625rem] tracking-[0.765px]">
                    9 + 6 + 7x - 2x - 3
                </p>

                <img
                    src={BulbLogo}
                    alt="bulb.svg"
                    className="absolute left-[34px] top-[34px] cursor-pointer hover:scale-110 transition-all duration-200"
                />
                <img
                    src={SpeakerLogo}
                    alt="bulb.svg"
                    className="absolute right-[34px] top-[34px] cursor-pointer hover:scale-110 transition-all duration-200"
                />
            </div>

            <div className="mt-8">
                <CardsNav />
            </div>
        </div>
    )
}

export default QuestionCard