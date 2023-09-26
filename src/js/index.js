import{createApi} from 'unsplash-js';
const main=document.querySelector('#main');
const modernButton = document.querySelector('.modern');
const classicbutton = document.querySelector('.classic');
const sculpturesButton = document.querySelector('.sculptures');
const cubismButton=document.querySelector('.cubism');
const abstractButton = document.querySelector('.Abstract-Art');

const ganeshabutton = document.querySelector('.ganesha');
const city=document.querySelector('.city');
const favorites = document.querySelector('.favorites');
const unsplash = createApi({
  accessKey:'765ZUTCQyCAVg7bi7rTEmgJOD2ow3coRYBTsvI-X6C8',

});




unsplash.search.getPhotos({
  query:'Italian Art ' ,
  page:1,
  perPage:16,
  orientation:'portrait',
}).then(result => {
  if(result.type ==='success'){
    const photos = result.response.results;
    const getUrls=photos.map((i) =>{
      return `<img src="${i.urls.small}" />`;

    });
    main.innerHTML= getUrls.join('');

  }

})

modernButton.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: 'Modern ARt',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getUrls = photos.map((i) => {
          return `<img src="${i.urls.small}" />`;
        });
        main.innerHTML = getUrls.join('');
      }
    });
});
classicbutton.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: 'Classic Art',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getUrls = photos.map((i) => {
          return `<img src="${i.urls.small}" />`;
        });
        main.innerHTML = getUrls.join('');
      }
    });
});

sculpturesButton.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: 'Sculptures ',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getUrls = photos.map((i) => {
          return `<img src="${i.urls.small}" />`;
        });
        main.innerHTML = getUrls.join('');
      }
    });
});

cubismButton.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: 'Cubism Art',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getUrls = photos.map((i) => {
          return `<img src="${i.urls.small}" />`;
        });
        main.innerHTML = getUrls.join('');
      }
    });
});

abstractButton.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: 'Abstract Art',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getUrls = photos.map((i) => {
          return `<img src="${i.urls.small}" />`;
        });
        main.innerHTML = getUrls.join('');
      }
    });
});


city.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: 'Mumbai',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getUrls = photos.map((i) => {
          return `<img src="${i.urls.small}" />`;
        });
        main.innerHTML = getUrls.join('');
      }
    });
});

ganeshabutton.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: 'Mumbai Art',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getUrls = photos.map((i) => {
          return `<img src="${i.urls.small}" />`;
        });
        main.innerHTML = getUrls.join('');
      }
    });
});

favorites.addEventListener('click', () => {
  unsplash.search
    .getPhotos({
      query: 'NA Art',
      page: 1,
      perPage: 16,
      orientation: 'portrait',
    })
    .then((result) => {
      if (result.type === 'success') {
        const photos = result.response.results;
        const getUrls = photos.map((i) => {
          return `<img src="${i.urls.small}" />`;
        });
        main.innerHTML = getUrls.join('');
      }
    });
});

// ************************************************************************************************

