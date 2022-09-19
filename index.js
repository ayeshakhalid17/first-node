console.log("HELLO WORLD FROM NODE JS");

const http=require('http');
const server=http.createServer((req,res)=>{
    res.end("hello i am a server ask me anything");
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})