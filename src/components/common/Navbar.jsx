import logo from "../../assets/images/logo.svg";
import navData from '../../assets/data/navbarData';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center my-[27px] font-inter'>
            <div className='w-[191px] h-[39px]'>
                <img src={logo} alt="logo.svg" />
            </div>

            <nav>
                <ul className="flex gap-x-10 items-center">
                    {
                        navData.map((item, idx) => (
                            <li key={idx} className="cursor-pointer hover:scale-105 hover:font-medium transition-all duration-200">
                                <a href={item.link}>
                                    {item.title}
                                </a>

                            </li>
                        ))
                    }
                    <button className="text-white font-medium px-10 py-[13px] bg-gradient-to-b gradient-blue rounded-[32px] btn-click-anim">
                        Login
                    </button>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar