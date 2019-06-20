if('serviceWorker' in navigator){
  console.log("yes");
   navigator.serviceWorker.register("server.js",{scope:"./"}).then(res=>{
  console.log("success");
   }).catch(error=>{
     console.log("fail");
   })
}else {
  console.log("No...!");
}
