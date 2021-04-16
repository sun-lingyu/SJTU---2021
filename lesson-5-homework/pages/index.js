
import React, { useEffect, useState } from "react";
const base_url="https://www.toutiao.com/"
export default function Home() {
  const [state, setState] = useState({
    list: [],
  });

  useEffect(() => {
    fetch('http://localhost:3000/data1.json').then((response)=>{
      response.json().then((res)=>{
        console.log(res.data)
        setState({
          list: res.data,
        });
    })
      
      
        })
  }, []);
  return (
    <body>
<div className="header" contenteditable>
<span>地点</span><span>天气</span><span>温度</span>
</div>
<div id="container">
  <div id="center" class="column">
  {state.list.map((i) => {
          return (
            <div class='content'>
              <a href={base_url+'a'+i.source_url.slice(7)} ><p>{i.title}</p></a> 
              <a href={base_url+'a'+i.source_url.slice(7)} ><img src={i.image_url}></img> </a>
            </div>
          );
        })}
  </div>
  <div id="left" class="column">
    <div class="fixed-content">
      <div><h3>今日头条</h3></div>
      <div class="tag"><p>content1</p></div>
      <div class="tag"><p>content2</p></div>
      <div class="tag"><p>content3</p></div>
      <div class="tag"><p>content4</p></div>
    </div>
  </div>
  <div id="right" class="column">
    <div class="fixed-content">
      <div id="search">
          <form  action="http://www.baidu.com/baidu" target="_blank">
          <input id="inputbox" type="text" name="word" placeholder="搜索内容" />
          <input type="submit" value="搜索" />
          </form>
      </div>
      <div class="block">
        content1
      </div>
      <div class="block">
        content2
      </div>
    </div>
  </div>
  <div id="footer" contenteditable>Footer</div>
</div>
</body>
  );
}