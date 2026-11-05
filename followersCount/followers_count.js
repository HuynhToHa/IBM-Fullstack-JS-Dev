let count = 0;// Initialize count to 0

const increaseCount = () => {
    count++;// Increment count by 1
    displayCount();// Display the count
    checkCountValue();// Check count value and display messages
}

const displayCount = () => {
    document.getElementById('countDisplay').innerHTML = count;// Display the count in the HTML 
}

const checkCountValue = () => {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

const resetCount = () => {
    count = 0;// Reset count to 0
    displayCount();// Display the count
    alert("the Followers count has been reset.");
}