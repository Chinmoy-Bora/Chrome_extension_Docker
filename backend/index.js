// Remove module.exports and define getVid directly

const url = "https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_id";

async function getVid(shortcode1) {
  const params = {
    shortcode: shortcode1,
    response_type: "reels",
    corsEnabled: "false",
  };

  const headers = {
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'en-GB,en;q=0.5',
    Origin: 'https://yasin-ai.github.io',
    Referer: 'https://yasin-ai.github.io/',
    'Sec-Ch-Ua': '"Brave";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"macOS"',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'Sec-Gpc': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
    'X-Rapidapi-Host': 'instagram-bulk-profile-scrapper.p.rapidapi.com',
    'X-Rapidapi-Key': 'baf38d7eb2msh17d5250e3fcb6b1p11aecajsn8f559cbcb328',
  };
  try {
    const response = await axios.get(url, { params, headers });
    const items = response.data[0].items; // Access the items array
    const findData = items[0];
    const videoUrl = findData.video_versions[0].url;
    console.log(videoUrl); // Display the video URL in the console
    const link = document.createElement('a');
    
    link.href = videoUrl;
    link.download = 'video.mp4'; // Set the filename for the downloaded file
    document.body.appendChild(link);

    // Trigger a click event on the link to initiate the download
    link.click();

    // Cleanup: remove the link from the document body
    document.body.removeChild(link);
   
  } catch (error) {
    console.error("Error:", error.message);
  }



}

// Attach getVid to the window object
window.getVid = getVid;
