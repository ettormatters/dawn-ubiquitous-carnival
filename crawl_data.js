const Crawler = require("crawler");

let id_full_arr = []


const c = new Crawler({

    maxConnections : 10,

    callback : function (error, res, done) {
        if(error){
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
        done();
    }

});

c.queue('https://medium.com/dawn-cau');

// count in array
// browserify