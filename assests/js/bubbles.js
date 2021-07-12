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

setFirstBubbleColor();

setInterval(changeBubbleColor, 29000);

function setFirstBubbleColor() {
    var bubble_indexes = [1, 2, 4, 7, 8];
    var color_indexes = setRandom_colorIndexes();
    for (let i = 0; i < 5; i++) {
        bubble_index = bubble_indexes[i];
        color_index = color_indexes[i];
        addInlineFormating(bubble_index, color_index);
    }

}

function changeBubbleColor() {
    var bubble_indexes = [1, 2, 4, 7, 8];
    var color_indexes = setRandom_colorIndexes();

    for (let i = 0; i < 5; i++) {
        bubble_index = bubble_indexes[i];
        color_index = color_indexes[i];
        addInlineFormating(bubble_index, color_index);
    }
}

function deleteInlineFormating(bubble_index) {
    bubbles[bubble_index].removeAttribute('style');
}

function addInlineFormating(bubble_index, color_index) {
    bubbles[bubble_index].setAttribute('style', 'border-color: ' + colors[color_index] + '; ' + 'background: ' + colors[color_index] + ';');
}

// function resetInlineFormating() {
//     for (let i = 0; i < bubbles.length; i++) {
//         if (bubbles[i].hasAttribute('style')) {
//             deleteInlineFormating(i);
//         }
//     }
// }

// 1: 12s & 2s delay, 
// 2: 19s & 4s delay,
// 4: 19s & 0s delay,
// 7: 45s & 15s delay, 
// 8: 35s & 2s delay
// function setRandom_bubbleIndexes() {
//     let random_indexes = [];
//     bubble_index = bubbles[Math.floor(Math.random() * bubbles.length)];
//     if (bubble_index === bubbles[0]) {
//         random_indexes = [0, 3, 4, 8, 9];
//     } else if (bubble_index <= 5) {
//         random_indexes = [1, 2, 5, 6, 7];
//     } else {
//         random_indexes = [2, 3, 5, 6, 9];
//     }
//     return random_indexes;
// }
// function setBubbleIndexes() {
//     const bubble_indexes = [1, 2, 4, 7, 8];
//     return bubble_indexes;
// }

function setRandom_colorIndexes() {
    let random_indexes = [];
    color_index = Math.floor(Math.random() * colors.length);
    switch (color_index) {
        case 0:
            random_indexes = [1, 4, 6, 9, 0];
            break;
        case 1:
            random_indexes = [2, 5, 7, 3, 1];
            break;
        case 2:
            random_indexes = [3, 8, 6, 5, 2];
            break;
        case 3:
            random_indexes = [4, 2, 7, 5, 3];
            break;
        case 4:
            random_indexes = [5, 9, 8, 1, 4];
            break;
        case 5:
            random_indexes = [6, 2, 3, 9, 5];
            break;
        case 6:
            random_indexes = [7, 5, 1, 2, 6];
            break;
        case 7:
            random_indexes = [8, 3, 4, 6, 7];
            break;
        case 8:
            random_indexes = [9, 7, 5, 4, 8];
            break;
        case 9:
            random_indexes = [0, 2, 6, 3, 9];
            break;
    }
    console.log(color_index);
    console.log(random_indexes);
    return random_indexes;
}