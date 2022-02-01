const access_key = '72hSivYluQPPi_RM4NWvo2nithCM7C0IO8SQchex9uE';
const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`;

const gallery = document.querySelector('.gallery');

let allImages;

const getImages = () => {
    fetch(random_photo_url)
    .then(res=>res.json())
    .then(data => {
        allImages = data;
        makeImages(allImages);
    });
}

const makeImages = (data) => {
    data.forEach((item, index) => {
        console.log(item);
        
        let img = document.createElement('img');
        img.src = item.urls.regular;
        img.className = 'gallery-img';

        gallery.appendChild(img);
    })
}

getImages();