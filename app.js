

const base_url = window.location.href;
console.log(base_url)
switch (base_url) {
    case base_url:

        break;

    default:
        break;
}




let mercury_btn_tabl = document.getElementsByClassName("mercury_btn");
let mercury_img = document.getElementById("mercury_img")

function mercury_inteligency(mercury_btn_tabl, mercury_img) {
    let last_select = mercury_btn_tabl[0];
    for (let i = 0; i < mercury_btn_tabl.length; i++) {
        mercury_btn_tabl[i].addEventListener("click", () => {
            last_select.classList.remove("mercurycolor");
            last_select.classList.remove("border-bottom");
            last_select.classList.remove("mercury_geology");
            mercury_btn_tabl[i].classList.add("mercurycolor");
            mercury_btn_tabl[i].classList.add("border-bottom");

            if (mercury_btn_tabl[i].dataset.modif_img === "psedo") {
                mercury_img.classList.add("psedo");
                mercury_img.style.background = "center / cover url(assets/planet-mercury.svg)";
            } else {
                mercury_img.classList.remove("psedo");
                mercury_img.style.background = `center / cover url(${mercury_btn_tabl[i].dataset.modif_img})`;
            }

            last_select = mercury_btn_tabl[i];
        })
    }
}
mercury_inteligency(mercury_btn_tabl, mercury_img);