import data from "../database/data"
import { useParams } from "react-router-dom"

const Detail = () => {
    const { id } = useParams()
    const item = data.find(item => item.id === parseInt(id))

    if (!item) {
        return <>Product tidak ditemukan</>
    }

  return (
    <div className="my-20 px-10">
        <div className="grid grid-cols-2 gap-10">
            <div>
                <img src={item.image} className="w-full aspect-video" alt="" />
                <p className="mt-10">{item.detail}</p>
            </div>
            <div>
                <div className="flex items-center gap-2">
                    <div className="bg-gray-400 p-2 text-white"><span className="border border-white p-1">Low Stock</span></div>
                    <div className="bg-green-500 p-2 text-white"><span className="border border-white p-1">In Stock</span></div>
                </div>
                <h1 className="text-5xl font-bold mt-5">{item.title}</h1>
                <p className="font-light text-[15px]">Unleash Edition</p>
                <p className="font-extralight text-[10px]">Edition Size: 200</p>
                <div className="flex items-center gap-3 mt-10">
                    <div className="p-6 border-2 border-black rounded-md">Deluxe Version</div>
                    <div className="p-6 border-2 border-blue-500 rounded-md">Regular Edition</div>
                </div>
                {/* price */}
                <h5 className="rounded-md mt-5 w-fit px-32 py-5">$1,299.00</h5>
                <h5 className="bg-[#264064] text-white hover:cursor-pointer hover:shadow-xl rounded-md mt-5 w-fit px-32 py-5 font-bold">Low Stock</h5>
                {/* button */}
            </div>
        </div>
    </div>
  )
}

export default Detail