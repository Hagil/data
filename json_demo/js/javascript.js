$.get('https://jsonplaceholder.typicode.com/users').done(process_results).fail(kaboom);

function process_results(data) {

  var table = document.createElement('table');
  for (var counter = 0; counter < data.length; counter++) {
    //console.log('a person is here');
    var user = (data[counter]);
    var tr = document.createElement('tr');

    var td = document.createElement('td');
    var innerText = document.createTextNode(user.name);
    td.appendChild(innerText);
    tr.appendChild(td);

    var td = document.createElement('td');
    var innerText = document.createTextNode(user.email);
    td.appendChild(innerText);
    tr.appendChild(td);

    var td = document.createElement('td');
    var innerText = document.createTextNode(user.phone);
    td.appendChild(innerText);
    tr.appendChild(td);

    var td = document.createElement('td');
    var innerText = document.createTextNode(user.website);
    td.appendChild(innerText);
    tr.appendChild(td);

    var td = document.createElement('td');
    var innerText = document.createTextNode(user.id);
    td.appendChild(innerText);
    tr.appendChild(td);

    var td = document.createElement('td');
    var button = document.createElement('button');
    button.setAttribute("id", user.id);
    button.addEventListener("click", edit_me);
    var inner_text = document.createTextNode('edit');
    button.appendChild(inner_text);
    td.appendChild(button);
    tr.appendChild(td);


    var td = document.createElement('td');
    var button = document.createElement('button');
    var inner_text = document.createTextNode('delete');
    button.appendChild(inner_text);
    td.appendChild(button);
    tr.appendChild(td);


    table.appendChild(tr);
  }
  console.log(table);
  document.querySelector('#users').appendChild(table);
}

function kaboom(reason) {
  console.log(reason);

}

function edit_me() {
  console.log(this);
}