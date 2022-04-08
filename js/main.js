const burgerManager = () => {
    const burgerModal = document.getElementById("burger");
    const burgerModalContent = document.querySelector(".burger-content");
    const openModalButton = document.getElementById("open-modal");

    openModalButton.addEventListener("click", () => {
        toggleModalVisibility();
    });

    burgerModalContent.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    burgerModal.addEventListener("click", () => {
        toggleModalVisibility();
    });

    function toggleModalVisibility() {
        burgerModal.classList.toggle("hidden");
    };
};

burgerManager();
