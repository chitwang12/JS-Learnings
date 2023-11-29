//Multiple calls to a same URL 
const fetchData = async () => {
    try {
        const url = 'https://data.covid19india.org/v4/min/timeseries.min.json';

        // Number of parallel requests you want to make
        const numRequests = 5;

        // Create an array of promises for concurrent requests
        const requests = Array.from({ length: numRequests }, () => fetch(url));

        // Use Promise.all() to execute the requests concurrently
        const responses = await Promise.all(requests);

        // Process the responses
        const dataPromises = responses.map(response => response.json());
        const data = await Promise.all(dataPromises);

        // Example: Log the data from each request
        data.forEach((responseData, index) => {
            console.log(`Data from Request ${index + 1}:`, responseData);
        });

        // Return or use the combined data as needed
        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error; // Optionally, throw the error to be caught elsewhere
    }
};

// Call the fetchData function immediately using async/await
(async () => {
    try {
        const fetchedData = await fetchData();
        // Any other code that depends on the fetched data can go here
    } catch (error) {
        // Handle errors here
        console.error('Error in main code:', error.message);
    }
})();
