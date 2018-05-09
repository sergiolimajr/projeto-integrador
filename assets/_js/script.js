function json() {
  json.prototype.resgatarId = () => {
    $('#id').html('Carregando dados...');
    
    $.getJSON('/json/saude-1.json', (data) => {
      let count = 0;

      for (let i = 0; i < 3; i++) {
        $('table').append(
          '<tr><td id="id">' + data[i]['id'] + '</td>' +
          '<td id="name">' + data[i]['name'] + '</td>' +
          '<td id="organ_name">' + data[i]['organ_name'] + '</td>'
        );
        count++;
      }

      $('h1 em').html(count);
    });
  }
}

var obj = new json();
obj.resgatarId();
