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
        venus_titre: 'venus',
        venus_color: 'venus_color',
        venus_planet_img: ['assets/planet-venus.svg', 'assets/planet-venus-internal.svg', 'psedo_venus'],
        venus_desc_text: `Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the
                        brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare
                        occasions, visible to the naked eye in broad daylight.`,
        venus_info: ['243 days', '224.7 days', '6,051.8 km', '471°c'],
    },
    earth: {
        earth_titre: 'earth',
        earth_color: 'earth_color',
        earth_planet_img: ['assets/planet-earth.svg', 'assets/planet-earth-internal.svg', 'psedo_earth'],
        earth_desc_text: `Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.`,
        earth_info: ['0.99 days', '365.26 days', '6,371 km', '16°c'],
    },
    jupiter: {
        mars_titre: 'mars',
        mars_color: 'mars_color',
        mars_planet_img: ['assets/planet-mars.svg', 'assets/planet-mars-internal.svg', 'psedo_mars'],
        mars_desc_text: `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than
                         only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red
                         Planet".`,
        mars_info: ['1.03 days', '1.88 years', '3,389.5 km', '−28°cs']
    },
    jupiter: {
        jupiter_titre: 'jupiter',
        jupiter_color: 'jupiter_color',
        jupiter_planet_img: ['assets/planet-jupiter.svg', 'assets/planet-jupiter-internal.svg', 'psedo_jupiter'],
        jupiter_desc_text: `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two
                        and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the
                        mass of the Sun.`,
        jupiter_info: ['9.93 hours', '11.86 years', '69,911 km', '-108°c'],
    },
    saturn: {
        saturn_titre: 'saturn',
        saturn_color: 'saturn_color',
        saturn_planet_img: ['assets/planet-saturn.svg', 'assets/planet-saturn-internal.svg', 'psedo_saturn'],
        saturn_desc_text: `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas
                            giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average
                            density of Earth.`,
        saturn_info: ['10.8 hours', '29.46 years', '58,232 km', '-138°c'],
    },
    uranus: {
        uranus_titre: 'uranus',
        uranus_color: 'uranus_color',
        uranus_planet_img: ['assets/planet-uranus.svg', 'assets/planet-uranus-internal.svg', 'psedo_uranus'],
        uranus_desc_text: ` Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according
                            to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and
                            fourth-largest planetary mass in the Solar System.`,
        uranus_info: ['17.2 hours', '84 years', '25,362 km', '-195°c'],
    },
    neptune: {
        neptune_titre: 'neptune',
        neptune_color: 'neptune_color',
        neptune_planet_img: ['assets/planet-neptune.svg', 'assets/planet-neptune-internal.svg', 'psedo_neptune'],
        neptune_desc_text: `Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the
                  fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times
                 the mass of Earth, more massive than its near-twin Uranus.`,
        neptune_info: ['16.08 hours', '164.79 years', '24,622 km', '-201°c'],
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

    case 'venus':
        titre_planet.textContent = js_all_planet.venus.venus_titre;
        color_planet = js_all_planet.venus.venus_color;
        planet_img = js_all_planet.venus.venus_planet_img;
        all_planet_img.src = js_all_planet.venus.venus_planet_img[0];
        planet_desc_text.textContent = js_all_planet.venus.venus_desc_text;
        for (let i = 0; i < information_all_planet.length; i++) {
            information_all_planet[i].textContent = js_all_planet.venus.venus_info[i];
        }
        switch_btn_and_image(all_btn_planet, color_planet, planet_img);
        break;

    case 'earth':
        titre_planet.textContent = js_all_planet.earth.earth_titre;
        color_planet = js_all_planet.earth.earth_color;
        planet_img = js_all_planet.earth.earth_planet_img;
        all_planet_img.src = js_all_planet.earth.earth_planet_img[0];
        planet_desc_text.textContent = js_all_planet.earth.earth_desc_text;
        for (let i = 0; i < information_all_planet.length; i++) {
            information_all_planet[i].textContent = js_all_planet.earth.earth_info[i];
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

    case 'jupiter':
        titre_planet.textContent = js_all_planet.jupiter.jupiter_titre;
        color_planet = js_all_planet.jupiter.jupiter_color;
        planet_img = js_all_planet.jupiter.jupiter_planet_img;
        all_planet_img.src = js_all_planet.jupiter.jupiter_planet_img[0];
        planet_desc_text.textContent = js_all_planet.jupiter.jupiter_desc_text;
        for (let i = 0; i < information_all_planet.length; i++) {
            information_all_planet[i].textContent = js_all_planet.jupiter.jupiter_info[i];
        }
        switch_btn_and_image(all_btn_planet, color_planet, planet_img);
        break
    case 'saturn':
        titre_planet.textContent = js_all_planet.saturn.saturn_titre;
        color_planet = js_all_planet.saturn.saturn_color;
        planet_img = js_all_planet.saturn.saturn_planet_img;
        all_planet_img.src = js_all_planet.saturn.saturn_planet_img[0];
        planet_desc_text.textContent = js_all_planet.saturn.saturn_desc_text;
        for (let i = 0; i < information_all_planet.length; i++) {
            information_all_planet[i].textContent = js_all_planet.saturn.saturn_info[i];
        }
        switch_btn_and_image(all_btn_planet, color_planet, planet_img);
        break
    case 'uranus':
        titre_planet.textContent = js_all_planet.uranus.uranus_titre;
        color_planet = js_all_planet.uranus.uranus_color;
        planet_img = js_all_planet.uranus.uranus_planet_img;
        all_planet_img.src = js_all_planet.uranus.uranus_planet_img[0];
        planet_desc_text.textContent = js_all_planet.uranus.uranus_desc_text;
        for (let i = 0; i < information_all_planet.length; i++) {
            information_all_planet[i].textContent = js_all_planet.uranus.uranus_info[i];
        }
        switch_btn_and_image(all_btn_planet, color_planet, planet_img);
        break
    case 'neptune':
        titre_planet.textContent = js_all_planet.neptune.neptune_titre;
        color_planet = js_all_planet.neptune.neptune_color;
        planet_img = js_all_planet.neptune.neptune_planet_img;
        all_planet_img.src = js_all_planet.neptune.neptune_planet_img[0];
        planet_desc_text.textContent = js_all_planet.neptune.neptune_desc_text;
        for (let i = 0; i < information_all_planet.length; i++) {
            information_all_planet[i].textContent = js_all_planet.neptune.neptune_info[i];
        }
        switch_btn_and_image(all_btn_planet, color_planet, planet_img);
        break
}