   const characterURL ="https://dragonball-api.com/api/characters?limit=58";
   async function fetchCharactersJson (requestURL) {
     
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
function createCharacterCard ({id, gender, image, name, ki, maxKi, race, affiliation}){
    return `
        <div class="card" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="${name}">
        <div class="card-body">
            <h5 class="card-title">"${name}"</h5>
            <p class="card-text">"${ki}"</p>
             <p class="card-text">"${maxKi}"</p>
              <p class="card-text">"${id}"</p>
            <p class="card-text">"${gender}"</p>
             <p class="card-text">"${race}"</p>
              <p class="card-text">"${affiliation}"</p>
        </div>
        </div>
            `;
}

async function displayCharacters(){
    const characterSection = document.getElementById('characterSection');
    const CharacterData = await fetchCharactersJson(characterURL);
    
    if (CharacterData && CharacterData.items){
        const CharacterCard = CharacterData.items.map(createCharacterCard).join('');
        characterSection.innerHTML = CharacterCard;
    }
    else{
        characterSection.innerHTML = `<p>Characters Json couldn't load</p>`;
    }
}

displayCharacters();


