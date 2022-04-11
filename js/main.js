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

const modalManager = (formSelector) => {
    const modal = document.getElementById("modal");
    const modalForm = document.querySelector(formSelector);
    const openModalButtons = document.querySelectorAll(
        'button[data-action="modal"]'
    );
    const submitButton = modalForm.querySelector(".form-button");

    openModalButtons.forEach((button) => {
        button.addEventListener("click", () => {
            toggleModalVisibility();
        });
    });

    modalForm && modalForm.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    modal.addEventListener("click", () => {
        toggleModalVisibility();
    });

    modalForm && modalForm.addEventListener("submit", (e) => {
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
            modal.classList.add('hidden');
        }
    });

    function toggleModalVisibility() {
        modal.classList.toggle("hidden");
    }
};

modalManager('.modal-form');
modalManager('.contact-form');

const accordionManager = (selector) => {
    const items = document.querySelectorAll(selector);
    items.forEach(item => {
        const control = item.querySelector(selector + '-control');
        const content = item.querySelector(selector + '-content');
        const icon = item.querySelector(selector + '-control-icon')

        control.addEventListener('click', event => {
            if(content.classList.contains('visible')) {
                content.style.maxHeight = null;
                icon.textContent = "+";
                content.classList.remove('visible');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.innerHTML = "&ndash;";
                content.classList.add('visible');
            }
        })
    });
}

accordionManager('.session');
