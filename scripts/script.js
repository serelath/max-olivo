var button = new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.2,
    image1: "assets/images/max-olivo.jpg",
    image2: "assets/images/max-olivo.jpg",
    image3: "assets/images/max-olivo.jpg",
    displacementImage: "assets/images/heightMap.png"
});


document.querySelector('.next').addEventListener('click', button.next);
document.querySelector('.previous').addEventListener('click', button.previous)