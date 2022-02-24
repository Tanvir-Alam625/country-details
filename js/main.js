const main = document.getElementById('main');
// console.log(main);
const apiDataLoad = ()=>{
    const dataUrl = `https://restcountries.com/v3.1/all`;
    fetch(dataUrl)
    .then(res => res.json())
    .then(data => getData(data));
}
const getData = (countries) => {
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country-container')
        div.innerHTML = `
        <h3 class="country-name text-4xl font-bold mb-2">${country.name.common}</h3>
        <p class="mb-2 text-2xl">${country.capital}</p>
        <a href="./details.html">
        <button onclick="details('${country.name.common}')" class= "bg-white rounded-lg text-2xl py-1 px-2 border-2">See Details</button></a>
        `
        main.appendChild(div);
        
    });
}
const details =(name) =>{
    console.log(name);
} 
apiDataLoad();
