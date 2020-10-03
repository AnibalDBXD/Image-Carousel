const $buttonLeft = document.getElementById('left');
const $buttonRight = document.getElementById('right');
const $IMGcontainer = document.getElementById('container');

const path_IMGs = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg',]

let Counter = 0

function changeImage(event) {
    // $IMGcontainer.attributes.src.value = path_IMGs[0]
    if (event.target.id === 'right') {
        if(Counter === 4){
            Counter = 0;
        }else{
            Counter++;
        }
        $IMGcontainer.attributes.src.value = path_IMGs[Counter]
        console.log('right ' + Counter)
    }else{
        if(Counter === 0){
            Counter = 4;
        }else{
            Counter--;
        }
        $IMGcontainer.attributes.src.value = path_IMGs[Counter]
        console.log('left ' + Counter)
    }
}

$buttonLeft.addEventListener('click', changeImage);
$buttonRight.addEventListener('click', changeImage);
