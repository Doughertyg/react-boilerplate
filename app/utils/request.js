/**
 *
 * function to make httprequests using the fetch api
 *
 */
export default function request(url, METHOD, body) {
  const postOpts = {
    method: METHOD,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  };
  const options = METHOD ? postOpts : undefined;
  return fetch(url, options)
    .then(res => {
      if (res.ok) {
        return res;
      }

      throw new Error(res.statusText);
    })
    .then(res => (METHOD === 'POST' ? res : res.json()))
    .catch(err => {
      throw new Error(err);
    });
}
