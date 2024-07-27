import { useTranslation } from "react-i18next"
import { FaFacebookSquare, FaTwitter } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

const Footer = () => {

    const [t, i18n] = useTranslation("global")

    return (
        <div className="w-[100%] h-[40vh] sm:h-[60vh] md:h-[60vh] relative top-[250px] bg-[orange] py-[40px] px-[120px] mt-[120px] sm:px-[0px] sm:mt-[120px] md:mt-[120px] lg:px-[40px] lg:mt-[120px]">
            <div className="w-[100%] h-[100%] m-auto flex justify-between items-center sm:flex-col sm:justify-evenly md:flex-col md:justify-evenly">
                <div className="w-[200px] h-[70px]">
                    <Link to={"/adminsign"}><img className="w-[100%] h-[100%]" src={logo} alt="" /></Link>
                </div>
                <div className="hidden sm:block">
                    <p className="text-[24px] font-bold text-[#fff] text-center">{"Qo'shimcha ma'lumotlar uchun"}</p>
                </div>
                <div className="flex w-[200px] text-[red] justify-evenly m-auto sm:mx-auto sm:my-0">
                    <Link target="_blank" to={"/"}>
                        <FaTwitter className="hover:text-[#fff]" size={40} />
                    </Link>
                    <Link target="_blank" to={"/"}>
                        <FaFacebookSquare className="hover:text-[#fff]" size={40} />
                    </Link>
                    <Link target="_blank" to={"https://www.instagram.com/sultan_food_uz/"}>
                        <RiInstagramFill className="hover:text-[#fff]" size={40} />
                    </Link>
                </div>
                <div className="text-[red] hover:text-[#fff] text-[20px] font-medium lg:text-center">
                    <Link target="_blank" to={"https://t.me/web_user_1109"}>{t("created.creater")}</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer