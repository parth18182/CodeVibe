import { blogs } from "../../blogData";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-12 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold text-[#5C0B15] mb-10">
        Our Blogs
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => navigate(`/blog/${blog.id}`)}
            className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={blog.image}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 space-y-2">
              <h2 className="text-lg font-semibold line-clamp-2">
                {blog.title}
              </h2>

              <p className="text-sm text-gray-500">
                By {blog.author} • {blog.date}
              </p>

              <p className="text-sm text-gray-600 line-clamp-3">
                {blog.content}
              </p>

              <button className="text-[#5C0B15] text-sm font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;