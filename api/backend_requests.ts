// Change serverURL to your own IP address if running the server on your
// local machine else change to the URL of the deployed server

export const serverURL = `http://localhost:8000`;

function constructURL(endpoint: string) {
  return `${serverURL}${endpoint}`;
}

export async function getData(endpoint: string) {
  const result = await fetch(constructURL(endpoint));
  const res = await result.json();
  return res;
}

export async function postData(endpoint: string, data: object) {
  const result = await fetch(constructURL(endpoint), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const res = await result.json();
  return res;
}

export async function updateData(endpoint: string, data: object) {
  const result = await fetch(constructURL(endpoint), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const res = await result.json();
  return res;
}

export async function deleteData(endpoint: string, data: object) {
  const result = await fetch(constructURL(endpoint), {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const res = await result.json();
  return res;
}
