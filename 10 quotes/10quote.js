let url="https://dummyjson.com/quotes"
async function getdata(){
    let data=await fetch(url)
    let res=await data.json()
    res.quotes.forEach((x,index)=>{
        if(index-1<9){
            let container=document.createElement("div")
            container.innerHTML=`<p>
        "${index+1}:"${x.quote}"</p>`
        document.body.appendChild(container)
            // console.log(`${index+1}:"${x.quote}`)
        }
    })
}
getdata()