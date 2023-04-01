// streamFunctions.js
const clinetId = 'w3gbdtf7k9cnopnf9kf3grh7jfk52u';
const clinetSecret = 'oy06ztpchatwpu3e1o15hvvhmc3yhr';

// получение токена
function getTwitchAuthorization() {
  const url = `https://id.twitch.tv/oauth2/token?client_id=${clinetId}&client_secret=${clinetSecret}&grant_type=client_credentials`;

  return fetch(url, {
    method: 'POST',
  })
    .then((res) => res.json())
    .then((data) => data);
}

async function renderStreams(data) {
  const streams = await data?.data;
  return streams;
}

// запрос на апи
async function getStreams() {
  const endpoint = 'https://api.twitch.tv/helix/streams?first=100';

  const authorizationObject = await getTwitchAuthorization();
  const { access_token } = authorizationObject;

  const authorization = `Bearer ${access_token}`;

  const headers = {
    authorization,
    'Client-Id': clinetId,
  };

  return fetch(endpoint, {
    headers,
  })
    .then((res) => res.json())
    .then((data) => renderStreams(data));
}

export { getStreams };
