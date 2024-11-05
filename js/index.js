const requestURL = './json/index.json';

async function fetchCharacterJson() {
    try{
        const response = await fetch(requestURL);
        if (!response.ok){
            throw new Error(`An error occured. Json request failed ${response.status}.`)
        }
        return await response.json();
    }
    catch (error){
        console.error('An error occured. Null Json', error)
        return null;
    }
}

function createItemsCard ({id, name, brand, img, price, stars}){
    return `
        <div class="card m-4" style="width: 30rem">
            <img src="${img}" class="card-img-top" alt="Person wearing a ${brand} ${name}.">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h5 class="card-title">${name}</h5>
                    <div class="d-flex">
                        <i class="bi bi-star-fill me-2"></i>
                        <p>${stars}</p>
                    </div>
                </div>
                <p class="card-text mb-4">${brand}</p>
                <h3>${price} €</h3>
            </div>
        </div>
    `;
}
async function displayCharacters(){
    const shopSection = document.getElementById('shopSection');
    const CharacterData = await fetchCharactorJson();
    
    if (CharacterData && CharacterData.character){
        const CharacterCard = CharactersData.Character.map(createCharacterCard).join('');
        shopSection.innerHTML = CharacterCard;
    }
    else{
        shopSection.innerHTML = `<p>Characters Json couldn't load</p>`;
    }
}

displayCharacters();


const header = document.querySelector("header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});