import items from "../database/portfolio"

const Portfolio = () => {
  return (
    <div className="px-10 my-20">
        <div className="w-full overflow-x-auto flex items-center justify-start gap-32">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col gap-5 justify-start">
              <img src={item.img} alt={item.id} className="w-full aspect-video min-w-[500px] h-auto" />
              <h1 className="text-center font-bold text-2xl uppercase">{item.title}</h1>
              <h3 className="text-lg">Description</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Portfolio