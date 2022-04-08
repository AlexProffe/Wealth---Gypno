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
    }
};

burgerManager();

const modalManager = () => {
    const modal = document.getElementById("modal");
    const modalForm = document.querySelector(".modal-form");
    const openModalButtons = document.querySelectorAll(
        'button[data-action="modal"]'
    );
    const submitButton = modal.querySelector(".form-button");

    openModalButtons.forEach((button) => {
        button.addEventListener("click", () => {
            toggleModalVisibility();
        });
    });

    modalForm.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    modal.addEventListener("click", () => {
        toggleModalVisibility();
    });

    modalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const [name, phone, email, request] = modalForm;

        const formData = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            request: request.value,
        };

        console.log(formData);

        if (modalForm.checkValidity()) {
            toggleModalVisibility();
        }
    });

    function toggleModalVisibility() {
        modal.classList.toggle("hidden");
    }
};

modalManager();
