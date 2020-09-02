/**
 *
 * function to make httprequests using the fetch api
 *
 */
export default function request(url) {
  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res;
      }

      throw new Error(res.statusText);
    })
    .then(res => res.json());
}
