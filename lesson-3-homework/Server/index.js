console.log("helloworld")
const base_url="https://www.toutiao.com/"
const max=3
var index=1

function show(json){
  console.log(json)
  for(i=0;i<json.data.length;i++){
    let div=document.createElement('div')
    div.innerHTML='<a href="'+base_url+'a'+json.data[i].source_url.slice(7)+'"><p>'+json.data[i].title+'</p></a>'
    if(json.data[i].image_url!=undefined){
      div.innerHTML='<a href="'+base_url+'a'+json.data[i].source_url.slice(7)+'"><img src="'+json.data[i].image_url+'"></a>'+div.innerHTML
    }
    
    div.className='content'
    let center = document.getElementById("center")
    center.insertBefore(div,center.lastChild)
  }
  adjustheight(json.data.length+1)
}
function adjustheight(length){
  let container=document.getElementById("container")
  let content=document.getElementsByClassName("content")
  container.style.height=container.offsetHeight+length*content[0].offsetHeight
}

function loadfunc(i){
  const filename=`data${i}.json`
  var request=new XMLHttpRequest()
  request.open("get",filename)
  request.send(null)
  request.onload = function(){
    if(request.status==200){
      var json=JSON.parse(request.responseText)
      show(json)
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function wrapper(){
  await sleep(500)
  loadfunc(index++)
}


window.onload=loadfunc(index++)


window.onscroll = function (){
    var marginBot = 0;
    if (document.documentElement.scrollTop){
    marginBot = document.documentElement.scrollHeight - (document.documentElement.scrollTop+document.body.scrollTop)-document.documentElement.clientHeight;
    } else {
    marginBot = document.body.scrollHeight - document.body.scrollTop- document.body.clientHeight;
    }
    if(marginBot<=0 && index<=max) {
    wrapper()
    }
  }