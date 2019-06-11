import config from '../config/config'

export default class Helpers {

  login(userCredentials) {
    let apiUrl = 'https://api.gigaaa.link/api/v1/auth/login',
    
    res = fetch(apiUrl, {
      method: 'POST',
      mode: 'no-cors',
      credentials : 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(userCredentials)
    }).then(res => res)

    return res
  }

  apiFetch(url, method, data, upload) {

    let endpoint = url.includes('http') ? url : config.endpoints.api + '/' + url;
  
    let options = {
        method: typeof method !== "undefined" ? method : 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': upload === true ? 'multipart/form-data;' : 'application/json',
            'Cache-Control': 'no-cache',
            //'Authorization': 'Bearer ' + store.getState().user.userToken,
        }
    };
  
    if (upload === true) {
        options.body = new FormData();
  
        for (let key in data) {
            if (data[key]['path'] !== undefined) {
                let file = data[key];
  
                if (
                    typeof file.mime !== 'undefined' &&
                    typeof file.path !== 'undefined'
                ) {
                    let path = file.path;
                    let parts = path.split('/');
                    let name = parts[parts.length - 1];
  
                    options.body.append(key, {'uri': path, 'name': name, 'type': file.mime});
                }
            } else {
                options.body.append(key, data[key]);
            }
        }
  
    }
    else if (typeof data !== 'undefined' && data !== null) {
        options['body'] = JSON.stringify(data)
    }
  
    // TODO Handle errors
    return fetch(endpoint, options)
        .then((response) => {

            if (config.debug) {
                return response
            } 
            
            return response.json();
        })
        .catch((error) => {
            return error
            console.log('error helpers --->',error);
        });
  }


}





