let url2="https://dummyjson.com/quotes"
async function getData(){
    const data= await fetch(url2)
    const res=await data.json()
    console.log(res)
    const randomIndex = Math.floor(Math.random() * res.quotes.length);
    const randomQuote = res.quotes[randomIndex];
    console.log(randomQuote.quote)
    document.querySelector(".quote").textContent = `"${randomQuote.quote}"`;
}
getData()