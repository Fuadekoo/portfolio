"use client"; // This line is necessary for Next.js to render this component on the client side
import React from "react";

function Home() {
  return (
    <div className="bg-green-500 w-svw h-svh">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 border-1 h-svh">description</div>
        <div className="p-4 border-1 h-svh ">photo</div>
      </div>
    </div>
  );
}

export default Home;
