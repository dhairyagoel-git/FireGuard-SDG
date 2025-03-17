import React from "react";
import brigade from "../assets/brigade.jpg";
import { Card1, Card2 } from "./HomePageComponents";
import MapComponent from "./MapComponent";
export function HomePage() {
  return (
    <>
      <div className="bg-gray-100 ">
        <div className=" w-screen h-screen flex overflow-hidden">
          <div className="pl-15 pr-15 pt-20">
            <div className="w-2/3 mb-15">
              <h1 className="text-[40px] mb-5 font-bold">
                FireGuard: Fire Safety Starts here.
              </h1>
              <p className="text-[12px] text-gray-700">
                Welcome to our disaster management hub, where your safety is our
                priority. Stay informed about nearby fire alerts and report
                incidents to help protect your community.
              </p>
            </div>
            <div>
              <button className="bg-[#dc6860] cursor-pointer  hover:scale-105 transition-all duration-300  p-2 mr-2 rounded-2xl">
                Report Fire
              </button>
              <button className="bg-white hover:bg-[#dc6860] hover:scale-105 transition-all duration-300 border cursor-pointer p-2 rounded-2xl">
                Give Alerts
              </button>
            </div>
          </div>
          <img src={brigade} alt="image" />
        </div>
        <div className="mt-40 mb-30 p-10  flex items-center text-center flex-col">
          <h1 className="text-4xl m-15 font-semibold bg-gradient-to-r from-gray-500 via-gray-600 to-gray-800 bg-clip-text text-transparent">
            Stay informed with Real-Time Fire <br /> Alerts and Updates
          </h1>
          <div className="flex flex-wrap gap-10">
            <Card1
              class="fa-solid fa-house-fire "
              title="Swift emergency response to keep you safe"
              description="Receive immediate notifications about fire incidents in your area."
              button="Learn More >"
            />
            <Card1
              class="fa-solid fa-church"
              title="Join our community for support and resources "
              description="Connect with neighbors and share vital information during emergencies."
              button="Sign up"
            />
            <Card1
              class="fa-solid fa-map-location-dot"
              title="Access Live Map for Current Fire Situations"
              description="View real-time locations of fire alerts and ongoing incidents."
              button="Learn More >"
            />
          </div>
        </div>

        <div className="flex flex-col items-center h-screen w-screen">
          <p>Alert</p>
          <h1 className="text-4xl p-3 md-20">Stay informed, Stay Safe </h1>
          <p>Your safety is our top priority.</p>
          <Card2
            head="Emergency"
            heading="Comprehensive emergency response services"
            description="Quick actions when you need it"
            button="Learn more >"
            image="src\assets\brigade2.jpg"
          />
        </div>
        <div className="flex">
          <div>
            <p>Connect</p>
            <h1>Get in touch</h1>
            <p>
              We are here to help you with fire alerts and reporting any
              incidents in the area
            </p>
          </div>
          <div>
            <h2>Email</h2>
            <p>info@firealerts.com</p>
            <h2>Phone</h2>
            <p>+1-2354-0932</p>
            <h2>Office</h2>
            456 Fire Lane Sydney
          </div>
        </div>

        <div className="flex justify-center">
          <button className="absolute top-740 cursor-pointer -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-800 transition">
            See More
          </button>
          <MapComponent
            style={{
              width: "70%",
              height: "400px",
              opacity: ".2",
              position: "relative",
            }}
          />
        </div>
      </div>
    </>
  );
}
