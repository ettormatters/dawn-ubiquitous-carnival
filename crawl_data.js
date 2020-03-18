const Crawler = require("crawler");

let id_full_arr = []


const c = new Crawler({

    maxConnections : 10,
    mode : 'no-cors',
    credentials: 'same-origin',
    headers: {
                "Content-Type": "application/json",
                "Accept":"application/json",
                "Access-Control-Allow-Origin": "*",
                "Accept" : "*/*",
                "Accept-Language" : "*",
                "Content-Language" : "en-US",
                "Content-Type" : "text/html",
            },
    callback : function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = res.$;
            let names = $(".ds-link.ds-link--styleSubtle.link.link--darken.link--accent.u-accentColor--textNormal.u-accentColor--textDarken");
            names.each(function(){
                //console.log($(this).text());
                id_full_arr.push($(this).text());
            });
        }
        console.log(id_full_arr);
        console.log(res.headers)
        var list = document.createElement('div')
        list.setAttribute('style', 'font-family: Helvetica, Arial; font-weight: 200; text-align: center; margin-top: 150px;')
        list.innerHTML = id_full_arr
        document.body.appendChild(list)
        
        done();
    }

});

c.queue({
    uri: 'http://cors.io/?https://medium.com/dawn-cau',
});

// count in array
// browserify

// no-cors