import React from 'react'
import { FaArrowRight, FaFacebookF, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import logo from "../../assets/images/white logo 1.svg"
import nia from "../../assets/images/nia_solution_Eg (1) 1.png"
import foorerBg from "../../assets/images/footerbg.png"
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
export default function Footer() {
    const {t} = useTranslation("global")
  return <>
  
  <footer className="bg-[#1B3C74] overflow-hidden relative text-white pt-6">
  <div    
 className={`absolute z-0 test `}></div>

<div className="container relative z-10">

    <div className='grid md:grid-cols-2 justify-center items-center lg:grid-cols-3 gap-10'>
    <div className='flex justify-center flex-col  items-center relative'>
    <img src={logo} alt="" />

        <ul className='flex mt-4  gap-4'>
            <li className='p-2 rounded-full text-main bg-white'>
                <a href="#">
                <FaFacebookF />
                </a>
            </li>
            <li className='p-2 rounded-full text-main bg-white'>
                <a href="#">
                <FaTwitter  />
                </a>
            </li>
            <li className='p-2 rounded-full text-main bg-white'>
                <a href="#">
                <FaYoutube  />
                </a>
            </li>
            <li className='p-2 rounded-full text-main bg-white'>
                <a href="#">
                <FaPinterest  />
                </a>
            </li>
        </ul>
    </div>

        <div className='  w-fit mx-auto md:m-0'>
            <ul className=''> 
                <li className=' mb-4 '>
                    <Link to="/" className='flex  items-center gap-2'>
                    <FaArrowRight className='' /> {t("navbar.Home")}
                    </Link>
                </li>
                <li className=' mb-4 '>
                    <Link to="/" className='flex  items-center gap-2'>
                    <FaArrowRight className='' /> {t("navbar.About")}
                    </Link>
                </li>
                <li className=' mb-4 '>
                    <Link to="/specializations" className='flex  items-center gap-2'>
                    <FaArrowRight className='' /> {t("navbar.Specializations")}
                    </Link>
                </li>
                <li className=' mb-4 '>
                    <Link to="/contact" className='flex  items-center gap-2'>
                    <FaArrowRight className='' /> {t("navbar.Contact")}
                    </Link>
                </li>
            </ul>
            <div className="bg-white w-fit"><img src={nia} alt="" /></div>
        </div>
        <div>
        <p className='font-semibold text-center'>{t("footer.address")}</p>
        <iframe className='my-4 rounded-xl w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4108.435247844155!2d31.213057179322472!3d30.014803788584057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846e11ac5de1d%3A0x4bd49368639ecfff!2z2LnZhdin2LHYqSDYp9mE2YbYtdix!5e0!3m2!1sar!2seg!4v1738073245754!5m2!1sar!2seg"  height="250"  loading="lazy" ></iframe>

        </div>

    </div>
</div>
    <p className='text-center bg-blue-950 py-4 border-t-gray-300 border-0 border-t-2'>{t("footer.copyright")} <a href="#">NIA Solutions</a></p>


  </footer>
  
  </>
}
