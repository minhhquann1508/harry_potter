let result = [];
const searchInfo = () => {
    result = [];
    let searchValue = document.getElementById('seaching').value;
    let type = document.getElementById('type').value;
    fetchData(type,searchValue)
}
//fetch
const fetchData = async (type,value) => {
    try {
        let res = await axios({
            url:`https://api.potterdb.com/v1/${type}?filter[name_cont_any]=${value}`,
            method:"GET"
        })
        result = res.data.data;
        render(result,type);
    }
    catch (err) {
        console.log(err)
    }
}

const render = (list,type) => {
    switch (type) {
        case 'books' : 
            let list_book = list.map((item) => {
                return `
                <div class="item">
                    <img class="img-fluid" src=${item.attributes.cover} alt="image">
                    <h5 class="item-title">${item.attributes.title}</h5>
                    <h6 class="item-title">${item.attributes.author}</h6>
                    <a href="${item.attributes.wiki}" class="detail-item">Click for more details</a>
                </div>
                `
            })
        document.querySelector('.list').innerHTML = list_book.join('');
        break;
        case 'characters' : 
            let list_characters = list.map((item) => {
                return `
                <div class="item">
                    <img class="img-fluid" src=${item.attributes.image} alt="image">
                    <h5 class="item-title">${item.attributes.name}</h5>
                    <h6 class="item-title">${item.attributes.born}</h6>
                    <h6 class="item-title">${item.attributes.house}</h6>
                    <a href="${item.attributes.wiki}" class="detail-item">Click for more details</a>
                </div>
                `
            })
        document.querySelector('.list').innerHTML = list_characters.join('');
        break;
        case 'movies' : 
            let list_movies = list.map((item) => {
                return `
                <div class="item">
                    <img class="img-fluid" src=${item.attributes.poster} alt="image">
                    <h5 class="item-title">Box office:${item.attributes.title}</h5>
                    <h5 class="item-title">Box office:${item.attributes.directors[0]}</h5>
                    <h5 class="item-title">Box office:${item.attributes.box_office}</h5>
                    <h6 class="item-title">Budget:${item.attributes.budget}</h6>
                    <a href="${item.attributes.wiki}" class="detail-item">Click for more details</a>
                </div>
                `
            })
        document.querySelector('.list').innerHTML = list_movies.join('');
        break;
        case 'potions' : 
            let list_potions = list.map((item) => {
                return `
                <div class="item">
                    <img class="img-fluid" src=${item.attributes.image} alt="image">
                    <h5 class="item-title">Name:${item.attributes.name}</h5>
                    <h6 class="item-title">Difficulty:${item.attributes.difficulty}</h6>
                    <h6 class="item-title">Effect:${item.attributes.effect}</h6>
                    <a href="${item.attributes.wiki}" class="detail-item">Click for more details</a>
                </div>
                `
            })
        document.querySelector('.list').innerHTML = list_potions.join('');
        break;
        case 'spells' : 
            let list_spells = list.map((item) => {
                return `
                <div class="item">
                    <img class="img-fluid" src=${item.attributes.image} alt="image">
                    <h5 class="item-title">Name:${item.attributes.name}</h5>
                    <h6 class="item-title">Effect:${item.attributes.effect}</h6>
                    <a href="${item.attributes.wiki}" class="detail-item">Click for more details</a>
                </div>
                `
            })
        document.querySelector('.list').innerHTML = list_spells.join('');
        break;
    }
    
}