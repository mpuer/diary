

export default class API {
    static UpdatePost(id, text) {
        return fetch(`http://127.0.0.1:5000/${id}/`, {
            'method':'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(text)
          })
          .then(res => res.json())
    }
}
