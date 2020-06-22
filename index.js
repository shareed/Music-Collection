
//reggae.html function to get title
function displayTitleFunction() {
    const x = document.title;
    document.getElementById('title').innerHTML = x
}

//index.html function to get URL
function displayURLFunction() {
    const url = document.URL;
    document.getElementById('url').innerHTML = url
}

//rap.html function to get date last modified
function displayLastModifiedFunction() {
    const date = document.lastModified;
    document.getElementById('modifiedDate').innerHTML = date
}

//hiphop.html function to find our when new music is added
function newMusicFunction() {
    const newMusic = 'New music everyday';
    document.getElementById('newMusic').innerHTML = newMusic
}

//randb.html function to get tour dates for artist in collection
function tourDatesFunction() {
    const tourDates = 'These are tour dates';
    document.getElementById('tourDates').innerHTML = tourDates
}

//pop.html function to get a list of places you can get the music
function buyMusicFunction() {
    const places = 'These are places you can get the music';
    document.getElementById('places').innerHTML = places
}


//validate email
function validateEmail(email, message) 
{ const valid = /\S+@\S+/;
    return valid.test(email);
}

//Validate date
function validateDate(date) {
if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date))
        return false;
    const parts = date.split("/");
    const day = parseInt(parts[1], 10);
    const month = parseInt(parts[0], 10);
    const year = parseInt(parts[2], 10);
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    const eachMonth = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        eachMonth[1] = 29;

    return day > 0 && day <= eachMonth[month - 1];
};






//Rap AJax
function loadRapXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp);
      }
    };
    xmlhttp.open("GET", "../xml/rap.xml", true);
    xmlhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>TITLE</th><th>ARTIST</th><th>YEAR</th></tr>";
    var x = xmlDoc.getElementsByTagName("song");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("artist")[0].childNodes[0].nodeValue +
      "</td><td>"     +
      x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
      "</td>\</tr>"
      ;
    }
    document.getElementById("collection").innerHTML = table;
  }

//Reggae AJAX
  function loadReggaeXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp);
      }
    };
    xmlhttp.open("GET", "../xml/reggae.xml", true);
    xmlhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>TITLE</th><th>ARTIST</th><th>YEAR</th></tr>";
    var x = xmlDoc.getElementsByTagName("song");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("artist")[0].childNodes[0].nodeValue +
      "</td><td>"     +
      x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
      "</td>\</tr>"
      ;
    }
    document.getElementById("collection").innerHTML = table;
  }


//RanB AJAX
  function loadRandBXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp);
      }
    };
    xmlhttp.open("GET", "../xml/randb.xml", true);
    xmlhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>TITLE</th><th>ARTIST</th><th>YEAR</th></tr>";
    var x = xmlDoc.getElementsByTagName("song");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("artist")[0].childNodes[0].nodeValue +
      "</td><td>"     +
      x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
      "</td>\</tr>"
      ;
    }
    document.getElementById("collection").innerHTML = table;
  }


  // 

//HipHop AJAX
  function loadHipHopXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp);
      }
    };
    xmlhttp.open("GET", "../xml/hiphop.xml", true);
    xmlhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>TITLE</th><th>ARTIST</th><th>YEAR</th></tr>";
    var x = xmlDoc.getElementsByTagName("song");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("artist")[0].childNodes[0].nodeValue +
      "</td><td>"     +
      x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
      "</td>\</tr>"
      ;
    }
    document.getElementById("collection").innerHTML = table;
  }


  //Pop AJAX
  function loadPopXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myFunction(xmlhttp);
      }
    };
    xmlhttp.open("GET", "../xml/pop.xml", true);
    xmlhttp.send();
  }
  function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>TITLE</th><th>ARTIST</th><th>YEAR</th></tr>";
    var x = xmlDoc.getElementsByTagName("song");
    for (i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("artist")[0].childNodes[0].nodeValue +
      "</td><td>"     +
      x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
      "</td>\</tr>"
      ;
    }
    document.getElementById("collection").innerHTML = table;
  }


