import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: "https://us-central1-clone-3c25a.cloudfunctions.net/api" 
});

export default instance;

// https://us-central1-clone-3c25a.cloudfunctions.net/api

// http://localhost:5001/clone-3c25a/us-central1/api