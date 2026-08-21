const filterButtons = document.querySelectorAll(".filter-btn");

const catalogCards = document.querySelectorAll(".catalog-card");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;


        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        catalogCards.forEach((card) => {

            const category = card.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});