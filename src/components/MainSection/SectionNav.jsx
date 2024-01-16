import { useState } from "react";

const SectionNav = () => {

    const data = ['Study', 'Quiz', 'Test', 'Game', 'Others'];

    const [activeTab, setActiveTab] = useState(data[0]);

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    }

    return (
        <div className='font-inter text-xl text-[#696671] text-center'>
            <ul className="inline-flex justify-center items-center gap-x-10">
                {
                    data.map((tabName, idx) => (
                        <li
                            key={idx}
                            className={`capitalize cursor-pointer px-3 pb-[14px] ${tabName === activeTab && "text-[#06286E] font-bold border-b-2 border-[#06286E]"}`}
                            onClick={() => handleTabChange(tabName)}
                        >
                            {tabName}
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default SectionNav