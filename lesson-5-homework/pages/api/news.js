// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default (req, res) => {
  var json
  var filename = '/Users/admin/lesson-5-homework/data/data1.json'
  var request=new XMLHttpRequest()
  request.open("get",filename)
  request.send(null)
  request.onload = function(){
    if(request.status==200){
      json=JSON.parse(request.responseText)
    }
  }

  res.statusCode = 200;
  
  res.json({
    code: 200,
    data: [
      {
        name: "hello",
        content: "hello world",
      },
      {
        name: "hello",
        content: "hello world",
      },
      {
        name: "hello",
        content: "hello world",
      },
      {
        name: "hello",
        content: "hello world",
      },
      {
        name: "hello",
        content: "hello world",
      },
    ],
    data1:json.data,
  });

};