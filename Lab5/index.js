"use strict"

function openModal (targetModelId) {
    // const modal = document.getElementById(targetModelId);
    // const overlay = document.querySelector(".overlay");

    $("#" + targetModelId).fadeIn(400);
    $(".overlay").fadeIn(400);

    // modal.classList.remove("hidden");
    // overlay.classList.remove("hidden");
}

function closeModal (targetModelId) {
    // const modal = document.getElementById(targetModelId);
    // const overlay = document.querySelector(".overlay");
    
    $("#" + targetModelId).fadeOut(400);
    $(".overlay").fadeOut(400);

    // modal.classList.add("hidden");
    // overlay.classList.add("hidden");
}

const buttons = document.querySelectorAll(".news-block__open-btn");
buttons.forEach(element => {
    const targetModelId = element.getAttribute("target-model-id");

    element.addEventListener("click", () => openModal(targetModelId));
    document.querySelector(".overlay").addEventListener("click", () => closeModal(targetModelId));
});