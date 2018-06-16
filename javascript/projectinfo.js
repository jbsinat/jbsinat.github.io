var baseUrl = 'http://127.0.0.1:8089';

// function Post(url, data, cb) {}

// function Get(url, data, cb, errcb) {
//   $.ajax({
//     url: baseUrl + url,
//     type: 'GET',
//     data: {projectid:data},
//     success: cb,
//     xhrFields: {
//       withCredentials: true
//     },
//     error: function(xhr, errType, err) {}
//   })
// }

function Post(url, cb) {}

function Get(url, cb, errcb) {
    $.ajax({
      url: baseUrl + url,
      type: 'GET',
    //   data: {projectid:data},
      success: cb,
      xhrFields: {
        withCredentials: true
      },
      error: function(xhr, errType, err) {}
    })
  }