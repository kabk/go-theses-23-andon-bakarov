

    const scrollContainer = document.querySelector("page-wrapper");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
    

