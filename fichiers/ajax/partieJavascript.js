//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function recupererPremierEnfantDeTypeNode(n) {
    var x = n.firstChild;
    while (x.nodeType != 1) { // Test if x is an element node (and not a text node or other)
        x = x.nextSibling;
    }
    return x;
}

function setNom(nom) {
    var elementHtmlARemplir = window.document.getElementById("informations");
    elementHtmlARemplir.innerHTML = nom;
}


function chargerHttpXML(xmlDocumentUrl) {
    
    var httpAjax;
    
    httpAjax = window.XMLHttpRequest ?
    new XMLHttpRequest() :
    new ActiveXObject('Microsoft.XMLHTTP');
    
    if (httpAjax.overrideMimeType) {
        httpAjax.overrideMimeType('text/xml');
    }
    
    httpAjax.open('GET', xmlDocumentUrl, false);
    httpAjax.send();
    
    return httpAjax.responseXML;
}


function chargerHttpJSON(jsonDocumentUrl) {
    
    var httpAjax;
    
    httpAjax = window.XMLHttpRequest ?
    new XMLHttpRequest() :
    new ActiveXObject('Microsoft.XMLHTTP');
    
    if (httpAjax.overrideMimeType) {
        httpAjax.overrideMimeType('text/xml');
    }
    
    
    httpAjax.open('GET', jsonDocumentUrl, false);
    httpAjax.send();
    
    var responseData = eval("(" + httpAjax.responseText + ")");
    
    return responseData;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function button1() {
    document.body.style.background = 'blue';
    document.getElementById("myButton1").style.color = "white";
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function button2() {
    document.body.style.background = 'white';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function button3(xmlDocumentUrl, xslDocumentUrl) {
    var nomPays = document.getElementById('myTextInput1').value;
    var xsltProcessor = new XSLTProcessor();
    var xslDocument = chargerHttpXML(xslDocumentUrl);
    var xmlDocument = chargerHttpXML(xmlDocumentUrl);
    xsltProcessor.setParameter(null, "nomPays", nomPays);
    xsltProcessor.importStylesheet(xslDocument);
    var newXmlDocument = xsltProcessor.transformToDocument(xmlDocument);
    
    // Recherche du parent (dont l'id est "here") de l'?l?ment ? remplacer dans le document HTML courant
    var elementHtmlParent = window.document.getElementById("id_element_a_remplacer");
    // Premier ?l?ment fils du parent
    var elementHtmlARemplacer = recupererPremierEnfantDeTypeNode(elementHtmlParent);
    // Premier ?l?ment "elementName" du nouveau document (par exemple, "ul", "table"...)
    var elementAInserer = newXmlDocument.getElementsByTagName("h3")[0];
    
    // Remplacement de l'?l?ment
    elementHtmlParent.replaceChild(elementAInserer, elementHtmlARemplacer);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function bouton4_displaySvg(){
  
    var xsltProcessor = new XSLTProcessor();
    var xmlDocument = chargerHttpXML('exemple.svg');
    
	// Recherche du parent (dont l'id est "here") de l'?l?ment ? remplacer dans le document HTML courant
    var elementHtmlParent = window.document.getElementById("id_element_a_remplacer");
    // Premier ?l?ment fils du parent
    var elementHtmlARemplacer = recupererPremierEnfantDeTypeNode(elementHtmlParent);
    // Premier ?l?ment "elementName" du nouveau document (par exemple, "ul", "table"...)
    
    var texteAInserer = new XMLSerializer().serializeToString(xmlDocument);
    
    // Remplacement de l'?l?ment
    elementHtmlARemplacer.innerHTML=texteAInserer;

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function bouton5_clickable(){

    var shapes = document.getElementsByTagName("g")[0].childNodes;
    for(var i = 0 ; i<shapes.length ; i++){
      if(shapes[i].nodeType == 1){
        shapes[i].addEventListener("click",function(){
          setNom(this.getAttribute('title'));
        })
      }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function bouton6_displayWorldSvg(){
  
    var xsltProcessor = new XSLTProcessor();
    var xmlDocument = chargerHttpXML('worldHigh.svg');
    
	// Recherche du parent (dont l'id est "here") de l'?l?ment ? remplacer dans le document HTML courant
    var elementHtmlParent = window.document.getElementById("id_element_a_remplacer");
    // Premier ?l?ment fils du parent
    var elementHtmlARemplacer = recupererPremierEnfantDeTypeNode(elementHtmlParent);
    // Premier ?l?ment "elementName" du nouveau document (par exemple, "ul", "table"...)
    
    var texteAInserer = new XMLSerializer().serializeToString(xmlDocument);
    
    // Remplacement de l'?l?ment
    elementHtmlARemplacer.innerHTML=texteAInserer;

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function bouton7_clickable(){
  var countries = document.getElementsByTagName("g")[0].childNodes;
  for(var i = 0 ; i<countries.length ; i++){
        countries[i].addEventListener("click",function(){
          setNom(this.getAttribute('countryname'));
        })
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function bouton8_mouse(){
    
    var xsltProcessor = new XSLTProcessor();
    var xslDocument = chargerHttpXML('infosPaysMouse.xsl');
    var xmlDocument = chargerHttpXML('countriesTP.xml');
    xsltProcessor.importStylesheet(xslDocument);
    var countries = document.getElementsByTagName("g")[0].childNodes;
    var tableau = document.getElementById("tableau");
    for(var i = 0 ; i<countries.length ; i++){
        countries[i].addEventListener("mouseover",function(){
                                      xsltProcessor.setParameter(null, "nomPays", this.getAttribute('countryname'));
                                      var newXmlDocument = xsltProcessor.transformToDocument(xmlDocument);
                                      var elementHtmlParent = window.document.getElementById("placeTableauAAfficher");
                                      var elementHtmlARemplacer = window.document.getElementById("tableauVide");
                                      var elementAInserer = newXmlDocument.getElementById("tableau");
                                      elementHtmlParent.replaceChild(elementAInserer,elementHtmlARemplacer);
                                      this.setAttribute("style", "fill:red");
                                      });
        countries[i].addEventListener("mouseleave",function(){
                                      xsltProcessor.setParameter(null, "nomPays", this.getAttribute('countryname'));
                                      var newXmlDocument = xsltProcessor.transformToDocument(xmlDocument);
                                      var elementHtmlParent = window.document.getElementById("placeTableauAAfficher");
                                      var elementHtmlARemplacer = window.document.getElementById("tableau");
                                      var elementAInserer = newXmlDocument.getElementById("tableauVide");
                                      elementHtmlParent.replaceChild(elementAInserer, elementHtmlARemplacer);
                                      this.setAttribute("style", "");
                                      });
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function bouton9(){
    var xsltProcessor = new XSLTProcessor();
    var xslDocument = chargerHttpXML('autoCompletion.xsl');
    var xmlDocument = chargerHttpXML('countriesTP.xml');
    xsltProcessor.importStylesheet(xslDocument);
    var newXmlDocument = xsltProcessor.transformToDocument(xmlDocument);
    var elementHtmlParent = window.document.getElementById("pays");
    var elementAInserer = newXmlDocument.getElementsByTagName("datalist")[0].childNodes;
    var size = elementAInserer.length;
    for (var i = 0; i < size; i++){
    elementHtmlParent.appendChild(elementAInserer[0]);
    }
    console.log(elementAInserer.length);
}






