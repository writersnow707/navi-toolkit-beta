import React, { useState } from "react";

const YoutubeViewer = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [videoId, setVideoId] = useState(null);

  const handleYoutubeUrlChange = (e) => {
    setYoutubeUrl(e.target.value);
  };

  const handleYoutubeVideoSubmit = () => {
    const id = extractVideoId(youtubeUrl);
    if (id) {
      setVideoId(id);
    } else {
      alert("Invalid YouTube URL");
    }
  };

  const extractVideoId = (url) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    );
    return match && match[1];
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h2>YouTube Video Viewer</h2>
      <input
        type="text"
        placeholder="Enter YouTube URL"
        value={youtubeUrl}
        onChange={handleYoutubeUrlChange}
        style={{
          width: "400px",
          height: "30px",
          marginBottom: "10px",
          padding: "5px",
          fontSize: "16px",
        }}
      />
      <button
        onClick={handleYoutubeVideoSubmit}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Display
      </button>

      {videoId && (
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <iframe
            title="YouTube Video"
            width="800"
            height="450"
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default YoutubeViewer;
