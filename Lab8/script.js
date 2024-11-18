$(document).ready(function () {
    // Event Listener for Roll Button
    $('#rollDiceButton').on('click', function () {
        rollDice();
    });
});

// Function to Roll Dice
function rollDice() {
    // Loop through each die
    $('.die').each(function () {
        // Generate random number between 1 and 6
        let diceValue = Math.floor(Math.random() * 6) + 1;

        // Add rolling animation (brief rotation effect)
        $(this).css('transform', `rotate(${Math.random() * 360}deg)`);

        // Delay for animation, then update dots
        setTimeout(() => {
            updateDieFace($(this), diceValue);
        }, 300); // 300ms for animation
    });
}

// Function to Update Dice Face
function updateDieFace(dieElement, value) {
    // Clear existing dots
    dieElement.empty();

    // Add dots based on the rolled value
    const dotPositions = {
        1: ['50%, 50%'], // Center
        2: ['25%, 25%', '75%, 75%'], // Top-left, bottom-right
        3: ['25%, 25%', '50%, 50%', '75%, 75%'], // Top-left, center, bottom-right
        4: ['25%, 25%', '25%, 75%', '75%, 25%', '75%, 75%'], // Four corners
        5: ['25%, 25%', '25%, 75%', '50%, 50%', '75%, 25%', '75%, 75%'], // Four corners + center
        6: ['25%, 25%', '25%, 50%', '25%, 75%', '75%, 25%', '75%, 50%', '75%, 75%'], // Two columns
    };

    // Add dots
    dotPositions[value].forEach(pos => {
        dieElement.append(`<div class="dot" style="position: absolute; top: ${pos.split(',')[0]}; left: ${pos.split(',')[1]}; width: 10px; height: 10px; background-color: black; border-radius: 50%;"></div>`);
    });
}
