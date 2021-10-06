clickExpand = document.querySelectorAll('.panel');

clickExpand.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add("active");
    })
})

function removeActiveClasses() {
    clickExpand.forEach(panel => {
        panel.classList.remove('active');
    })
}

clickExpand.addEventListener('click', () => {
    if(panel.classList.contains("active"))
    panel.classList.remove("active");

})

