import Accordion from "./Accordion"

const FaqSection = () => {
    return (
        <section id="faq">
            <h3 className="bg-gradient-to-b gradient-blue bg-clip-text text-transparent font-inter font-bold text-5xl">FAQ</h3>

            <div >
                <Accordion />
            </div>
        </section>
    )
}

export default FaqSection