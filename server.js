var cacheDB="v1"

this.addEventListener("install",event=>{
 event.waitUntil(
 caches.open(cacheDB).then((myDB)=>{
   myDB.addAll(['index.html'])
 })

  )

})

this.addEventListener("fetch",event=>{
  event.respondWith(
    caches.open(cacheDB).then((myDb)=>{
      return myDb.match(event.request).then((result)=>{
        return result  || fetch(event.request).then(res=>{
          myDb.put(event.request,res.clone())
          return res;
        })
      })
    })
  )
})
