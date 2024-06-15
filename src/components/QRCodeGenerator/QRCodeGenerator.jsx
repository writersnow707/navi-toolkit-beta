import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleGenerateQRCode = () => {
    setGeneratedUrl(url);
  };

  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={handleUrlChange}
        style={{
          width: "400px",
          height: "30px",
          marginBottom: "10px",
          padding: "5px",
          fontSize: "16px",
        }}
      />
      <button
        onClick={handleGenerateQRCode}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Generate QR Code
      </button>

      {generatedUrl && (
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <QRCode value={generatedUrl} size={256} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
