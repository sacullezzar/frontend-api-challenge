

function listAllPeeps(){
var url = 'https://chitter-backend-api.herokuapp.com/peeps'
fetch(url)
.then(function(response) {
  return response.json();
  })
  .then(function(myJson) {
    myJson.forEach(function(item) {
      console.log(item['body'])
      var listItem = item["body"]
      ul = document.getElementById('allPeepsList')
      li = document.createElement('li')
      li.innerHTML = item["body"] + ':' + item['user']['handle']
      ul.appendChild(li)
    })
  });
}