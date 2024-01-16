import CreateFlashcardSection from "./CreateFlashCardSection"
import QuestionCard from "./QuestionCard"
import SectionNav from "./SectionNav"

const MainSection = () => {
    return (
        <>
            <h3 className="bg-gradient-to-b gradient-blue inline-block text-transparent bg-clip-text font-mont font-bold text-[2rem] leading-[2.438rem]">
                {"Relations and Functions ( Mathematics )"}
            </h3>

            <div className="mt-14 mb-8">
                <SectionNav />
            </div>

            <QuestionCard />

            {/* Create Flashcard Section */}
            <div className="mt-20">
                <CreateFlashcardSection />
            </div>
        </>
    )
}

export default MainSection