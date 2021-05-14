window.onscroll = function (){
    var marginBot = 0;
    if (document.documentElement.scrollTop){
    marginBot = document.documentElement.scrollHeight - (document.documentElement.scrollTop+document.body.scrollTop)-document.documentElement.clientHeight;
    } else {
    marginBot = document.body.scrollHeight - document.body.scrollTop- document.body.clientHeight;
    }
    if(marginBot<=0) {
      console.log("here")
      ReactDOM.render(
        <p>1234567890</p>,
        document.getElementById("container")
      )
    }
  }