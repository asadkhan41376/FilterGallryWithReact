"use client";
import React, { useState } from "react";
import { GallryData } from "@/gallryData/db";
import Link from "next/link";

function ImgGallry() {
  const [items, setItems] = useState(GallryData);
  const filterItem = (catItem) => {
    const upData = GallryData.filter((curElm) => {
      return curElm.category === catItem;
    });
    setItems(upData);
  };

  return (
    <>
      <div className="bg-slate-950 w-full  text-white  p-12 ">
        <h1 className="text-center text-[50px]">Filter Image Gallery </h1>
        <div>
          <ul className="flex justify-center align-middle gap-5 py-6 flex-wrap">
            <li
              onClick={() => {
                setItems(GallryData);
              }}
            ><Link href="">All</Link>
           
            </li>
            <li onClick={() => filterItem("pizza")}> <Link href="">pizza</Link></li>
            <li onClick={() => filterItem("Burger")}><Link href="">Burger</Link></li>
            <li onClick={() => filterItem("Cake")}><Link href="">Cake</Link></li>
            <li onClick={() => filterItem("IceCream")}><Link href="">Ice Cream</Link> </li>
          </ul>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-8  py-5">
          {items.map((e, i) => {
            return (
              <>
                <div className="card w-[300px]  relative border-solid border p-5 border-white ">
                   
                    <div className="w-[300] h-[200px]">
                            <img src={e.Img} alt=""  className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="mt-2 mb-5 text-[17px]  flex items-center ">{e.name } </h1>
                     
                    <div className="flex justify-between items-center ">
                        <h4>{e.price}</h4>
                        <Link href="#" className="bg-red-900 px-3 py-2 rounded-xl" > Order Now</Link>
                    </div>

                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ImgGallry;
