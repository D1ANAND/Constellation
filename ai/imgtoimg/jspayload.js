const apiURL = "http://imgtoimg.pythonanywhere.com/generate-imgtoimg/";

// Payload data to be sent in the request
const payload = {
    image_url: "https://bucketforadgen.s3.ap-south-1.amazonaws.com/macbook_air_ad_poster.png",
    user_prompt: "Make the hairstyle curly"
};

// Making a POST request with payload
fetch(apiURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Now 'data' contains the parsed JSON response
        console.log("API Response:", data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
