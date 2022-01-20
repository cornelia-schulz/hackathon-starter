/* eslint-env jquery, browser */
$(document).ready(() => {
  /** image gallery */
  const images = [
    {
      id: 0,
      src: 'https://picsum.photos/id/237/500/300',
      thumbnail: 'https://picsum.photos/id/237/300/150',
      title: 'dog'
    },
    {
      id: 1,
      src: 'https://picsum.photos/id/1016/500/300',
      thumbnail: 'https://picsum.photos/id/1016/300/150',
      title: 'landscape'
    },
    {
      id: 2,
      src: 'https://picsum.photos/id/102/500/300',
      thumbnail: 'https://picsum.photos/id/102/300/150',
      title: 'raspberries'
    },
    {
      id: 3,
      src: 'https://picsum.photos/id/103/500/300',
      thumbnail: 'https://picsum.photos/id/103/300/150',
      title: 'feet'
    },
    {
      id: 4,
      src: 'https://picsum.photos/id/1032/500/300',
      thumbnail: 'https://picsum.photos/id/1032/300/150',
      title: 'NASA'
    },
    {
      id: 5,
      src: 'https://picsum.photos/id/1035/500/300',
      thumbnail: 'https://picsum.photos/id/1035/300/150',
      title: 'waterfall'
    },
  ];
  let currentImageIndex = 0;
  const thumbnails = document.getElementsByClassName('thumbnail');

  function setGalleryImage(images, imageIndex) {
    const galleryImage = document.getElementsByClassName('galleryImage')[0];
    galleryImage.src = images[imageIndex].src;
    galleryImage.alt = images[imageIndex].title;
  }

  function setThumbnails(images, currentImage) {
    let imageIndex = currentImage;
    if (imageIndex === 0) {
      imageIndex = images.length - 1;
    } else {
      imageIndex--;
    }
    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].src = images[imageIndex].thumbnail;
      if (imageIndex === images.length - 1) {
        imageIndex = 0;
      } else {
        imageIndex++;
      }
    }
  }

  function setPreviousImage() {
    if (currentImageIndex > 0) {
      currentImageIndex -= 1;
    }
    setGalleryImage(images, currentImageIndex);
    setThumbnails(images, currentImageIndex);
  }

  function setNextImage() {
    if (currentImageIndex < images.length - 1) {
      currentImageIndex += 1;
    }
    setGalleryImage(images, currentImageIndex);
    setThumbnails(images, currentImageIndex);
  }

  function updateImages() {
    const imageIndex = images.findIndex((i) => i.thumbnail === $(this).closest('img')[0].currentSrc);
    currentImageIndex = imageIndex;
    setGalleryImage(images, currentImageIndex);
    setThumbnails(images, currentImageIndex);
  }

  if (document.title === 'Gallery - Hackathon Starter') {
    document.getElementsByClassName('previousImage')[0].addEventListener('click', setPreviousImage);
    document.getElementsByClassName('nextImage')[0].addEventListener('click', setNextImage);
    setGalleryImage(images, currentImageIndex);
    setThumbnails(images, currentImageIndex);
    [...thumbnails].forEach((t) => t.addEventListener('click', updateImages));
  }

  /** About Page */
  function switchPageColour() {
    const navBar = document.getElementsByClassName('navbar')[0];
    const body = document.getElementsByTagName('body')[0];
    const lightSwitch = document.getElementsByClassName('light-switch')[0];
    if (lightSwitch.innerHTML === 'Switch the light off') {
      lightSwitch.innerHTML = 'Switch the light on';
      body.classList.add('bg-dark', 'text-light');
      navBar.classList.remove('bg-light');
      navBar.classList.add('bg-dark');
    } else {
      lightSwitch.innerHTML = 'Switch the light off';
      body.classList.remove('bg-dark', 'text-light');
      navBar.classList.add('bg-light', 'navbar-light');
      navBar.classList.remove('bg-dark');
    }
  }
  if (document.title === 'About - Hackathon Starter') {
    document.getElementsByClassName('light-switch')[0].addEventListener('click', switchPageColour);
  }
});
