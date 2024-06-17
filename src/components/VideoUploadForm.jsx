// VideoUploadForm.js
import React, { useState } from "react";
import axios from "axios";
import conf from '../conf/conf.js';

const VideoUploadForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoFile: null,
    thumbnail: null,
  });
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUploading(true);
      const formDataUpload = new FormData();
      formDataUpload.append("title", formData.title);
      formDataUpload.append("description", formData.description);
      formDataUpload.append("videoFile", formData.videoFile);
      formDataUpload.append("thumbnail", formData.thumbnail);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progressPercent = parseInt(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          );
          setProgress(progressPercent);
        },
      };

      const response = await axios.post(`${conf.appBackendBaseUrl}/videos`, 
      formDataUpload, 
      {
        withCredentials: true
      }, 
      config);
      
      setSuccessMessage(response.data.message);
      setFormData({
        title: "",
        description: "",
        videoFile: null,
        thumbnail: null,
      });
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Failed to upload video");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <br />
        <label>
          Video File:
          <input
            type="file"
            accept="video/*"
            name="videoFile"
            onChange={handleFileChange}
            required
          />
        </label>
        <br />
        <label>
          Thumbnail:
          <input
            type="file"
            accept="image/*"
            name="thumbnail"
            onChange={handleFileChange}
            required
          />
        </label>
        <br />
        <button type="submit" disabled={uploading}>
          Upload
        </button>
      </form>
      {uploading && <div>Uploading: {progress}%</div>}
    </div>
  );
};

export default VideoUploadForm;

