const existing = document.querySelector("body").classList.contains("coming-soon");
if (existing) {
    document.querySelectorAll('.product-image-detail').forEach(item => {
        item.removeAttribute('href');
    })
}
