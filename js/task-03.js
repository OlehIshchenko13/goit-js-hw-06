const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];




// const bodyRef = document.querySelector('body');
// bodyRef.setAttribute('style','background-color: #FFA07A;')
const imgListRef = document.querySelector('.gallery');

const createGalleryImgItem = im => `<li><img src='${im.url}' alt=${im.alt} width = 200 height = 100></li>`;

const galleryMarkup = images.reduce((acc,item)=>acc + createGalleryImgItem(item),'');

imgListRef.insertAdjacentHTML('afterbegin',galleryMarkup);

imgListRef.setAttribute('style','display:flex;list-style-type:none;justify-content: space-around;');

// listGalleryRef.insertAdjacentHTML(`<li><img src="${img.url} "alt='${img.alt}' ></li>`


// console.log(images.reduce((acc,img)=> listGalleryRef.insertAdjacentHTML(`<li><img src="${img.url} "alt='${img.alt}' ></li>`)


