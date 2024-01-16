import logoMini from "../../assets/images/logo_mini.svg";
import logoText from "../../assets/images/logo_text.svg";
import addBtn from "../../assets/images/add_button.svg";

const CreateFlashcardSection = () => {
    return (
        <div className="flex justify-between items-center font-inter">
            <div className="flex gap-x-5">
                <div
                    className="bg-white h-[80.6px] aspect-square grid place-items-center rounded-full drop-shadow-2xl"
                >
                    <img className=" bg-blend-multiply" src={logoMini} alt="logo.svg" />
                </div>

                <div>
                    <p className="mb-[10.63px] font-bold text-xs text-[#696671]">Published by</p>
                    <img src={logoText} alt="img" />
                </div>
            </div>

            <div className="flex items-center gap-x-2 hover:scale-105 cursor-pointer transition-all duration-200 active:scale-95">
                <img src={addBtn} alt="add.svg" />
                <p className="bg-gradient-to-b gradient-blue bg-clip-text text-transparent text-[1.75rem] font-semibold leading-[33.89px]">
                    Create Flashcard
                </p>
            </div>
        </div>
    )
}

export default CreateFlashcardSection