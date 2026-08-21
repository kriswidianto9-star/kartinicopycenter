function kartiniWhatsApp(service = "") {

    let message =
        "Halo Kartini Copy Center,\n\n";

    if (service) {

        message +=
            `Saya tertarik dengan layanan ${service}.\n\n`;

    }

    message +=
        "Saya ingin bertanya mengenai detail layanan dan pemesanannya.";

    return (
        "https://wa.me/6281155555379?text=" +
        encodeURIComponent(message)
    );

}


document
    .querySelectorAll("[data-whatsapp]")
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                const service =
                    button.dataset.whatsapp;

                button.href =
                    kartiniWhatsApp(
                        service
                    );

            }
        );

    });
    /* =================================
   HERO ENTRANCE
================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const heroElements =
            document.querySelectorAll(
                ".hero-title > *, .hero-topline span, .hero-bottom > *, .hero-circle, .hero-sticker"
            );


        heroElements.forEach(
            (element, index) => {

                element.style.opacity = "0";

                element.style.transform +=
                    " translateY(25px)";


                setTimeout(
                    () => {

                        element.style.transition =
                            "opacity .8s ease, transform .8s cubic-bezier(.2,.8,.2,1)";

                        element.style.opacity =
                            "1";


                        element.style.transform =
                            element.style.transform.replace(
                                " translateY(25px)",
                                ""
                            );

                    },
                    100 + index * 90
                );

            }
        );

    }
);
/* =================================
   HERO PARALLAX
================================= */

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


if (
    heroVisual &&
    window.innerWidth > 900
) {

    window.addEventListener(
        "mousemove",
        event => {

            const x =
                (
                    event.clientX /
                    window.innerWidth
                    - .5
                );

            const y =
                (
                    event.clientY /
                    window.innerHeight
                    - .5
                );


            heroVisual.style.transform =
                `translate(
                    ${x * 12}px,
                    ${y * 8}px
                )`;

        }
    );

}