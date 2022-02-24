const main = document.getElementById('main');
const mainDetail = document.getElementById('detail')
// api data load 
const apiDataLoad = ()=>{
    const dataUrl = `https://restcountries.com/v3.1/all`;
    fetch(dataUrl)
    .then(res => res.json())
    .then(data => getData(data));
}
// get value 
const getData = (countries) => {
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country-container')
        div.innerHTML = `
        <h3 class="country-name text-4xl font-bold mb-2">${country.name.common}</h3>
        <p class="mb-2 text-2xl">${country.capital}</p>
        <button onclick="details('${country.name.common}')" class= "bg-white rounded-lg text-2xl py-1 px-2 border-2">See Details</button>
        
        `;
        main.appendChild(div);
    });
}
// show the details 
const details =(name) =>{
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => getDetails(data[0]))
} 
const getDetails = (name)=>{
    
    const detail = document.createElement('div');
    detail.innerHTML = `
    <h2 class="country-name text-4xl font-bold mb-2">${name.capital}</h2>
    `;
    console.log(name.capital);
    // mainDetail.appendChild(detail);
}
apiDataLoad();
