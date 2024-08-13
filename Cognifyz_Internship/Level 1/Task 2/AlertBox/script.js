function displayGreeting() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    alert(greeting);
}

window.onload = displayGreeting;