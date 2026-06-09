import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const shortenUrl = async () => {
    try {
      const res = await axios.post("http://localhost:5000/shorten", {
        originalUrl: url,
      });

      setShortUrl(res.data.shortUrl);
      setCopied(false);
    } catch (err) {
      alert("Error shortening URL");
    }
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>🔗 URL Shortener</h1>

        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button onClick={shortenUrl}>
          Shorten URL
        </button>

        {shortUrl && (
          <div className="result">
            <p>Short URL:</p>

            <a
              href={shortUrl}
              target="_blank"
              rel="noreferrer"
            >
              {shortUrl}
            </a>

            <button
              className="copyBtn"
              onClick={copyLink}
            >
              Copy Link
            </button>

            {copied && <p className="success">✅ Copied!</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;