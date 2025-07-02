import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "https://images.unsplash.com/photo-1603575448360-5a7b10f3f267",
  "https://images.unsplash.com/photo-1588072432836-e10032774350",
  "https://images.unsplash.com/photo-1530882548122-0596ee66cdfd",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  "https://images.unsplash.com/photo-1558024920-b79b7455cb05",
  "https://images.unsplash.com/photo-1581090700227-1e8a8f7f01d1",
  "https://images.unsplash.com/photo-1611486213171-8f18c869611b",
  "https://images.unsplash.com/photo-1604014237610-7c1f7e87e7c6",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad"
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-soil-green/10 rounded-full mb-6">
            <div className="w-8 h-8 bg-soil-green rounded-full" />
          </div>
          <h1 className="font-poppins font-bold text-4xl md:text-6xl text-gray-900 mb-6">
            Photo <span className="text-gradient">Gallery</span>
          </h1>
          <div className="w-24 h-1 bg-soil-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Moments captured from our workshops, events, and educational missions across India.
          </p>
        </div>
      </section>

      {/* Image Slider (Swiper) */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Pagination, Autoplay]}
            className="rounded-xl overflow-hidden shadow-md"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`${src}?auto=format&fit=crop&w=1200&q=80`}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                  onClick={() => setSelectedImage(src)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-10 text-center">
            Explore All Moments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in">
            {images.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-md hover:scale-105 transform transition duration-300 bg-white cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={`${src}?auto=format&fit=crop&w=800&q=80`}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={`${selectedImage}?auto=format&fit=crop&w=1200&q=90`}
            alt="Preview"
            className="max-w-4xl w-full rounded-xl shadow-2xl transition-all duration-300"
          />
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Capture the Change
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Each picture tells a story of learning, growth, and community impact. 
            Want to be part of the next photo?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-soil-green font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Become a Volunteer
            </a>
            <a
              href="/mission"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-soil-green transition-colors"
            >
              View Our Mission
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
