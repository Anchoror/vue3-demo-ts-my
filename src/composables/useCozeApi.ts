import { CozeAPI, COZE_CN_BASE_URL } from "@coze/api";
import CryptoJS from "crypto-js";


const COZE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const COZE_TOKEN = "";
const COZE_CLIENT_ID = "";
const COZE_REDIRECT_URI = "http://localhost:3000/";
const COZE_STATE = "123456";

// Function to generate a random string
function generateRandomString(length: number): string {
  const characters = COZE_CHARACTERS
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Function to generate code_challenge from code_verifier
function generateCodeChallenge(codeVerifier: string): string {
  const hash = CryptoJS.SHA256(codeVerifier).toString(CryptoJS.enc.Base64);
  // Convert Base64 to Base64URL
  return hash.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export default function useCozeApi() {
  const secret_token = COZE_TOKEN;

  const isDev = import.meta.env.DEV;

  let client;

  if (!isDev) {
    client = new CozeAPI({
      baseURL: COZE_CN_BASE_URL,
      token: secret_token,
      allowPersonalAccessTokenInBrowser: true, // Allow the browers to use PAT
    });
  } else {
    const code_verifier = generateRandomString(128); // Generate a random code_verifier
    const code_challenge = generateCodeChallenge(code_verifier);
    const query = {
      client_id: COZE_CLIENT_ID,
      response_type: "code",
      redirect_uri: COZE_REDIRECT_URI,
      code_challenge,
      state: COZE_STATE,
      code_challenge_method: "S256",
    };
    const queryString = new URLSearchParams(query).toString();
    fetch(`/coze-api/permission/oauth2/authorize?${queryString}`, {
      method: "GET",
    }).then((res) => {
      console.log(res);
    });
  }

  return {
    client,
  };
}
