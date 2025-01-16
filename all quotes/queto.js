// // Write a program to write to get all the quotes in the same api link
let url="https://dummyjson.com/quotes"
async function getData(){
    const data= await fetch(url)
    const res=await data.json()
    console.log(res)
    res.quotes.forEach((x) => {
        let container=document.createElement("div")
        container.innerHTML=`<p>
        "${x.quote}"<p>`
        document.body.appendChild(container)
      });
}
getData()
