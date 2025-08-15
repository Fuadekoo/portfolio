"use client"; // This line is necessary for Next.js to render this component on the client side
import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div className="bg-green-500">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 border-1 h-svh">
          <div className="border-2 m-4">hello</div>
          <div className="border-2 m-4"> I am Fuad Abdurahman</div>
          <div className="border-2 m-4">fualstack developer</div>
          <div className="border-2 m-4">my specialized in 123 .....</div>
        </div>
        <div className="p-4 border-1 h-svh ">
          <div className="flex items-center justify-center h-full">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
