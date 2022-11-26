const img = document.getElementsByClassName('.head-wrapper');
const images = ["/Images/akhi-demo.jpg","/Images/jahmir.jpeg"]
let index = 0;
let travel;

const startTravel = () => {
    travel = setInterval(() => {
      ++index;
      if (index < 0 || index === imageSources.length) index = 0;
      img.src = imageSources[index];
    }, 2000);
};
