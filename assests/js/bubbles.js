const bubbles = document.getElementById('bubbles').children;
const colors = [
    "#4285F4",
    "#DB4437",
    "#F4B400",
    "#0F9D59",
    "#dddfd4",
    "#fae596",
    "#3fb0ac",
    "#173e43",
    "#c2dde6",
    "#e05915"
];
bubbles[0].setAttribute('style', 'border-color: ' + colors[0] + '; ' + 'background: ' + colors[0] + ';');
bubbles[4].setAttribute('style', 'border-color: ' + colors[1] + '; ' + 'background: ' + colors[1] + ';');
bubbles[5].setAttribute('style', 'border-color: ' + colors[2] + '; ' + 'background: ' + colors[2] + ';');
bubbles[6].setAttribute('style', 'border-color: ' + colors[3] + ';'  + 'background: ' + colors[3] + ';');

setInterval(changebubbleColor, 15000);

function changebubbleColor() {

    var bubble_indexes = setRandom_bubbleIndexes();
    var color_indexes = setRandom_colorIndexes();
    resetInlineFormating();
    for(let i = 0; i < bubble_indexes.length; i++) {
        bubble_index = bubble_indexes[i]
        addInlineFormating(bubble_index, i);
    }

}

function deleteInlineFormating(bubble_index) {
    bubbles[bubble_index].removeAttribute('style');
}

function addInlineFormating(bubble_index, color_index) {
    bubbles[bubble_index].setAttribute('style', 'border-color: ' + colors[color_index] + '; ' + 'background: ' + colors[color_index] + ';');
}

function resetInlineFormating() {
    for (let i=0; i<bubbles.length; i++) {
        if (bubbles[i].hasAttribute('style')){
            deleteInlineFormating(i);
        }
    }
}

function setRandom_bubbleIndexes() {
    let random_indexes = [];
    bubble_index = bubbles[Math.floor(Math.random()*bubbles.length)];
    if (bubble_index === bubbles[0]) {
        random_indexes = [0,3,4,8,9];
    } else if (bubble_index <= 5) {
        random_indexes = [1,2,5,6,7];
    } else {
        random_indexes = [2,3,5,6,9];
    }
    return random_indexes;
}

function setRandom_colorIndexes() {
    let random_indexes = [];
    color_index = colors[Math.floor(Math.random()*colors.length)];
    if (color_index === bubbles[0]) {
        random_indexes = [0,3,4,8,9];
    } else if (color_index <= 5) {
        random_indexes = [1,2,5,6,7];
    } else {
        random_indexes = [2,3,5,6,9];
    }
    return random_indexes.reverse;
}