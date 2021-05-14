import React, { useEffect, useState } from "react";
import Link from 'next/link'
export default function Content({data}) {
  return (
  <div class="list">
    {data.data.map((i) => {
      return (
        <Link href='/second'>
        <a>
          <div class='content'>
            <div class='imgbox'>
              <img src={"img/"+i.img}></img>
            </div>
            <div class='textbox'>
              <font size="3">{i.title}</font><br/>
              <font size="2"> {i.subtitle}</font><br/><br/>
              <font size="3" color="#fd9d21"> {i.price+"元"}</font><br/>
            </div>
          </div>
        </a>
        </Link>
      );
    })}
  </div>
  );
}
