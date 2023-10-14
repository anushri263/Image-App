const accessKey = "2enu5j-Lkvq78oelfnPDDC1xxKnoldbLrZqHX1g4jaE"

const foemE1 = document.querySelector("form");
const inputE1 = document.getElementById("Search-input");
const search = document.querySelector(".search-inputs");
const searchBtn = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImage()
{
    const inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results

    if(page === 1)
    {
        search.innerHTML="";
    }
    results.map((result)=>{
        const imagewrapper = document.createElement('div');
        imagewrapper.classList.add("search-input");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imageLink);
        search.appendChild(imagewrapper);
    });

    page++;
    if(page > 1)
    {
        searchBtn.style.display="block";
    }
}

foemE1.addEventListener("submit" , (event) =>
{
    event.preventDefault();
    page=1;
    searchImage();
});

searchBtn.addEventListener("click", ()=> 
{
    searchImage();
});