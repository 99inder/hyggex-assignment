import HomeIcon from "../../assets/images/home_icon.svg"
import RightArrow from "../../assets/images/right-arrow.svg"

const Breadcrumb = () => {
    return (
        <div className='flex items-center font-inter font-medium'>
            <img src={HomeIcon} className='w-[30px] aspect-square cursor-pointer hover:scale-105 duration-200' alt="home_icon.svg" />
            <img src={RightArrow} className='w-[30px] aspect-square' alt="home_icon.svg" />
            <span className="cursor-pointer hover:scale-105 duration-200">Flashcard</span>
            <img src={RightArrow} className='w-[30px] aspect-square' alt="home_icon.svg" />
            <span className="cursor-pointer hover:scale-105 duration-200">Mathematics</span>
            <img src={RightArrow} className='w-[30px] aspect-square' alt="home_icon.svg" />
            <span className='text-[#06286E] font-semibold'>Relation and Function</span>

        </div>
    )
}

export default Breadcrumb