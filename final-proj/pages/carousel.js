import React, { Component } from 'react';
import { Carousel } from 'antd';
import Link from 'next/link'
import Image from 'next/image'
import 'antd/dist/antd.css';

function Banner (){
    return (
        
        <Carousel autoplay>
            <div>
                <Link href='/second'>
                <a>
                <h3><img src='/carousel/waimai.webp'  alt="2" /></h3> 
                </a>
                </Link>
            </div>
            
            <div>
                <Link href='/second'>
                <a>
                <h3><img src='/carousel/meishi.webp'  alt="2" /></h3> 
                </a>
                </Link>
            </div>

            <div>
                <Link href='/second'>
                <a>
                <h3><img src='/carousel/jiudian.webp'  alt="3" /></h3> 
                </a>
                </Link>
            </div> 
        </Carousel>
    )
}
export default Banner;