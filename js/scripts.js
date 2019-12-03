function navMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function getJSON(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      const status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};


getJSON('https://api.github.com/users/vijayvuyyuru/repos', (err, data) => {
    if (err) {
       return;
    }
    const ul = document.createElement('ul');
    ul.setAttribute('class','projectList');
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = "<a href='" + data[i].html_url + "' target='_blank'>" + data[i].name + "</a>";
        ul.appendChild(li);
        const desc = document.createElement('ul');
        desc.setAttribute('class','projectList');
        const descLi = document.createElement('li');
        descLi.innerHTML = data[i].description;
        desc.appendChild(descLi);
        ul.appendChild(desc);
    }
    document.getElementById('projects-list').appendChild(ul);
});  