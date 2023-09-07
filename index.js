// Function to update the time for a specific clock
        function updateClock(city, offset) {
            const now = new Date();
            const utc = now.getTime() + now.getTimezoneOffset() * 60000;
            const localTime = new Date(utc + (3600000 * offset));
            const timeString = localTime.toLocaleTimeString();

            document.getElementById(city + "-time").textContent = timeString;
        }

        // Update the clocks every second
        setInterval(function() {
            updateClock("new-york", -5); // New York (UTC -5)
            updateClock("london", 0);   // London (UTC +0)
            updateClock("tokyo", 9);    // Tokyo (UTC +9)
        }, 1000);
