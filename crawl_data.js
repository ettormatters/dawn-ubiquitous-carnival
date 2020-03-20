const Crawler = require("crawler");

let id_full_arr = []


const c = new Crawler({

    maxConnections : 10,
    //mode : 'no-cors',
    //credentials: 'same-origin',
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
        console.log(res)
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
        //console.log(id_full_arr);
        //console.log(res.headers)
        var list = document.createElement('div')
        list.setAttribute('style', 'font-family: Helvetica, Arial; font-weight: 200; text-align: center; margin-top: 150px;')
        list.innerHTML = id_full_arr
        document.body.appendChild(list)
        
        done();
    }

});

c.queue({
    uri: 'https://medium.com/dawn-cau',
});

// server-less front hosting, and automation thinking
// low lib level re-coding
// count in array

//https://velog.io/@jmkim87/%EC%A7%80%EA%B8%8B%EC%A7%80%EA%B8%8B%ED%95%9C-CORS-%ED%8C%8C%ED%97%A4%EC%B3%90%EB%B3%B4%EC%9E%90
// https://www.zerocho.com/category/NodeJS/post/5a6c347382ee09001b91fb6a
// https://js2prince.tistory.com/entry/Ajax-JSONP%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-Cross-Domain-%ED%95%B4%EA%B2%B0
// http://www.ajax-cross-origin.com/