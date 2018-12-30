var itensinit = '{ "A": { "cat": "Lona Frontlight", "gramatura": "380g", "prazo": "3 dias", "arte": "S", "brand": "com Bainha e Ilhós", "image": "../images/banner.png", "size": "0,6x1,7 m", "color": "N/A", "price": "26.00", "unit": "1", "amount": "1" }, "B": { "cat": "Cartão DuoDesign", "gramatura": "300g/m²", "prazo": "3 dias", "arte": "S", "brand": "c/ Verniz Local. e Lam. F", "image": "../images/cartaodevisita.png", "size": "9x5 cm", "color": "4/4", "price": "60.55", "unit": "1000", "amount": "1" }, "C": { "cat": "Cartão DuoDesign", "gramatura": "300g/m²", "prazo": "3 dias", "arte": "S", "brand": "c/ Verniz Local. e Lam. F", "image": "../images/cartaodevisita.png", "size": "9x5 m", "color": "4/4", "price": "60.55", "unit": "1000", "amount": "1" }, "D": { "cat": "Cartão DuoDesign", "gramatura": "300g/m²", "prazo": "3 dias", "arte": "S", "brand": "c/ Verniz Local. e Lam. F", "image": "../images/cartaodevisita.png", "size": "9x5 cm", "color": "4/4", "price": "60.55", "unit": "1000", "amount": "1" }, "E": { "cat": "Cartão DuoDesign", "gramatura": "300g/m²", "prazo": "3 dias", "arte": "S", "brand": "c/ Verniz Local. e Lam. F", "image": "../images/cartaodevisita.png", "size": "9x5 cm", "color": "4/4", "price": "60.55", "unit": "1000", "amount": "1" }, "F": { "cat": "Cartão DuoDesign", "gramatura": "300g/m²", "prazo": "3 dias", "arte": "S", "brand": "c/ Verniz Local. e Lam. F", "image": "../images/cartaodevisita.png", "size": "9x5 cm", "color": "4/4", "price": "60.55", "unit": "1000", "amount": "1" }}';
var json = JSON.parse(itensinit);
var existentes = {};
var itens = {};

elmlabelnumbitens = document.getElementById("labelnunb");
elmlabeltxtitens = document.getElementById("labeltxt");

elmlabeltotalitens = document.getElementById("labeltotal");

elmpedido = document.getElementById("b-pedidomobile");

elmpedido.addEventListener('click', fazerpedido);

elmsomar = document.getElementById("b-somarmobile");

elmsomar.addEventListener('click', somartotal);

elmsubt = document.getElementById("b-subtmobile");

elmsubt.addEventListener('click', subttotal);

elmdelete = document.getElementById("b-deletemobile");

elmdelete.addEventListener('click', delett);

if (getCookie('lista') != null){
    if (Object.keys(decode(getCookie('lista'))).length > 0){
        elmpedido.style.display = 'block';   
        document.getElementById('alert').style.display = 'none';
        initdados(decode(getCookie('lista')),'');
        //console.log(decode(getCookie('lista')));
     }else{
        elmpedido.style.display = 'none';
        document.getElementById('alert').style.display = 'table';
     }
}

function fazerpedido(){
    location.assign('../finalizar');
}

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

function encoded(obj){
    var prodctxt = '';

    for (a in obj){

        amount = obj[a]['amount'];
        size = obj[a]['size'];
        size = size.replace(',','.');
        size = size.replace(',','.');
        prodctxt += a+amount+'-'+size+','; 

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
            //console.log(itensd);
            ref = itensd[d];
            ref2 = ref.indexOf('-');
            //size = ref.substr(ref2+1,ref.length);
            //console.log(ref.substr(ref2+1,ref.length));
            ref = ref.substr(0,ref2);
            patt1 = /[^0-9]/g;
            patt2 = /[^A-Z]/g;
            refLetter = String(ref.match(patt1));
            refNumber = String(ref.match(patt2));
            refLetter = refLetter.replace(",", "");
            refNumber = refNumber.replace(",", "");
            camm = json[refLetter];
            cat = camm['cat'];
            brand = camm['brand'];
            image = camm['image'];
            size = camm['size'];
            color = camm['color'];
            price = camm['price'];
            stock = camm['stock'];
            gramatura = camm['gramatura'];
            prazo = camm['prazo'];
            arte = camm['arte'];
            unit = camm['unit'];
            amount = refNumber;
            haha[refLetter] = {cat, gramatura, prazo, arte, unit, brand, image, size, color, price, stock, amount};
        }
    }
    //console.log(haha)
    return haha;
    //console.log(jsonss);
}

function makequant(newquant,newvalue){
    //itenss = pegarinfos();
    //console.log(newquant);
    for (a in itens){
        amount = itens[a]['amountcalc'];
        total = itens[a]['totalcalc'];
        price = itens[a]['pricecalc'];
            actualquant = amount.innerHTML;
          //  console.log(newquant);
            quant = parseInt(actualquant)+(newquant);
            //console.log(quant);
            pricestr = price.innerHTML;
            pricevalue = pricestr.replace("R$ ", "");
            pricevalue = pricevalue.replace(",", ".");
            if((quant >= 1 ) && (quant < 100 )){
                qq = existentes;
                amount.innerHTML = quant;
                qq[a]['amount'] = quant;

                calculing = quant*parseFloat(pricevalue);
                calculing = calculing.toFixed(2);
                cond = String(calculing);
                cond = cond.replace(".", ",");
                if (cond.indexOf(',') > -1){
                    inner1 = 'R$ '+cond;
                    total.innerHTML = inner1;
                    qq[a].total = inner1;
                }else{
                    inner2 = 'R$ '+cond+',00';
                    total.innerHTML = inner2;
                    qq[a].total = inner2;
                }
                deleteCookie('lista');
                //console.log(encoded(qq));
                setCookie('lista',encoded(qq));
                document.getElementById("container-itens").innerHTML = '';
                initdados(decode(getCookie('lista')),newvalue);
            }
    }
}

function somartotal(){
    makequant(1, '');
    //console.log(this);
}

function subttotal(){
    makequant(-1, '');
}

function selectallselecteds(){
    if (Object.keys(itens).length > 0){
        elmsomar.style.display = 'block';
        elmsubt.style.display = 'block';
        elmdelete.style.display = 'block';
        elmlabelnumbitens.style.display = 'inline';
        elmlabeltxtitens.style.display = 'inline';
        elmlabeltotalitens.style.display = 'none';
        elmpedido.style.display = 'none';
        //console.log('qisso');
        //makequant(1, '');
        //makequant(-1, '');
    }else{
        elmsomar.style.display = 'none';
        elmsubt.style.display = 'none';
        elmdelete.style.display = 'none';
        elmlabelnumbitens.style.display = 'none';
        elmlabeltxtitens.style.display = 'none';
        elmlabeltotalitens.style.display = 'block';
        elmpedido.style.display = 'block';
        //console.log('qisso2');
        //makequant(1, '');
        //makequant(-1, '');
    }
    //makequant(0, '');
}

function makemetro(event){
    //console.log(metroobj.readonly.value);
    
    tt = this;
    metroobj = tt.children[3].children[2].children[0].children[1];
    valuemetro = metroobj.children[0].value;
    if(metroobj.children.length > 1){
        valuemetro = metroobj.children[0].value+'x'+metroobj.children[2].value+' m';     
    }
    if (valuemetro.indexOf('cm') > -1){
        valuemetro = valuemetro;
        //console.log(valuemetro);
    }else{
        valuemetro = valuemetro.replace( /\s/g, '' );
        indx = valuemetro.indexOf('m');
        valuemetro = valuemetro.substr(0,indx);
        valuemetro = valuemetro+' m';
        //console.log(valuemetro);
    }

    metroobj.value = valuemetro;

    if(metroobj.children.length > 1){
        metroobj.value = metroobj.children[0].value+'x'+metroobj.children[2].value+' m';     
    }

    metrocod = tt.children[3].children[3].innerText;
    json[metrocod].size = valuemetro;
    
    console.log(valuemetro+' <<<');
    if(event.keyCode == "13"){
        console.log(valuemetro+' >>>');
        makequant(0, valuemetro);
    }
    //pegarinfos(this);
    //initdados(json, valuemetro);
    //console.log(valuemetro);  
}

function pegarinfos(event){
    //onsole.log(this.childNodes[6].childNodes[1].childNodes[1].style.background);
    qqr = this;
    
    strimage = qqr.childNodes[6].childNodes[1].childNodes[1].style.background;
    //console.log(strimage);
    p = strimage.indexOf('("');
    h = strimage.indexOf('")');
    image = strimage.substr(p+2, (h-p)-2);
    title = qqr.childNodes[1].childNodes[5].innerHTML;
    objtitle = title.split(' ');
    cat = objtitle[0]; 
    brand = '';

    for (i = 1; i < objtitle.length; i++) {
            brand += objtitle[i]+' ';
    }

    inputsobj = qqr.children[3].children[2].children[0].children[1];

    if(inputsobj.children.length > 1){
        sizey = qqr.children[3].children[2].children[0].children[1].children[0].value;
        sizex = qqr.children[3].children[2].children[0].children[1].children[2].value;
        size = sizey+'x'+sizex+' m';
    }else{
        size = qqr.children[3].children[2].children[0].children[1].children[0].value;
    }
    //console.log(size);
    //console.log(qqr.children[3].children[1].children[0].children[1].innerText);
    color = qqr.children[3].children[1].children[0].children[1].innerText;
    price = qqr.childNodes[4].childNodes[1].childNodes[1].childNodes[3].innerHTML;
    amount = qqr.childNodes[4].childNodes[3].childNodes[1].childNodes[3].innerHTML;
    total = qqr.childNodes[4].childNodes[5].childNodes[1].childNodes[3].innerHTML;
    cod = qqr.children[3].children[3].innerText;
    mark = qqr.childNodes[1].childNodes[1];
    dismark = qqr.childNodes[1].childNodes[3];
    pricecalc = qqr.childNodes[4].childNodes[1].childNodes[1].childNodes[3];
    amountcalc = qqr.childNodes[4].childNodes[3].childNodes[1].childNodes[3];
    totalcalc = qqr.childNodes[4].childNodes[5].childNodes[1].childNodes[3];

    if (mark.style.display == 'block'){
        mark.style.display = 'none';
        dismark.style.display = 'block';
        delete itens[cod];
    }else{
        mark.style.display = 'block';
        dismark.style.display = 'none';
        itens[cod] = {cat, brand, image, size, color, price, amount, total, amountcalc, totalcalc,pricecalc};
    }
    elmlabelnumbitens.innerHTML = Object.keys(itens).length;
    //makemetro(this);
    //this.addEventListener('keyup',makemetro);
    selectallselecteds();
    
}

function initdados(obj,metro){
    totallit = 0.0; 
    for (key in obj) {
        cat = obj[key]['cat'];
        brand = obj[key]['brand'];
        gramatura = obj[key]['gramatura'];
        title = cat+' '+gramatura+' '+brand;
        //console.log(metro);
        size = obj[key]['size'];
        color = obj[key]['color'];
        image = obj[key]['image'];
        price = obj[key]['price'];
        pricereplace = price.replace(".", ",");
        cod = key;
        unit = obj[key]['unit'];
        arte = obj[key]['arte'];
        amount = obj[key]['amount'];
        prazo = obj[key]['prazo'];
        if (metro != ''){
            //size = metro;
            //console.log(metro+' qpohaeessa');
            //makequant(1, '');
            //makequant(-1, '');
        }
        dimen = '';
        alertedit = '';
        readonly = 'readonly="readonly"';
        inputer = '<input '+readonly+' class="metro" type="text" value="'+size+'" style="width: 60px;text-align: right; border:0px; border-bottom: 3px solid #8a0ccd;">';
        if (size.indexOf('cm') < 0){
            dimen = size.split('x');
            //console.log(dimen[1]);
            dimen[1] = dimen[1].replace(' m','');
            //console.log(dimen[1]);
            dimenx = dimen[0];
            dimeny = dimen[1];
            dimen[0] = dimen[0].replace(',','.');
            dimen[1] = dimen[1].replace(',','.');
            price = parseFloat(dimen[0])*parseFloat(dimen[1])*parseFloat(price);
            alertedit = ' style="right: 0px; width: 100%; float: right; padding: 0px;"'; 
            readonly = '';
            input1 = '<input '+readonly+' class="metro" type="text" value="'+dimenx+'" style="width: 38px; text-align: left; border:0px; border-bottom: 3px solid #8a0ccd;">';
            input2 = '<input '+readonly+' class="metro" type="text" value="'+dimeny+'" style="width: 38px; text-align: right; border:0px; border-bottom: 3px solid #8a0ccd;">';
            inputer = input1+'<span>x</span>'+input2+'<span> m</span>';
            //console.log(price);
        }
        total = parseFloat(price)*amount;
        total = total.toFixed(2);
        totallit = parseFloat(totallit)+parseFloat(total);
        total = String(total);
        total = total.replace(".", ",");
        existentes[key] = {cat,gramatura,prazo,arte,unit,brand,size,color,image,price,amount,total};
        markt = '<div class="checkboxmark"> <img src="../icons/check.png"> </div> <div class="checkboxdisable"></div> ';
        if (itens[key]){
            markt = '<div class="checkboxmark" style="display:block;"> <img src="../icons/check.png"> </div> <div class="checkboxdisable" style="display:none;"></div> ';
        }
        document.getElementById("container-itens").innerHTML += '<div class="item"> <div class="topitem"> '+markt+'<div class="title">'+title+'</div> </div> <div class="miditem"> <div class="container-mid"> <div class="midleft"> <div class="label">* Arte inclusa.</div> </div> </div></div><div class="miditem"> <div class="container-mid"> <div class="midleft"> <div class="label">Unidade(s)</div> <div class="valor">'+unit+'</div> </div> </div> <div class="container-mid"> <div class="midcenter"> <div class="label">Quantidade</div> <div class="valor">'+amount+'</div> </div> </div> <div class="container-mid"> <div class="midright"> <div class="label">Total</div> <div class="valor">R$ '+total+'</div> </div> </div> </div> <div class="botitem"> <div class="container-bot"> <div class="image" style="background:url('+image+') center; background-size: cover;"></div> </div> <div class="container-bot" style="width:25%;"> <div class="botcenter"> <div class="label">C/F</div> <div class="valor">'+color+'</div> </div> </div> <div class="container-bot"> <div class="botright"><div class="label">Tamanho</div><div class="valor"'+alertedit+'>'+inputer+'</div> </div> </div><div class="cod">'+cod+'</div></div>';
   
        elementt = document.getElementsByClassName('item');

        for (i = 0; i < Object.keys(elementt).length; i++) {
            
            elementt[i].addEventListener('click', pegarinfos);
            elementt[i].addEventListener('keyup', makemetro);
            //elementt[i].addEventListener('keyup', selectallselecteds);
        }
        
    }
    totallit = totallit.toFixed(2);
    totallit = String(totallit);
    totallit = totallit.replace(".", ",");
    if (totallit.indexOf(',') > -1){
        elmlabeltotalitens.innerHTML = 'Total R$ '+totallit;
    }else{
        elmlabeltotalitens.innerHTML = 'Total R$ '+totallit+',00';
    }
}

function delett(){
     refobj = decode(getCookie('lista'));
     for (f in itens){
         delete refobj[f];
     }
     //console.log(refobj);
     deleteCookie('lista');
     setCookie('lista',encoded(refobj));
     itens = {};
     existentes = refobj;
     elmlabelnumbitens.innerHTML = Object.keys(itens).length;
     document.getElementById("container-itens").innerHTML = '';
     initdados(decode(getCookie('lista')),'');
     selectallselecteds();
     if (Object.keys(decode(getCookie('lista'))).length > 0){
        elmpedido.style.display = 'block';   
        document.getElementById('alert').style.display = 'none';
     }else{
        elmpedido.style.display = 'none';
        document.getElementById('alert').style.display = 'table';
     }
 }

