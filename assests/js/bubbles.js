const bubbles = document.getElementById('bubbles').children;
const colors = [
    "#4285F4",
    "#DB4437",
    "#F4B400",
    "#0F9D59"
];
bubbles[1].setAttribute('style', 'border-color: ' + colors[0] + ';' + 'background-color: ' + colors[0] + ';');
bubbles[5].setAttribute('style', 'border-color: ' + colors[1] + ';' + 'background-color: ' + colors[1] + ';');
bubbles[6].setAttribute('style', 'border-color: ' + colors[3] + ';' + 'background-color: ' + colors[3] + ';');
bubbles[9].setAttribute('style', 'border-color: ' + colors[2] + ';' + 'background-color: ' + colors[2] + ';');
first_bubble_index = setInterval(setFirstBubbleIndex, 19000);
second_bubble_index = setInterval(setSecondBubbleIndex, 19000);
setInterval(changebubbleColor, 19000);
function changebubbleColor() {
    bubbles[first_bubble_index].setAttribute('style', 'border-color: ' + colors[0] + ';' + ' background-color: ' + colors[0] + ';');
    bubbles[second_bubble_index].setAttribute('style', 'border-color: ' + colors[1] + ';' + ' background-color: ' + colors[1] + ';');
    bubbles[first_bubble_index - 1].setAttribute('style', 'border-color: ' + colors[3] + ';' + 'background-color: ' + colors[3] + ';');
    bubbles[second_bubble_index - 1].setAttribute('style', 'border-color: ' + colors[2] + ';' + 'background-color: ' + colors[2] + ';');
}
function setFirstBubbleIndex() {
    bubble_index = Math.floor(Math.random() * 10) + 1;
    return bubble_index;
}
function setSecondBubbleIndex() {
    bubble_index = Math.floor(Math.random() * 10) + 1;
    return bubble_index;
}