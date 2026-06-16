
const burger = document.querySelector(".burger")
const menu = document.querySelector(".menu")

burger.addEventListener("click", () => {
    menu.classList.toggle("active")
})


const filters = document.querySelectorAll(".portfolio-filter-item");
const items = document.querySelectorAll(".cursor");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(el => el.classList.remove("active"));
        filter.classList.add("active");

        const filterName =
            filter.textContent.trim().toLowerCase();

        items.forEach(item => {

            if (
                filterName === "all" ||
                item.classList.contains(filterName)
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });
        AOS.refresh();


    });

});


