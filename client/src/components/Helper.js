import axios from 'axios'

const API = 'http://localhost:5000'


export async function getFromAPI(endpointURL, opts) {
    const { method, body } = { method: 'POST', body: null, ...opts };
  
    const res = await axios.get(`${API}/${endpointURL}`, {
      method,
      ...(body && { body: JSON.stringify(body) }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    return res.json();
  }
  