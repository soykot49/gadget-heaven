import { useLocation } from "react-router-dom";
import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Helmet } from "react-helmet-async";

const Statistics = () => {
  const { pathname } = useLocation();
  const isDashboard = () =>
    pathname === "/statistics" || /^\/product\/\d+$/.test(pathname);

  const data = [
    {
      "product_id": 1,
      "product_title": "iPhone 14 Pro",
      "brand": "Iphone",
      "model": "iPhone 14 Pro",
      "product_image": "../public/1.png",
      "category": "Mobile",
      "price": 1099,
      "description": "Apple's latest iPhone with A16 Bionic chip, 48MP camera, and improved battery life.",
      "specification": [
        "128GB storage",
        "6.1-inch OLED display",
        "5G compatible",
        "Face ID"
      ],
      "availability": true,
      "rating": 4.8
    },
    {
      "product_id": 2,
      "product_title": "Samsung Galaxy S23",
      "brand": "Samsung",
      "model": "Galaxy S23",
      "product_image": "../public/2.png",
      "category": "Mobile",
      "price": 999,
      "description": "Flagship Samsung phone with a powerful camera, stunning display, and 5G support.",
      "specification": [
        "256GB storage",
        "6.5-inch AMOLED display",
        "5G compatible",
        "Triple rear camera"
      ],
      "availability": true,
      "rating": 4.7
    },
    {
      "product_id": 3,
      "product_title": "Google Pixel 7",
      "brand": "Google",
      "model": "Pixel 7",
      "product_image": "../public/3.png",
      "category": "Mobile",
      "price": 799,
      "description": "Google’s latest smartphone with AI-enhanced camera and pure Android experience.",
      "specification": [
        "128GB storage",
        "6.3-inch OLED display",
        "5G compatible",
        "Tensor G2 chip"
      ],
      "availability": false,
      "rating": 4.6
    },
    {
      "product_id": 4,
      "product_title": "OnePlus 11",
      "brand": "OnePlus",
      "model": "11",
      "product_image": "../public/4.png",
      "category": "Mobile",
      "price": 749,
      "description": "Powerful flagship phone with fast charging and vibrant display.",
      "specification": [
        "128GB storage",
        "6.7-inch AMOLED display",
        "5G compatible",
        "Snapdragon 8 Gen 2"
      ],
      "availability": true,
      "rating": 4.5
    },
    {
      "product_id": 5,
      "product_title": "Xiaomi Mi 13",
      "brand": "Xiaomi",
      "model": "Mi 13",
      "product_image": "../public/5.png",
      "category": "Mobile",
      "price": 699,
      "description": "Affordable flagship smartphone with high-end specs and sleek design.",
      "specification": [
        "256GB storage",
        "6.6-inch AMOLED display",
        "5G compatible",
        "108MP camera"
      ],
      "availability": true,
      "rating": 4.4
    },
    {
      "product_id": 6,
      "product_title": "Sony Xperia 1 IV",
      "brand": "Sony",
      "model": "Xperia 1 IV",
      "product_image": "../public/6.png",
      "category": "Mobile",
      "price": 949,
      "description": "Sony’s premium smartphone with a cinema-wide 4K HDR display and pro-grade camera.",
      "specification": [
        "256GB storage",
        "6.5-inch 4K display",
        "5G compatible",
        "Triple rear camera"
      ],
      "availability": false,
      "rating": 4.5
    },
    {
      "product_id": 7,
      "product_title": "MacBook Pro 14-inch",
      "brand": "MacBook",
      "model": "Pro 14-inch",
      "product_image": "../public/7.png",
      "category": "Laptop",
      "price": 1999,
      "description": "Powerful MacBook with M2 Pro chip, ideal for professionals and creators.",
      "specification": [
        "512GB SSD",
        "16GB RAM",
        "M2 Pro chip",
        "14-inch Retina display"
      ],
      "availability": true,
      "rating": 4.9
    },
    {
      "product_id": 8,
      "product_title": "Dell XPS 13",
      "brand": "Dell",
      "model": "XPS 13",
      "product_image": "../public/8.png",
      "category": "Laptop",
      "price": 1399,
      "description": "High-performance ultra-thin laptop with stunning InfinityEdge display.",
      "specification": [
        "512GB SSD",
        "16GB RAM",
        "Intel Core i7",
        "13.4-inch FHD display"
      ],
      "availability": true,
      "rating": 4.8
    },
    {
      "product_id": 9,
      "product_title": "Apple Watch Series 8",
      "brand": "Apple",
      "model": "Watch Series 8",
      "product_image": "../public/9.png",
      "category": "Smart Watches",
      "price": 399,
      "description": "Advanced smartwatch with health tracking features and cellular connectivity.",
      "specification": [
        "GPS + Cellular",
        "Heart rate monitor",
        "Always-on Retina display",
        "Water-resistant"
      ],
      "availability": true,
      "rating": 4.7
    },
    {
      "product_id": 10,
      "product_title": "Samsung Galaxy Watch 5",
      "brand": "Samsung",
      "model": "Galaxy Watch 5",
      "product_image": "../public/10.png",
      "category": "Smart Watches",
      "price": 329,
      "description": "Stylish smartwatch with advanced health monitoring and long battery life.",
      "specification": [
        "GPS",
        "Body composition analysis",
        "Sleep tracking",
        "Water-resistant"
      ],
      "availability": false,
      "rating": 4.6
    },
    {
      "product_id": 11,
      "product_title": "Sony WH-1000XM5",
      "brand": "Sony",
      "model": "WH-1000XM5",
      "product_image": "../public/11.png",
      "category": "Accessories",
      "price": 399,
      "description": "Industry-leading noise-canceling headphones with long battery life and superior sound.",
      "specification": [
        "Noise Cancelling",
        "30 hours battery life",
        "Bluetooth 5.2",
        "Quick charge support"
      ],
      "availability": true,
      "rating": 4.8
    },
    {
      "product_id": 12,
      "product_title": "Apple AirPods Pro (2nd Gen)",
      "brand": "Apple",
      "model": "AirPods Pro 2",
      "product_image": "../public/12.png",
      "category": "Accessories",
      "price": 249,
      "description": "High-quality wireless earbuds with active noise cancellation and spatial audio.",
      "specification": [
        "Active Noise Cancellation",
        "MagSafe charging case",
        "Adaptive Transparency",
        "Bluetooth"
      ],
      "availability": true,
      "rating": 4.7
    },
    {
      "product_id": 13,
      "product_title": "Rolex Submariner",
      "brand": "Rolex",
      "model": "Submariner",
      "product_image": "../public/13.png",
      "category": "Watches",
      "price": 8999,
      "description": "Luxury diving watch with a stainless steel case and exceptional durability.",
      "specification": [
        "Stainless Steel",
        "Water-resistant up to 300m",
        "Automatic movement",
        "40mm case size"
      ],
      "availability": true,
      "rating": 4.9
    },
    {
      "product_id": 14,
      "product_title": "Casio G-Shock GA2100",
      "brand": "Casio",
      "model": "GA2100",
      "product_image": "../public/14.png",
      "category": "Watches",
      "price": 99,
      "description": "Durable sports watch with shock resistance and modern design.",
      "specification": [
        "Shock resistant",
        "200m water resistance",
        "Carbon core guard",
        "Analog-Digital"
      ],
      "availability": true,
      "rating": 4.6
    },
    {
      "product_id": 15,
      "product_title": "Ray-Ban Aviator Classic",
      "brand": "Ray-Ban",
      "model": "Aviator Classic",
      "product_image": "../public/15.png",
      "category": "Sunglasses",
      "price": 150,
      "description": "Classic aviator sunglasses with polarized lenses and metal frame.",
      "specification": [
        "Polarized lenses",
        "UV protection",
        "Metal frame",
        "Case included"
      ],
      "availability": true,
      "rating": 4.8
    },
    {
      "product_id": 16,
      "product_title": "Oakley Holbrook",
      "brand": "Oakley",
      "model": "Holbrook",
      "product_image": "../public/16.png",
      "category": "Sunglasses",
      "price": 130,
      "description": "Modern sunglasses with impact-resistant lenses and a durable frame.",
      "specification": [
        "Prizm lenses",
        "UV protection",
        "Plastic frame",
        "Case included"
      ],
      "availability": false,
      "rating": 4.7
    },
    {
      "product_id": 17,
      "product_title": "Beats Studio Buds",
      "brand": "Beats",
      "model": "Studio Buds",
      "product_image": "../public/17.png",
      "category": "Accessories",
      "price": 149,
      "description": "Wireless earbuds with active noise cancellation and balanced sound.",
      "specification": [
        "Active Noise Cancellation",
        "8 hours battery life",
        "Bluetooth",
        "USB-C charging"
      ],
      "availability": true,
      "rating": 4.5
    },
    {
      "product_id": 18,
      "product_title": "Seiko 5 Sports",
      "brand": "Seiko",
      "model": "5 Sports",
      "product_image": "../public/18.png",
      "category": "Watches",
      "price": 250,
      "description": "Reliable automatic watch with classic design and robust build quality.",
      "specification": [
        "Automatic movement",
        "100m water resistance",
        "Stainless steel",
        "42mm case"
      ],
      "availability": true,
      "rating": 4.7
    },
    {
      "product_id": 19,
      "product_title": "Gucci GG0341S",
      "brand": "Gucci",
      "model": "GG0341S",
      "product_image": "../public/19.png",
      "category": "Sunglasses",
      "price": 400,
      "description": "Luxury sunglasses with a stylish design and high-quality lenses.",
      "specification": [
        "UV protection",
        "Acetate frame",
        "Case included",
        "Made in Italy"
      ],
      "availability": true,
      "rating": 4.9
    }
  ]
  

  return (
    <div>
       <Helmet>
        <title>Statistics | Gadget Heaven</title>
      </Helmet>
      <div
        className={`${
          isDashboard() ? "mx-0 " : "mx-9"
        } bg-[#9538E2] py-5 relative flex flex-col gap-5 2xl:container 2xl:mx-auto`}
      >
        <h1 className="text-5xl mb-2 text-center font-bold text-white">Statistics</h1>
        <p className="text-white text-center">
          Explore the latest gadgets that will take your experience to the next level.
          From smart devices <br /> to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="mt-8 2xl:container 2xl:mx-auto">
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" barSize={20} fill="#8884d8" />
            <Line type="monotone" dataKey="rating" stroke="#82ca9d" />
            <Area type="monotone" dataKey="price" fill="#8884d8" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
