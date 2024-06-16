const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { stringify } = require('qs');
const app = express();
const port = 8000;

app.use(cors());

app.get('/getShortcode', async (req, res) => {
  const { shortcode } = req.query;
  if (!shortcode) {
    return res.status(400).json({ error: 'shortcode is required' });
  }

  const url = "https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_id";
  const params = {
    shortcode: shortcode,
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
    const items = response.data[0].items; 
    const findData = items[0];
    const videoUrl = findData.video_versions[0];
    res.json(videoUrl);
    
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Failed to fetch video URL" });
  }
});

app.listen(port,'0.0.0.0', () => {
  console.log(`API running at http://localhost:${port}`);
});
