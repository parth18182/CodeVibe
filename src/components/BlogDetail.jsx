import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../../blogData";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === Number(id));

  if (!blog) {
    return <p className="p-10">Blog not found</p>;
  }

  return (
    <div className="bg-[#faf7f7] min-h-screen">

      {/* HERO SECTION */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src={blog.image}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 md:p-12 text-white">
          
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-sm underline hover:text-gray-300"
          >
            ← Back
          </button>

          <h1 className="text-2xl md:text-4xl font-bold max-w-3xl">
            {blog.title}
          </h1>

          <p className="text-sm mt-2 text-gray-200">
            By {blog.author} • {blog.date}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 py-10">

        {/* Highlight Quote */}
        <div className="border-l-4 border-[#5C0B15] bg-white p-5 rounded-md shadow mb-8">
          <p className="italic text-gray-700">
            ✨ “Jewellery is not just an accessory — it's a reflection of your story.”
          </p>
        </div>

        {/* Blog Content */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow space-y-6 leading-7 text-gray-700 whitespace-pre-line">

          {blog.content}

        </div>

        {/* TAGS */}
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">Bridal</span>
          <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">Jewellery</span>
          <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">Budget</span>
        </div>

        {/* CTA */}
        <div className="mt-10 bg-[#5C0B15] text-white p-6 rounded-xl text-center shadow">
          <h2 className="text-lg font-semibold">
            Explore Our Latest Jewellery Collection
          </h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-white text-[#5C0B15] px-6 py-2 rounded-lg font-medium hover:scale-105 transition"
          >
            Shop Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default BlogDetail;