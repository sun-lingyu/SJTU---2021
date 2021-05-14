import Link from 'next/link'
import Image from 'next/image'

export default function Second() {
 return (
    <body>
        <div class="main_wrapper">
            <div class="header">
                <Link href='/'>
                    <a>
                        <button/>
                    </a>
                </Link>
            </div>
            <div>
            <div class="meituan">
            <Image
                    src="/logo.png"
                    alt="second"
                    width={100}
                    height={100}
            />
            <h1>美团外卖</h1>
            </div>
            <div class="main_pic">
                <Image
                    src="/img/1c2596ba5c1c5aedf7650686a5432cd3202894.jpg"
                    alt="second"
                    width={500}
                    height={400}
                />
            </div>
            </div>
            <div class='textbox'>
                <font size="3">123</font><br/>
                <font size="2"> 456</font><br/><br/>
                <font size="3" color="#fd9d21"> 789</font><br/>
            </div>
            <div class="main_bottom">
                <button class="btn">立即抢购</button>
            </div>
        </div>
    </body>
 );
}