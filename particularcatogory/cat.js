let url="https://dummyjson.com/products/category/smartphones"
async function getdata(){
    let data=await fetch(url)
    let res=await data.json()
    console.log(res)
}getdata()