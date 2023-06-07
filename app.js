let all_btn_planet = document.getElementsByClassName("all_btn_planet");
let all_planet_img = document.getElementById("all_planet_img");
let planet_desc_text = document.getElementById("planet_desc_text")
let information_all_planet = document.getElementsByClassName("information_all_planet");
let contain_img = document.getElementById("contain");
let titre_planet = document.getElementById("titre_planet");



let color_planet = "";
let planet_img = "";

const js_all_planet = {
    mercury: {
        mercury_titre: 'mercury',
        mercury_color: 'mercury_color',
        mercury_planet_img: ['assets/planet-mercury.svg', 'assets/planet-mercury-internal.svg', 'psedo_mercury'],
        mercury_desc_text: `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes
                            87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar
                            System, and is a rocky body like Earth.`,
        mercury_info: ['58.6 day', '87.97 days', '2,439.7 km', '430°c'],
    },
    venus: {
        ___titre: '',
        ___color: '',
        ___planet_img: [],
        ___desc_text: ``,
        ___info: [],
    },
    earth: {
        ___titre: '',
        ___color: '',
        ___planet_img: [],
        ___desc_text: ``,
        ___info: [],
    },
    mars: {
        mars_titre: 'mars',
        mars_color: 'mars_color',
        mars_planet_img: ['assets/planet-mars.svg', 'assets/planet-mars-internal.svg', 'psedo_mars'],
        mars_desc_text: `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than
                         only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red
                         Planet".`,
        mars_info: ['1.03 days', '1.88 years', '3,389.5 km', '−28°cs']
    },
    jupiter: {
        ___titre: '',
        ___color: '',
        ___planet_img: [],
        ___desc_text: ``,
        ___info: [],
    },
    saturn: {
        ___titre: '',
        ___color: '',
        ___planet_img: [],
        ___desc_text: ``,
        ___info: [],
    },
    uranus: {
        ___titre: '',
        ___color: '',
        ___planet_img: [],
        ___desc_text: ``,
        ___info: [],
    },
    neptune: {
        ___titre: '',
        ___color: '',
        ___planet_img: [],
        ___desc_text: ``,
        ___info: [],
    },
}

function switch_btn_and_image(table_btn, color, tab_image) {
    let last_select = table_btn[0];
    for (let i = 0; i < table_btn.length; i++) {
        table_btn[i].addEventListener("click", () => {
            last_select.classList.remove("border-bottom");
            contain_img.classList.remove(tab_image[2])
            table_btn[i].classList.add("border-bottom");
            table_btn[i].classList.add(color)
            if (table_btn[i].dataset.modif_img === "2") {
                all_planet_img.src = tab_image[0];
                contain_img.classList.add(tab_image[2]);
            } else {
                all_planet_img.src = tab_image[table_btn[i].dataset.modif_img];
            }
            last_select = table_btn[i]
        })
    }
}



let base_url = window.location.href;

base_url = base_url.split('/')[base_url.split('/').length - 1];

switch (base_url) {
    case 'mercury':
        titre_planet.textContent = js_all_planet.mercury.mercury_titre;
        color_planet = js_all_planet.mercury.mercury_color;
        planet_img = js_all_planet.mercury.mercury_planet_img;
        all_planet_img.src = js_all_planet.mercury.mercury_planet_img[0];
        planet_desc_text.textContent = js_all_planet.mercury.mercury_desc_text;
        for (let i = 0; i < information_all_planet.length; i++) {
            information_all_planet[i].textContent = js_all_planet.mercury.mercury_info[i];
        }
        switch_btn_and_image(all_btn_planet, color_planet, planet_img);
        break;

    case 'mars':
        titre_planet.textContent = js_all_planet.mars.mars_titre;
        color_planet = js_all_planet.mars.mars_color;
        planet_img = js_all_planet.mars.mars_planet_img;
        all_planet_img.src = js_all_planet.mars.mars_planet_img[0];
        planet_desc_text.textContent = js_all_planet.mars.mars_desc_text;
        for (let i = 0; i < information_all_planet.length; i++) {
            information_all_planet[i].textContent = js_all_planet.mars.mars_info[i];
        }
        switch_btn_and_image(all_btn_planet, color_planet, planet_img);
        break;
}