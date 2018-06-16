var baseUrl = 'http://127.0.0.1:8089';

function Post(url, data, cb) {}

function Get(url, cb) {
  $.ajax({
    url: baseUrl + url,
    type: 'GET',
    success: cb,
    xhrFields: {
      withCredentials: true
    },
    error: function(xhr, errType, err) {
      console.error(err)
      alert(xhr.status)
    }
  })
}