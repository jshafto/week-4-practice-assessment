
window.addEventListener("DOMContentLoaded", () => {
    // Put your code in here to make each of the tests described in the HTML
    // file pass.

    // problem 1
    let circleBlueButton = document.getElementById("make-circle-blue");
    circleBlueButton.addEventListener("click", e => {
        let myCircle = document.getElementById("blue-circumference-circle");
        myCircle.classList.add("blue");
    });

    // problem 2
    let removeAppleContent = document.getElementById("remove-content-from-apples");
    removeAppleContent.addEventListener("click", e => {
        document.getElementById("apples-div").innerHTML = "";
    });

    // problem 3
    let addImageButton = document.getElementById("add-image-btn")
    addImageButton.addEventListener("click", e => {
        let imageDiv = document.getElementById("add-image");
        if (imageDiv.innerHTML === "") {
            let pic = document.createElement("img");
            pic.setAttribute("src", "./images/logo-emblem-black.svg");
            imageDiv.appendChild(pic);
        }
    });

    // problem 4
    let bubbleFriend = document.getElementById("bubble-friend");
    bubbleFriend.addEventListener("keydown", e => {
        e.stopPropagation();
    });

    // problem 5
    let mult2Button = document.getElementById("multiply");
    let add2Button = document.getElementById("add-two");
    let resetButton = document.getElementById("reset-total");
    let totalField = document.getElementById("total-value");
    mult2Button.addEventListener("click", e => {
        total *= 2;
        totalField.innerHTML = total;
    })
    add2Button.addEventListener("click", e => {
        total += 2;
        totalField.innerHTML = total;
    })
    resetButton.addEventListener("click", e => {
        total = 1;
        totalField.innerHTML = total;
    })

    // problem 6
    let myNameBox = document.getElementById("fav-flavor");
    let storeFlavorButton = document.getElementById("store-flavor");
    if (localStorage.getItem("storeFlavor")) {
        myNameBox.placeholder = localStorage.getItem("storeFlavor");
    }
    storeFlavorButton.addEventListener("click", e => {
        localStorage.setItem("storeFlavor", myNameBox.value);
    })

    // problem 7
    let noCheck = document.getElementById("will-not-check");
    noCheck.addEventListener("click", e => {
        e.preventDefault();
    })


});
