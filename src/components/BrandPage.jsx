import React from "react";

const BrandPage = () => {
  return (
    <div className="bg-[#fffaf9]">

      {/* HERO SECTION */}
      <div className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a"
          alt="brand"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Tradition by Avisha
          </h1>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            Jewellery that tells your story ✨
          </p>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="px-6 md:px-16 py-14 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
          className="rounded-2xl shadow-lg"
          alt="jewellery"
        />

        <div>
          <h2 className="text-3xl font-semibold text-[#5C0B15] mb-4">
            About The Brand
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Tradition by Avisha was not born in a factory — it was born from a dream.
            A dream of turning passion into purpose, creativity into confidence,
            and handmade artistry into something meaningful for every woman who wears it.
            <br /><br />
            What began as a love for jewellery slowly evolved into a mission — to create
            pieces that don’t just complete an outfit, but celebrate a woman’s story.
          </p>

          <div className="mt-6 space-y-2 text-gray-700">
            <p>✨ Brides-to-be glowing with excitement</p>
            <p>✨ Moms-to-be celebrating new beginnings</p>
            <p>✨ Confident working women</p>
          </div>

          <p className="mt-4 font-medium text-[#5C0B15]">
            Affordable. Customised. Heartmade.
          </p>
        </div>
      </div>

      {/* VISION SECTION */}
      <div className="px-6 md:px-16 py-14 grid md:grid-cols-2 gap-10 items-center bg-white">
        
        <div>
          <h2 className="text-3xl font-semibold text-[#5C0B15] mb-4">
            The Visionary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Behind Tradition by Avisha is a woman who believed that passion deserves a platform.
            Avisha started her journey not as a business owner, but as a creator.
            <br /><br />
            She believed every bride deserves jewellery as unique as her journey.
            Her vision was simple yet powerful — to make traditional jewellery
            accessible, affordable, and customizable for modern Indian women.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1605100804763-247f67b3557e"
          className="rounded-2xl shadow-lg"
          alt="founder"
        />
      </div>

      {/* PHILOSOPHY SECTION */}
      <div className="px-6 md:px-16 py-14 bg-[#fff3f1]">
        <h2 className="text-3xl font-semibold text-[#5C0B15] text-center mb-10">
          Brand Philosophy
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Every woman deserves to feel special — without overspending",
            "Tradition should evolve with trend",
            "Handmade craftsmanship carries soul",
            "Customisation creates connection",
            "Jewellery should enhance confidence",
            "Culture meets modern elegance",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* QUOTE SECTION */}
      <div className="py-16 text-center px-6">
        <h3 className="text-2xl md:text-3xl font-medium text-[#5C0B15] max-w-2xl mx-auto">
          “We don’t just create jewellery — we create memories you can wear.”
        </h3>
      </div>
    </div>
  );
};

export default BrandPage;