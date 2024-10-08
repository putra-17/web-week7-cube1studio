import { Link } from "react-router-dom"
import data from "../database/data"

const Products = () => {

  return (
    <div className="my-20 px-10">
        <div className="w-full grid grid-cols-2 gap-10">
            {data.map((item, index) => (
                <div key={index} className="w-full flex flex-col justify-center">
                    <img src={item.image} className="w-full aspect-video h-auto" alt="" />
                    <Link to={`/products/${item.id}`} className="text-sm text-center bg-[#5278AF] w-fit mx-auto text-white p-1 py-2 my-2" ><span className="border border-white p-1">Pre Order</span></Link>
                    <Link to={`/products/${item.id}`} className="text-2xl text-center mx-auto">{ item.title }</Link>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Products