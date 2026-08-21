const showcase = document.querySelector(".showcase-3d");

if (showcase) {

    showcase.addEventListener("mousemove", (event) => {

        const rect = showcase.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateY =
            ((x - centerX) / centerX) * 8;

        const rotateX =
            ((centerY - y) / centerY) * 8;


        showcase.style.transform =
            `perspective(1200px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;
    });


    showcase.addEventListener("mouseleave", () => {

        showcase.style.transform =
            "perspective(1200px) rotateX(0deg) rotateY(0deg)";

    });

}