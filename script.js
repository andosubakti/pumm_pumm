function validateForm() {
    const input = document.forms["subscribe"]["email-input"].value;
    const alertSpan = document.querySelector('.alert');
    const message = document.createTextNode("Email must be filled out")
    if (input == "") {
        if (alertSpan.hasChildNodes()) {
            alertSpan.removeChild(alertSpan?.firstChild)
        }
        alertSpan.appendChild(message)
        return false;
    }
}

const productObject = {
    green: {
        product1: {
            src: "img/green-product-1.svg",
            alt: "product-1-green"
        },
        product2: {
            src: "img/green-product-2.svg",
            alt: "product-2-green"
        },
        product3: {
            src: "img/green-product-3.svg",
            alt: "product-3-green"
        },
        product4: {
            src: "img/green-product-4.svg",
            alt: "product-4-green"
        },
        product5: {
            src: "img/green-product-5.svg",
            alt: "product-5-green"
        },
    },
    blue: {
        product1: {
            src: "img/blue-product-1.svg",
            alt: "product-1-blue"
        },
        product2: {
            src: "img/blue-product-2.svg",
            alt: "product-2-blue"
        },
        product3: {
            src: "img/blue-product-3.svg",
            alt: "product-3-blue"
        },
        product4: {
            src: "img/blue-product-4.svg",
            alt: "product-4-blue"
        },
        product5: {
            src: "img/blue-product-5.svg",
            alt: "product-5-blue"
        },
    },
    mariona: {
        product1: {
            src: "img/mariona-product-1.svg",
            alt: "product-1-mariona"
        },
        product2: {
            src: "img/mariona-product-2.svg",
            alt: "product-2-mariona"
        },
        product3: {
            src: "img/mariona-product-3.svg",
            alt: "product-3-mariona"
        },
        product4: {
            src: "img/mariona-product-4.svg",
            alt: "product-4-mariona"
        },
        product5: {
            src: "img/mariona-product-5.svg",
            alt: "product-5-mariona"
        },
    },
    gray: {
        product1: {
            src: "img/gray-product-1.svg",
            alt: "product-1-gray"
        },
        product2: {
            src: "img/gray-product-2.svg",
            alt: "product-2-gray"
        },
        product3: {
            src: "img/gray-product-3.svg",
            alt: "product-3-gray"
        },
        product4: {
            src: "img/gray-product-4.svg",
            alt: "product-4-gray"
        },
        product5: {
            src: "img/gray-product-5.svg",
            alt: "product-5-gray"
        },
    }
}

const greenButton = document.querySelector("#green");
const blueButton = document.querySelector("#blue");
const marionaButton = document.querySelector("#mariona");
const grayButton = document.querySelector("#gray");

const allButtons = [greenButton, blueButton, marionaButton, grayButton];
const selected = "section-4__controller-color-item--selected";
const notSelected = "section-4__controller-color-item";

const product1 = document.querySelector("#product-1");
const product2 = document.querySelector("#product-2");
const product3 = document.querySelector("#product-3");
const product4 = document.querySelector("#product-4");
const product5 = document.querySelector("#product-5");

function cleaner() {
    for (let index = 0; index < allButtons.length; index++) {
        const element = allButtons[index];
        if (element.classList.contains(selected)) {
            element.classList.remove(selected)
            element.classList.add(notSelected)
        }
    }
}

function greenClickHandler() {
    cleaner();
    greenButton.classList.remove(notSelected);
    greenButton.classList.add(selected);
    product1.setAttribute("src", productObject.green.product1.src);
    product1.setAttribute("alt", productObject.green.product1.alt);
    product2.setAttribute("src", productObject.green.product2.src);
    product2.setAttribute("alt", productObject.green.product2.alt);
    product3.setAttribute("src", productObject.green.product3.src);
    product3.setAttribute("alt", productObject.green.product3.alt);
    product4.setAttribute("src", productObject.green.product4.src);
    product4.setAttribute("alt", productObject.green.product4.alt);
    product5.setAttribute("src", productObject.green.product5.src);
    product5.setAttribute("alt", productObject.green.product5.alt);
}

function blueClickHandler() {
    cleaner();
    blueButton.classList.remove(notSelected);
    blueButton.classList.add(selected);
    product1.setAttribute("src", productObject.blue.product1.src);
    product1.setAttribute("alt", productObject.blue.product1.alt);
    product2.setAttribute("src", productObject.blue.product2.src);
    product2.setAttribute("alt", productObject.blue.product2.alt);
    product3.setAttribute("src", productObject.blue.product3.src);
    product3.setAttribute("alt", productObject.blue.product3.alt);
    product4.setAttribute("src", productObject.blue.product4.src);
    product4.setAttribute("alt", productObject.blue.product4.alt);
    product5.setAttribute("src", productObject.blue.product5.src);
    product5.setAttribute("alt", productObject.blue.product5.alt);
}

function marionaClickHandler() {
    cleaner();
    marionaButton.classList.remove(notSelected);
    marionaButton.classList.add(selected);
    product1.setAttribute("src", productObject.mariona.product1.src);
    product1.setAttribute("alt", productObject.mariona.product1.alt);
    product2.setAttribute("src", productObject.mariona.product2.src);
    product2.setAttribute("alt", productObject.mariona.product2.alt);
    product3.setAttribute("src", productObject.mariona.product3.src);
    product3.setAttribute("alt", productObject.mariona.product3.alt);
    product4.setAttribute("src", productObject.mariona.product4.src);
    product4.setAttribute("alt", productObject.mariona.product4.alt);
    product5.setAttribute("src", productObject.mariona.product5.src);
    product5.setAttribute("alt", productObject.mariona.product5.alt);
}

function grayClickHandler() {
    cleaner();
    grayButton.classList.remove(notSelected);
    grayButton.classList.add(selected);
    product1.setAttribute("src", productObject.gray.product1.src);
    product1.setAttribute("alt", productObject.gray.product1.alt);
    product2.setAttribute("src", productObject.gray.product2.src);
    product2.setAttribute("alt", productObject.gray.product2.alt);
    product3.setAttribute("src", productObject.gray.product3.src);
    product3.setAttribute("alt", productObject.gray.product3.alt);
    product4.setAttribute("src", productObject.gray.product4.src);
    product4.setAttribute("alt", productObject.gray.product4.alt);
    product5.setAttribute("src", productObject.gray.product5.src);
    product5.setAttribute("alt", productObject.gray.product5.alt);
}