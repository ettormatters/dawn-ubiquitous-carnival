var xhr = new XMLHttpRequest();
        //xhr.setRequestHeader(Access-Control-Allow-Headers, "*")
        xhr.withCredentials = 'false';
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                console.log(xhr.responseText);
            }
        }
        xhr.open('GET', 'https://medium.com/dawn-cau', true);
        xhr.send(null);