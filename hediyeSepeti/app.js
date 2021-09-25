const gifts = [
    {
        id:1,
        title:"Orkide",
        price:"149,90 TL",
        img:"https://cdn03.ciceksepeti.com/cicek/at3740-1/M/at3740-1-8d8d1c2f2f7cf6e-b3634bfc.jpg",
        category:"Çiçek",
        desc:"Gold çizgili vazoda 2 dal mor orkide çiçeği"
    },
    {
        id:2,
        title:"Turuncu Gül",
        price:"159,00 TL",
        img:"https://cdn03.ciceksepeti.com/cicek/at4282-1/M/turuncu-guller-cicek-buketi-at4282-1-20fdb9ed91b04ccfb17c3843bd6bc926.jpg",
        category:"Çiçek",
        desc:"Turuncu gül çiçek buketi"
    },
    {
        id:3,
        title:"Beyaz Gül",
        price:"109,00 TL",
        img:"https://cdn03.ciceksepeti.com/cicek/at4499-1/M/at4499-1-8d904582952daa7-221ef5fc.jpg",
        category:"Çiçek",
        desc:"Paşabahçe cam vazo 15 beyaz gül arajmanı"
    },
    {
        id:4,
        title:"Lilyum",
        price:"109,00 TL",
        img:"https://cdn03.ciceksepeti.com/cicek/at2703-1/M/kar-prensesi-at2703-1-1.jpg",
        category:"Çiçek",
        desc:"Kar beyaz lilyum arajmanı"
    },
    {
        id:5,
        title:"Mor Çiçek Buketi",
        price:"69,99 TL",
        img:"https://cdn03.ciceksepeti.com/cicek/at4288-1/M/mor-dusler-cicek-buketi-at4288-1-a43a60444242434d9319d5c959d3ba02.jpg",
        category:"Çiçek",
        desc:"Mor Çiçek Buketi"
    },
    {
        id:6,
        title:"Gezegen Lolipoplar",
        price:"36,95 TL",
        img:"https://giftsear.ch/uploads/large/planet-lollipops-gift-pack.jpg",
        category:"Cooking Goodies",
        desc:"Gezegen Lolipop hediye paketi"
    },
    {
        id:7,
        title:"Kek Buketi",
        price:"79,99 TL",
        img:"https://cdn03.ciceksepeti.com/cicek/gr2142-1/M/gr2142-1-8d87f5220fa5151-f84d0941.jpg",
        category:"Cooking Goodies",
        desc:"30 pirinç patlağı ve 32 adet kek"
    },
    {
        id:8,
        title:"Truf ve Çilek Buketi",
        price:"59,90 TL",
        img:"https://cdn03.ciceksepeti.com/cicek/kc7361440-1/M/askin-tadi-truf-ve-cilek-buketi-kc7361440-1-fba6b9533b3a4906804ae28d387fc6a1.jpg",
        category:"Cooking Goodies",
        desc:"11 adet bitter ve sütlü tartolet, bitter, sütlü ve hindistan cevizli karışık truf, browni gül kek ve sade çilek."
    },
    {
        id:9,
        title:"Macaron",
        price:"105,00 TL",
        img:"https://cdn03.ciceksepeti.com/cicek/kc4974072-1/M/macaron-sepeti-12li-makaron-kutusu-kc4974072-1-ad48ea406e6249139d8f7bf373cdc9bc.jpg",
        category:"Cooking Goodies",
        desc:"Limon ,Çilek, Kavun, Vanilya, Karamel ,Çikolata ,Nane, Ahududu, Oreo ,Yaban Mersini, Gül ,Hindistan Cevizi"
    },
    {
        id:10,
        title:"Kedi Baskılı Kupa",
        price:"22,11 TL",
        img:"https://cdn03.ciceksepeti.com/cicek/kc1923107-1/M/kisiye-ozel-isimli-baskili-kupa-kc1923107-1-2d9abf8c01674a32a7e67c202f12552a.jpg",
        category:"Kupa",
        desc:"Kişiye özel isimli baskılı kupa"
    },
    {
        id:11,
        title:"Fincan",
        price:"49,99 TL",
        img:"https://cdn03.ciceksepeti.com/cicek/kc147589-1/M/kisiye-ozel-hediye-ahsap-altlikli-fincan-kc147589-1-8d6aedc03abdab4-133db770.jpg",
        category:"Kupa",
        desc:"Ahşap atlıklı fincan"
    },
    {
        id:12,
        title:"Küçük Prens Kupa",
        price:"29,90 TL",
        img:"https://cdn03.ciceksepeti.com/cicek/kc7441018-1/M/kucuk-prens-kupa-bardak-kc7441018-1-669224a45f7e43bb8ecb0b07988a5413.jpg",
        category:"Kupa",
        desc:"Küçük prens baskılı kupa bardak"
    },
    {
        id:13,
        title:"Pikap",
        price:"549,90 TL",
        img:"https://cdn03.ciceksepeti.com/cicek/kc6215146-1/M/gdl-retro-canta-pikap-t317b-krem--bluetooth-sarjli--kc6215146-1-e769ca74f8724b1baf939fa0c02c4c69.jpg",
        category:"Hobi",
        desc:"GDL retro çanta pikap krem"
    },
    {
        id:14,
        title:"Puzzle",
        price:"69,90 TL",
        img:"https://cdn03.ciceksepeti.com/cicek/kc6066392-1/M/kaplumbaga-terbiyecisi-1000-parca-puzzle-kc6066392-1-31750419f01a45a6a39b609b869b40cd.jpg",
        category:"Hobi",
        desc:"Ritoys kaplumbağa terbiyecisi 1000 parça puzzle"
    },
    {
        id:15,
        title:"Müzik Kutusu",
        price:"129,90 TL",
        img:"https://cdn03.ciceksepeti.com/cicek/kc610620-1/M/dans-eden-balerinli-piyano-muzik-kutusu-buyuk-boy-kc610620-1-51872b17f2414030b52752244a3edb85.jpg",
        category:"Hobi",
        desc:"Dans eden balerinli piyano müzik kutusu büyük boy"
    }
];

const filterButtons = document.querySelector("ul.list-group");
const cards = document.querySelector(".card-groups"); 

//load items
window.addEventListener("DOMContentLoaded", function(){
    displayItems(gifts);
    displayFilterButtons();
});

// filter items
function displayFilterButtons(){
    const categories = gifts.reduce(function (values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },['All Gifts']);

    const categoryBtns = categories.map(function (category) {
        return `<button class="btn text-start  border-0 border-bottom mb-4" data-id="${category}">${category}</button>`
    }).join("");

    filterButtons.innerHTML = categoryBtns;
    
    const btns = document.querySelectorAll(".btn");

    btns.forEach(function(btn){
        btn.addEventListener('click',function(e){
            const category = e.currentTarget.dataset.id;
            const giftCategory = gifts.filter(function (menuItem) {
                if(menuItem.category === category){
                    return menuItem;
                }
            });
            if(category === 'All Gifts'){
                displayItems(gifts);
            }
            else{
                displayItems(giftCategory);
            }
            let activeBtn = document.getElementsByClassName("active");
            if(activeBtn.length > 0){
                console.log(activeBtn);
                activeBtn[0].className = activeBtn[0].className.replace(" active", "");
                
            }
            this.className += " active";
        });
    
    });

    
}

//gift item
function displayItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<div class="col">
        <div class="card mb-3 mt-3 bg-light" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${item.img}" class="img-fluid rounded-start border border-3 border-dark" style="width:150px; height:150px;"
                        alt="${item.title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <div>
                            <h5 class="card-title">${item.title}
                                <span class="price float-end">${item.price}</span>
                            </h5>
                        </div>
                        <hr style="color: #ed522e;" size="4">
                        <p class="card-text text-secondary">${item.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    });
    displayMenu = displayMenu.join("");
    cards.innerHTML = displayMenu;

}