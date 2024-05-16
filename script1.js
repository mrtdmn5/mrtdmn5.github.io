const button = document.querySelector('.IconButton_icon-button___iBUv.IconButton_is-lg__Y55oL.ProductGallery_product-gallery-next__Ytwck');

button.addEventListener('click', () => {

const img1 = document.getElementsByClassName('my-image1');
const img2 = document.getElementsByClassName('my-image2');
const slideText1 = document.getElementsByClassName('slide-text1');
const slideText2 = document.getElementsByClassName('slide-text2');
const slideLineColor1 = document.getElementsByClassName('slideLineColor1');
const slideLineColor2 = document.getElementsByClassName('slideLineColor2');
const slideLineColor3 = document.getElementsByClassName('slideLineColor3');


    console.log('Button clicked!');
    img1[0].style.display = 'none';
    img2[0].style.display = 'block';

    slideText1[0].style.display = 'none';
    slideText2[0].style.display = 'block';
    
    slideLineColor1[0].style.display = 'none';
    slideLineColor2[0].style.display = 'block';
    slideLineColor3[0].style.display = 'block';
});

const prevButton = document.querySelector('.IconButton_icon-button___iBUv.IconButton_is-lg__Y55oL.IconButton_is-disabled__T0_3R.ProductGallery_product-gallery-prev__khfBU');

prevButton.addEventListener('click', () => {
    const img1 = document.getElementsByClassName('my-image1');
    const img2 = document.getElementsByClassName('my-image2');

    const slideText1 = document.getElementsByClassName('slide-text1');
    const slideText2 = document.getElementsByClassName('slide-text2');
    const slideLineColor1 = document.getElementsByClassName('slideLineColor1');
    const slideLineColor2 = document.getElementsByClassName('slideLineColor2');
    const slideLineColor3 = document.getElementsByClassName('slideLineColor3');

    console.log('Prev button clicked!');
    img1[0].style.display = 'block';
    img2[0].style.display = 'none';

    slideText1[0].style.display = 'block';
    slideText2[0].style.display = 'none';

    slideLineColor1[0].style.display = 'block';
    slideLineColor2[0].style.display = 'none';
    slideLineColor3[0].style.display = 'none';
});

const smartGlassButton = document.querySelector('.smartglassbutton');

smartGlassButton.addEventListener('click', () => {
    const img0 = document.getElementsByClassName('image-0');
    const img1 = document.getElementsByClassName('image-1');
    const img1Mobile = document.getElementsByClassName('image-1-mobile');

    const img0Smart = document.getElementsByClassName('image-0-smart');
    const img1Smart = document.getElementsByClassName('image-1-smart');
    const img1MobileSmart = document.getElementsByClassName('image-1-mobile-smart');

    const smartGlassButton = document.querySelector('.smartglassbutton');
    const smartGlassesPrice = document.querySelector('.smartGlassesPrice');
    const explainText1 = document.querySelector('.explain-text-1');
    const explainText2 = document.querySelector('.explain-text-2');
    const spanTitleSmart = document.querySelector('.span-title-smart');

    

    if (img0[0].style.display === 'none') {
       
        smartGlassesPrice.textContent = '1000 kr';
        img0[0].style.display = 'block';
        img1[0].style.display = 'block';
        img1Mobile[0].style.display = 'block';
        img0Smart[0].style.display = 'none';
        img1Smart[0].style.display = 'none';
        img1MobileSmart[0].style.display = 'none';
        smartGlassButton.style.backgroundColor = '';
        smartGlassButton.style.color = '#000';
        explainText2.style.display = 'block';
        explainText1.style.display = 'none';
        spanTitleSmart.style.display = 'none';
    } else {
        img0[0].style.display = 'none';
        img1[0].style.display = 'none';
        img1Mobile[0].style.display = 'none';
        img0Smart[0].style.display = 'block';
        img1Smart[0].style.display = 'block';
        img1MobileSmart[0].style.display = 'block';
        smartGlassButton.style.backgroundColor = '#000';
        smartGlassButton.style.color = '#fff';
        smartGlassesPrice.textContent = '1999 kr';
        explainText2.style.display = 'none';
        explainText1.style.display = 'block';
        spanTitleSmart.style.display = 'inline-block';

    }
});
