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
        console.log(country.capital);
        const div = document.createElement('div');
        div.classList.add('country-container')
        div.innerHTML = `
        <h3 class="country-name text-4xl">${country.name.common}</h3>
        <p>${country.capital}</p>
        <button>See Details</button>
        `
        main.appendChild(div);
        
    });
}
apiDataLoad();