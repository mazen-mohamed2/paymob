import React from 'react';
import laptopImage from './images/mobcash.png'; // replace with path to your image
import mobileScreens from './images/mobail.png'; // Replace with the path to your images

const BayMop = () => {
  return (
   <div dir='rtl'>
 <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo on the right */}
          <div className="flex justify-end">
            <a href="#" className="text-xl text-gray-800 font-semibold hover:text-gray-700">
              Paymob
            </a>
          </div>

          {/* Links in the center */}
          <div className="flex-grow flex justify-center items-center space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
              الرئيسية
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
              عروض
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
              المطورون
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
              عن الشركة
            </a>
          </div>

          {/* Button on the left */}
          <div className="flex justify-start">
            <button className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 rounded-md px-4 py-2 text-sm">
              تسجيل الدخول
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div className="flex flex-wrap items-center justify-center bg-white py-12 px-4" >
      
      <div className="md:w-1/2 pl-4">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          عالم مجموعات متجرك براحة
        </h2>
        <p className="text-gray-600 mb-4">
          ازيادة! Paymob هي جهة الإيكونية، تقصى أهم التسليم المجموعات الإلكترونية ومختصن
          العصر من التزار والمنتجات التجارية على عصر المجموع لبث الراقي المناسبة
          أهم والتقيم إقناع أهما، وغالب من العمر صدر حارب العمل المجموع إلى تأصيلها
          مع الراقم ويهدف إلى الخاص، إلى محار عن الجم الواقع - اليوم الواقع.
        </p>
        <div className="flex mt-6">
          <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">
            ابدأ الآن
          </a>
          <a href="#" className="text-blue-600 bg-transparent border border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2">
            تواصل معنا
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <img src={laptopImage} alt="Laptop" className="rounded-lg shadow-md" />
      </div>
    </div>
    <div className="flex items-center justify-between mb-6">
    <div className="md:w-1/2">
        <img src={mobileScreens} alt="Laptop" className="rounded-lg shadow-md" />
      </div>

      <div className="relative flex items-center justify-center">
      {/* Green square background */}
      <div className="absolute bg-emerald-500 w-60 h-60 rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2" />

      {/* Card Content */}
      <div className="relative bg-white rounded-lg p-8 shadow-lg w-96 z-10">
        {/* Assuming you have an SVG for the menu icon, place it here */}
        <h1 className="text-2xl font-bold text-blue-600 mb-6">paymob.accept</h1>
        <h2 className="text-xl font-bold mb-4">خدمات الدفع الإلكتروني</h2>
        <p className="text-gray-600 mb-6">
          تقدم لك الدفعة في البوابة الإلكترونية أكثر...
          {/* Insert the rest of the text here */}
        </p>
        <a href="#" className="text-blue-600 hover:underline">
          اكتشف خدمات الدفع الإلكتروني
        </a>
      </div>
    </div>
      </div>
     
   </div>
   
  );
};

export default BayMop;
