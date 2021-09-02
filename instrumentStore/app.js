//items
const instruments = [
    {
        id: 1,
        title: "Trompet",
        category: "Nefesli",
        price: 2.552,
        img: "img//trompet.jpg",
        desc: `Nefesli Müzik Aleti`,
    },
    {
        id: 2,
        title: "Klarnet",
        category: "Nefesli",
        price: 1.402,
        img: "img/klarnet.jpg",
        desc: `Nefesli Müzik Aleti`,
    },
    {
        id: 3,
        title: "Yan Flüt",
        category: "Nefesli",
        price: 2.548,
        img: "img/yan-flüt.jpg",
        desc: `Nefesli Müzik Aleti`,
    },
    {
        id: 4,
        title: "Saksafon",
        category: "Nefesli",
        price: 4.896,
        img: "img/saksafon.jpg",
        desc: `Nefesli Müzik Aleti`,
    },
    {
        id: 5,
        title: "Ney",
        category: "Nefesli",
        price: 125,
        img: "img/ney.jpg",
        desc: `Nefesli Müzik Aleti`,
    },
    {
        id: 6,
        title: "Folklör Davulu",
        category: "Vurmalı",
        price: 212,
        img: "img/folklör-davulu.jpg",
        desc: `Vurmalı Müzik Aleti`,
    },
    {
        id: 7,
        title: "Def Bendir",
        category: "Vurmalı",
        price: 255,
        img: "img/def-bendir.jpg",
        desc: `Vurmalı Müzik Aleti`,
    },
    {
        id: 8,
        title: "Def",
        category: "Vurmalı",
        price: 255,
        img: "img/def.jpg",
        desc: `Vurmalı Müzik Aleti`,
    },
    {
        id: 9,
        title: "Erbane",
        category: "Vurmalı",
        price: 255,
        img: "img/erbane.jpg",
        desc: `Yaylı Müzik Aleti`,
    },
    {
        id: 10,
        title: "Darbuka",
        category: "Vurmalı",
        price: 140,
        img: "img/darbuka.jpg",
        desc: `Vurmalı Müzik Aleti`,
    },
    {
        id: 11,
        title: "Elektronik Gitar",
        category: "Telli/Yaylı",
        price: 1.275,
        img: "img/elektronik-gitar.jpg",
        desc: `Telli Müzik Aleti`,
    },
    {
        id: 12,
        title: "Ukulele",
        category: "Telli/Yaylı",
        price: 179,
        img: "img/ukulele.jpg",
        desc: `Telli Müzik Aleti`,
    },
    {
        id: 13,
        title: "Keman",
        category: "Telli/Yaylı",
        price: 673,
        img: "img/keman.jpg",
        desc: `Yayli Müzik Aleti`,
    },
    {
        id: 14,
        title: "Klasik Gitar",
        category: "Telli/Yaylı",
        price: 449,
        img: "img/klasik-gitar.png",
        desc: `Telli Müzik Aleti`,
    }
];

const row = document.querySelector(".row");
const btnContainer = document.querySelector(".menu");

//load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(instruments);
    displayMenuButtons();
});

//filter items
function displayMenuButtons() {
    const categories = instruments.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;

    }, ['All']);

    const categoryBtns = categories.map(function (category) {
        return `<button class="btn btn-light" data-id="${category}">${category}</button>`;
    }).join("");

    btnContainer.innerHTML = categoryBtns;

    const btns = btnContainer.querySelectorAll(".btn");

    btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const instrumentCategory = instruments.filter(function (menuItem) {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === 'All') {
                displayMenuItems(instruments);
            }
            else {
                displayMenuItems(instrumentCategory);
            }
        });
    });
}
 //instrument item
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<div class="col-6 col-md-4 mb-3">
                    <div class="card" style="border: 1px solid black;">
                        <img src= ${item.img} class="card-img-top" alt= ${item.title}>
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.desc}</p>
                            <span class="badge bg-secondary p-2">${item.price} <i class="fas fa-lira-sign"></i></span>
                        </div>
                    </div>
                </div>`;
    });
    displayMenu = displayMenu.join("");
    row.innerHTML = displayMenu;

}
