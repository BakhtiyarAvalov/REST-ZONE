// heder
let modal = document.querySelector(`.modalWindow`)
function menu(){
    modal.style.display = `flex`
}
function menu1(){
    modal.style.display = `none`
}

$('.modalWindow_slider').slick({
    autoplay: true,
    autoplaySpeed: 1000,
});



// gallery
let slider = document.querySelector(`.gallery_slider`)
function gallerySlider(){
  slider.style.display = `flex`
}
function gallerySliderClose(){
  slider.style.display= `none`
}
let images=[
    `IMG/gallery1.jpg`,
    `IMG/gallery2.jpg`,
    `IMG/gallery3.jpg`,
    `IMG/gallery4.jpg`,
    `IMG/gallery5.jpg`
];

  let image = document.getElementById(`image`); 
  image.src = images[0]; 
  // текущая картинка 
  let current = 0; 
  function changeImg(change) { 
    // изменение текущий картинки 
    current += change; 
   
    // проверка выхода с массива в конце 
    if (current > images.length - 1) { 
      current = 0; 
      // проверка выхода с массива в начале 
    } else if (current < 0) { 
      current = images.length - 1; 
    } 
    image.src = images[current]; 
  }
  
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })
