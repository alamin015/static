const iconCross = document.getElementById("iconCross");
const iconBar = document.getElementById("iconBar");
const sideBar = document.querySelector(".mobile-nav");

iconBar.addEventListener('click', () => {
    iconBar.style.display = "none";
    iconCross.style.display = "block";
    sideBar.classList.add("active");
})

iconCross.addEventListener('click', () => {
    iconBar.style.display = "block";
    iconCross.style.display = "none";
    sideBar.classList.remove("active");
})