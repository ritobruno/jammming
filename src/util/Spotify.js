let accessToken = '';

let Spotify {
  getAccessToken(){
    if(accessToken){
      return accessToken;
    }
    else {
      window.location.href = 'https://accounts.spotify.com/authorize?client_id=80738a55c7a64e768b0a959a825d15ad&redirect_uri=http://jammming.com/callback&response_type=token&state=123';
    }
  }
}

export default Spotify;
