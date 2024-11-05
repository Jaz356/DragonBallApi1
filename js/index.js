   async function fetchCharactersJson(requestURL) {
   const characters = document.getElementById (`characters`)
   const Characters = await fetchApiJson(requestCharacterUrl)
}
    
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

function createCharacterCard ({id, gender, image, name, ki, maxKi, race, affiliation}){
    return `
        <div class="card m-4" style="width: 30rem">
            <img src="${image}" class="card-img-top" alt="${name}.">
            <div class="col-d-8">
            <div class="card-body">
                 <h5 class="card-title">${name}</h5>
                 <h6 class="card-title">${ki}, ${maxKi}</h6>
                 <p class="card-text"><small class="text-body-secondary">${race}<small></p>
                 <p class="card-text"><small class="text-body-secondary">${gender}<small></p>
                 <p class="card-text"><small class="text-body-secondary">${affiliation}<small></p>
                 </div>
                </div>
                <p class="card-text mb-4">${race}</p>
                <h3>${id} €</h3>
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
