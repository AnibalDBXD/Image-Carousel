const $buttonLeft = document.getElementById('left');
const $buttonRight = document.getElementById('right');
const $IMGcontainer = document.getElementById('container');
const $positilionList = document.getElementById('position-list');
const PATH_IMAGES = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg',]
let Counter = 0;

for (let number in PATH_IMAGES) {
    numberOfPosition = Number(number);
    numberOfPosition++;
    let $containerPosition = document.createElement('li');
    let $numberPosition = document.createElement('a');
    let Position = document.createTextNode(numberOfPosition);

    // $numberPosition.classList.add(numberOfPosition);
    $numberPosition.classList.add(number);
    $numberPosition.appendChild(Position);
    $containerPosition.appendChild($numberPosition);
    $positilionList.appendChild($containerPosition);
}

function changeImage(event) {
    let ImagePositionBefore
    // $IMGcontainer.attributes.src.value = path_IMGs[0]
    if (event.target.id === 'right') {
        if(Counter === 4){
            Counter = 0;
        }else{
            Counter++;
        }
        $IMGcontainer.attributes.src.value = PATH_IMAGES[Counter];

        let ImagePositionAfter = document.getElementsByClassName(Counter);

        if (Counter === 0) {
            ImagePositionBefore = document.getElementsByClassName('4');
        }else{
            ImagePositionBefore = document.getElementsByClassName(Counter - 1);
        }
        ImagePositionAfter[0].classList.add('list-item-Active');
        ImagePositionBefore[0].classList.remove('list-item-Active');
    }else{
        if(Counter === 0){
            Counter = 4;
        }else{
            Counter--;
        }
        $IMGcontainer.attributes.src.value = PATH_IMAGES[Counter];

        let ImagePositionAfter = document.getElementsByClassName(Counter);

        if (Counter === 4) {
            ImagePositionBefore = document.getElementsByClassName('0');
        }else{
            ImagePositionBefore = document.getElementsByClassName(Counter + 1);
        }
        ImagePositionAfter[0].classList.add('list-item-Active');
        ImagePositionBefore[0].classList.remove('list-item-Active');
    }
}

$buttonLeft.addEventListener('click', changeImage);
$buttonRight.addEventListener('click', changeImage);

