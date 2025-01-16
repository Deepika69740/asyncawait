let url="https://dummyjson.com/products"
async function getdata(){
    let data=await fetch(url)
    let res=await data.json()
    console.log(res)
    res.products.forEach((x,index)=>{
        console.log(`category: ${x.category}`)
    })
}getdata()