import ContactImg from '../assets/contact.png'
import { FaInstagramSquare } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { ImFacebook2 } from "react-icons/im";

const Contact = () => {
  return (
    <div className="my-20 px-10">
      <div className="grid grid-cols-2 gap-10 px-10">
        <div className="flex flex-col gap-5">
          <div className="bg-[#264064] p-3 px-5 text-white font-bold text-xl text-center">Contact Us</div>
          <div className="border-2 border-black p-3 px-5 font-medium text-xl text-center">cube1studio</div>
          <img src={ContactImg} alt="" />
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl font-bold'>Description</h1>
          <p className='text-base max-w-md'>Cube1Studio is a cutting-edge 3D studio specializing in creating high-quality action figures. Based in the heart of Indonesia&apos;s new capital city (IKN), Cube1Studio combines artistic innovation with advanced 3D technology to bring unique collectibles to life. Our mission is to deliver detailed and dynamic figures that reflect creativity and precision, making every piece a must-have for collectors.</p>
          <div className='flex items-center gap-3 mt-5'>
            <ImFacebook2 size={58} />
            <FaInstagramSquare size={65} />
            <FaTwitterSquare size={65} />
          </div>
          <div className='border-2 border-black rounded p-3 px-5 text-xl font-semibold w-3/4'>@_cuuube</div>
        </div>
      </div>
    </div>
  )
}

export default Contact