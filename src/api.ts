const ACCESS_TOKEN_MAP_BOX =
"access_token=pk.eyJ1Ijoic2Nod2VwcGVsaXZlIiwiYSI6ImNsM3JhaHNycjBkcHEza282ZmF0NW5kM2YifQ.abuUftCoyfBBQeKkDa3-6Q";

export const fetchLocalMapBox = (local: string) =>
fetch(
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
).then(response => response.json()).then(data => data);

export const fetchUserGithub = (login: string) =>
fetch(`https://api.github.com/users/${login}`).then(response => response.json()).then(data => data);