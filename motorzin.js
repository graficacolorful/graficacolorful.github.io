
//document.addEventListener("beforeunload", function(event) {

    var testjson = '{ "0": { "0": { "cat": "Lona Frontlight 0","gramatura": "380","prazo": "3 dias","brand": "com Bainha e Ilhós","image": "../images/banner.png","size": "0,6x1,7 m","color": "N/A","price": "26.00","unit": "1"}, "1": { "cat": "Lona Frontlight 1","gramatura": "380","prazo": "3 dias","brand": "com Bainha e Ilhós","image": "../images/banner.png","size": "0,6x1,7 m","color": "N/A","price": "26.00","unit": "1"}, "2": { "cat": "Lona Frontlight 2","gramatura": "380","prazo": "3 dias","brand": "com Bainha e Ilhós","image": "../images/banner.png","size": "0,6x1,7 m","color": "N/A","price": "26.00","unit": "1"}}}';
    var otherjson = JSON.parse(testjson);
    var itensinit = '{ "A": { "cat": "Lona Frontlight", "gramatura": "380g", "prazo": "3 dias", "arte": "S", "brand": "com Bainha e Ilhós", "image": "images/banner.png", "size": "1x1 m", "color": "N/A", "price": "26.00", "unit": "1", "amount": "1" }, "B": { "cat": "Cartão DuoDesign", "gramatura": "300g/m²", "prazo": "3 dias", "arte": "S", "brand": "c/ Verniz Local. e Lam. F", "image": "images/cartaodevisita.png", "size": "9x5 cm", "color": "4/4", "price": "60.55", "unit": "1000", "amount": "1" }, "C": { "cat": "Cartão DuoDesign", "gramatura": "300g/m²", "prazo": "3 dias", "arte": "S", "brand": "c/ Verniz Local. e Lam. F", "image": "images/cartaodevisita.png", "size": "9x5 m", "color": "4/4", "price": "60.55", "unit": "1000", "amount": "1" }, "D": { "cat": "Cartão DuoDesign", "gramatura": "300g/m²", "prazo": "3 dias", "arte": "S", "brand": "c/ Verniz Local. e Lam. F", "image": "images/cartaodevisita.png", "size": "9x5 cm", "color": "4/4", "price": "60.55", "unit": "1000", "amount": "1" }, "E": { "cat": "Cartão DuoDesign", "gramatura": "300g/m²", "prazo": "3 dias", "arte": "S", "brand": "c/ Verniz Local. e Lam. F", "image": "images/cartaodevisita.png", "size": "9x5 cm", "color": "4/4", "price": "60.55", "unit": "1000", "amount": "1" }, "F": { "cat": "Cartão DuoDesign", "gramatura": "300g/m²", "prazo": "3 dias", "arte": "S", "brand": "c/ Verniz Local. e Lam. F", "image": "images/cartaodevisita.png", "size": "9x5 cm", "color": "4/4", "price": "60.55", "unit": "1000", "amount": "1" }}';

    var json = JSON.parse(itensinit);
    itens = {};
    elmviewcart = document.getElementById('b-viewcarrinhomobile');
    elmaddcart = document.getElementById('b-addcarrinhomobile');
    elmlabellogo = document.getElementById('labellogo');
    elmlabelnumb = document.getElementById('labelnumb');
    elmlabeltxt = document.getElementById('labeltxt');
    
    initdados(json);
    
    function setCookie(name, value) {
        
        var expirydate=new Date();
        expirydate.setTime( expirydate.getTime()+(100*60*60*24*100) );
        var cookie = name+'='+value+'; path=/ ;expires='+expirydate.toGMTString(); 
        document.cookie = cookie;
    }
    
    function getCookie(name) {
        var cookies = document.cookie;
        var prefix = name + "=";
        var begin = cookies.indexOf("; " + prefix);
     
        if (begin == -1) {
     
            begin = cookies.indexOf(prefix);
             
            if (begin != 0) {
                return null;
            }
     
        } else {
            begin += 2;
        }
     
        var end = cookies.indexOf(";", begin);
         
        if (end == -1) {
            end = cookies.length;                        
        }
     
        return unescape(cookies.substring(begin + prefix.length, end));
    }
    
    function deleteCookie(name) {
        if (getCookie(name)) {
               document.cookie = name + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
        }
    }
    
    function initdados(obj){
        for (key in obj) {
            
            //titlesubs = obj[key]['cat']+' '+obj[key]['brand'];
            //title = titlesubs.substring(0, 29)+'...';
            cat = obj[key]['cat'];
            brand = obj[key]['brand'];
            size = obj[key]['size'];
            color = obj[key]['color'];
            image = obj[key]['image'];
            price = obj[key]['price'];
            unit = obj[key]['unit'];
            arte = obj[key]['arte'];
            amount = obj[key]['amount'];
            gramatura = obj[key]['gramatura'];
            pricereplace = price.replace(".",",");
            cod = key;
            markt = '<div class="checkboxmark"> <img src="icons/check.png"> </div> <div class="checkboxdisable"></div> ';
            if (itens[key]){
                markt = '<div class="checkboxmark" style="display:block;"> <img src="icons/check.png"> </div> <div class="checkboxdisable" style="display:none;"></div> ';
            }
            document.getElementById("container-itens").innerHTML += '<div class="item"><div class="topitem"><div class="cod">'+cod+'</div><div class="checkboxmark"><img src="icons/check.png"> </div> <div class="checkboxdisable"></div><div class="title">'+cat+'</div><div class="title">'+brand+'</div></div> <div class="miditem"> <div class="container-mid"> <img class="image" src="'+image+'"></div></div><div class="botitem1"><div class="container-bot"><div class="botleft"> <div class="label">Gramat.</div> <div class="valor">'+gramatura+'</div></div></div><div class="container-bot"><div class="botcenter"><div class="label">Tamanho</div><div class="valor">'+size+'</div></div></div><div class="container-bot"><div class="botright"><div class="label">Unid.</div><div class="valor">'+unit+'</div></div></div></div><div class="botitem"><div class="container-bot"><div class="botleft"> <div class="label">C/F</div> <div class="valor">'+color+'</div></div></div><div class="container-bot"><div class="botcenter"><div class="label">Arte</div><div class="valor">'+arte+'</div></div></div><div class="container-bot"><div class="botright"><div class="label">Preço</div><div class="valor">'+pricereplace+'</div></div></div></div></div>';
            
            elementt = document.getElementsByClassName('topitem');
            for (i = 0; i < Object.keys(elementt).length; i++) {
                elementt[i].addEventListener('click', pegarinfos);
            }
    
            image = document.getElementsByClassName('image');
            for (i = 0; i < Object.keys(image).length; i++) {
                image[i].addEventListener('click', viewimage);
            }
            
            elmcloseimage = document.getElementById('closeimage');
            elmcloseimage.addEventListener('click', closeimage);
        }
        selectallselecteds(itens);
    }
    
    
    function encoded(obj){
        var prodctxt = '';
    
        for (a in obj){
            amount = obj[a]['amount'];
            //console.log(json[a]['size']);
            size = json[a]['size'];
            size = size.replace(',','.');
            size = size.replace(',','.');
            prodctxt += a+amount+'-'+size+','; 
            //prodctxt += a+amount+','; 
    
        }
    
        prodctxt = prodctxt.substr(0, prodctxt.length-1);
        //console.log(prodctxt);
        return prodctxt;
    }
    
    function decode(string){ /////// SE VIRA AQUI MULA
        var haha = {};
        if (string != ''){
            itensd = string.split(',');
            for (d in itensd){
                ref = itensd[d];
                ref2 = ref.indexOf('-');
                ref = ref.substr(0,ref2);
                patt1 = /[^0-9]/g;
                patt2 = /[^A-Z]/g;
                refLetter = String(ref.match(patt1));
                refNumber = String(ref.match(patt2));
                refLetter = refLetter.replace(",", "");
                refNumber = refNumber.replace(",", "");
                camm = json[refLetter];
                console.log(refLetter);
                cat = camm['cat'];
                brand = camm['brand'];
                image = camm['image'];
                size = camm['size'];
                color = camm['color'];
                price = camm['price'];
                stock = camm['stock'];
                amount = refNumber;
                haha[refLetter] = {cat, brand, image, size, color, price, stock, amount};
            }
        }
        //console.log(haha)
        return haha;
        //console.log(jsonss);
    }
    
    function addnalista(){
        //deleteCookie('lista');
    
        if (getCookie('lista')){
            obj2 = decode(getCookie('lista'));
            for (key in itens){
                if (!obj2[key]){
                    obj2[key] = itens[key];
                } 
            }
        }else{
            obj2 = itens;
        }
        setCookie('lista', encoded(obj2));
        document.getElementById("container-itens").innerHTML = '';
        initdados(json);
        itens= {};
        itensprov = {};
        selectallselecteds(itensprov);
    }
    
    
    
    function selectallselecteds(obj){
        if (getCookie('lista')){
            document.getElementById('countcart').innerHTML = Object.keys(decode(getCookie('lista'))).length; 
        }
        if (Object.keys(obj).length > 0){ //select
            elmviewcart.style.display = 'none';
            elmaddcart.style.display = 'block';
            elmlabellogo.style.display = 'none';
            elmlabelnumb.style.display = 'inline';
            elmlabeltxt.style.display = 'inline';
    
        }else{
            elmviewcart.style.display = 'block';
            elmaddcart.style.display = 'none';
            elmlabelnumb.style.display = 'none';
            elmlabeltxt.style.display = 'none';
            elmlabellogo.style.display = 'table';
        }
    }
    
    function pegarinfos(event){
    
        instance = this.childNodes[0].innerHTML;
        image = json[instance].image;
        cat = json[instance].cat;

        gramatura = json[instance].gramatura;
        prazo = json[instance].prazo;
        arte = json[instance].arte;
        unit = json[instance].unit;

        brand = json[instance].brand;
        size = json[instance].size;
        color = json[instance].color;
        price = json[instance].price;
        amount = json[instance].amount;
        cod = instance;
        mark = this.childNodes[1];
        dismark = this.childNodes[3];
        
        if (mark.style.display == 'block'){
    
            mark.style.display = 'none';
            dismark.style.display = 'block';
            delete itens[cod];
    
        }else{
    
            amount = 1;
            mark.style.display = 'block';
            dismark.style.display = 'none';
            itens[cod] = {amount};
    
        }
    
        elmlabelitens = document.getElementById("labelnumb");
        elmlabelitens.innerHTML = Object.keys(itens).length;
        selectallselecteds(itens);
        
    }
    
    function viewcart(){
        location.assign('lista');
    }
    
    badd = document.getElementById('b-addcarrinhomobile');
    badd.addEventListener('click', addnalista);
    
    badd2 = document.getElementById('b-viewcarrinhomobile');
    badd2.addEventListener('click', viewcart);
    
    
    function viewimage(){
        //document.getElementById('boximage').onloadeddata
        //document.getElementById('boximage').addEventListener('loadeddata', testee);
        document.getElementById('containerboximage').style.background = '#000 url('+this.src+') no-repeat center';
        document.getElementById('containerboximage').style.backgroundSize = 'contain';
        document.getElementById('containerboximage').style.display = 'block';
    }
    
    function closeimage(){
        document.getElementById('containerboximage').style.display = 'none';
    }
    /*element = document.getElementsByClassName('item');
    
    for (i = 0; i < Object.keys(element).length; i++) {
        element[i].addEventListener('click', pegarinfos);
    } */
    
    //});
    