"use client";
import React from "react";

function Page() {
  return (
    <div className="grid grid-cols-1 gap-4 min-h-svh">
      <div className="border-2 rounded sticky top-0 z-10">navbar</div>
      <div className="border-2 rounded h-[calc(100vh-4rem)]">home</div>
      <div className="border-2 rounded h-[calc(100vh-4rem)]">about</div>
      <div className="border-2 rounded h-[calc(100vh-4rem)]">skills</div>
      <div className="border-2 rounded h-[calc(100vh-4rem)]">work</div>
      <div className="border-2 rounded h-[calc(100vh-4rem)]">testimonial</div>
      <div className="border-2 rounded h-[calc(100vh-4rem)]">contact</div>
      <div className="border-2 rounded">footer</div>
    </div>
  );
}

export default Page;
