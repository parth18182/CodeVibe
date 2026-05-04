import { useNavigate } from "react-router-dom";
import { categories } from "../../category";

function Categories() {
  const navigate = useNavigate()
  return (
    <div className="px-10 my-12 ">
      <h2 className="text-3xl md:text-4xl text-center p-1 text-white rounded-tl-full rounded-tr-lg rounded-br-full mb-10 font-bold rounded-bl-lg  bg-[#5C0B15]">
        Shop By Category
      </h2>
      <div className="flex gap-x-5 ">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group w-70 h-30 cursor-pointer"
            onClick={() => navigate(`category/${cat.name}`)}
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={cat.image}
                className="w-full h-52 object-cover transition duration-500 group-hover:scale-110"
                alt={cat.name}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />

              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-lg md:text-xl font-semibold tracking-wide">
                  {cat.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Categories;