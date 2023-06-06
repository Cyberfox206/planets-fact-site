let all_btn_planet = document.getElementsByClassName("all_btn_planet");
let all_planet_img = document.getElementById("all_planet_img");
let planet_desc_text = document.getElementById("planet_desc_text")
let information_all_planet = document.getElementsByClassName("information_all_planet");

const js_all_planet = {
    mercury: {
        mercury_color: 'mercury_color',
        mercury_planet_img: ['assets/planet-mercury.svg', 'assets/planet-mercury-internal.svg', 'psedo'],
        mercury_desc_text: `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes
                            87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar
                            System, and is a rocky body like Earth.`,
        mercury_info: ['58.6 day', '87.97 days', '2,439.7 km', '430°c'],
    }
}

function switch_btn_and_image(table_btn, color, tab_image) {
    let last_select = table_btn[0];
    for (let i = 0; i < table_btn.length; i++) {
        table_btn[i].addEventListener("click", () => {
            last_select.classList.remove("border-bottom");
            table_btn[i].classList.add("border-bottom");
            table_btn[i].classList.add(color)
            all_planet_img.src = tab_image[table_btn[i].dataset.modif_img];
            last_select = table_btn[i]
        })
    }
}

const base_url = window.location.href;

switch (base_url) {
    case base_url:
        let color_planet = js_all_planet.mercury.mercury_color;
        let planet_img = js_all_planet.mercury.mercury_planet_img;
        all_planet_img.src = js_all_planet.mercury.mercury_planet_img[0];
        planet_desc_text.textContent = js_all_planet.mercury.mercury_desc_text;
        for (let i = 0; i < information_all_planet.length; i++) {
            information_all_planet[i].textContent = js_all_planet.mercury.mercury_info[i];
        }
        switch_btn_and_image(all_btn_planet, color_planet, planet_img);
        break;
}