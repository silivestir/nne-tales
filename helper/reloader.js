//helper function to get the site working online without server
//experiencing down time

//url
const url = `https://atales.onrender.com`

function reloadWebsite() {
    //using fetch directly for GET requests
    fetch(url)
        .then(response => {
            console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
        })
        .catch(error => {
            console.log(`Error reloading at ${new Date().toISOString()}:`, error.message);
        });
}

module.exports = reloadWebsite