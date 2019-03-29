//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function recupererPremierEnfantDeTypeNode(n) {
    var x = n.firstChild;
    while (x.nodeType != 1) { // Test if x is an element node (and not a text node or other)
        x = x.nextSibling;
    }
    return x;
}



function button1() {
    document.body.style.background = 'blue';
    document.getElementById("myButton1").style.color = "white";
}

function button2() {
    document.body.style.background = 'white';
}

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

function bouton7_clickable(){
  var countries = document.getElementsByTagName("g")[0].childNodes;
  for(var i = 0 ; i<countries.length ; i++){
        countries[i].addEventListener("click",function(){
          setNom(this.getAttribute('countryname'));
        })
    }
}

function bouton8_mouse(){
    
    var xsltProcessor = new XSLTProcessor();
    var xslDocument = chargerHttpXML('infosPaysMouse.xsl');
    var xmlDocument = chargerHttpXML('countriesTP.xml');
    xsltProcessor.importStylesheet(xslDocument);

  var countries = document.getElementsByTagName("g")[0].childNodes;
  var tableau = document.getElementById("tableau");
  for(var i = 0 ; i<countries.length ; i++){
        countries[i].addEventListener("mouseover",function(){
          tableau.style.display = "";
          xsltProcessor.setParameter(null, "nomPays", this.getAttribute('countryname'));
          
          var newXmlDocument = xsltProcessor.transformToDocument(xmlDocument);
          setTableau(this.getAttribute('countryname'), newXmlDocument.getElementsByTagName("div")[0], newXmlDocument.getElementsByTagName("div")[1]);
          this.setAttribute("style", "fill:red");
          
        });
        countries[i].addEventListener("mouseleave",function(){
          tableau.style.display = "none";
          setTableau("","","");
          this.setAttribute("style", "");
        });
    }
}

function bouton9(){
    var xmlDocument = chargerHttpXML('countriesTP.xml');
    var pays = xmlDocument.getElementsByTagName("common");
    for(var i = 0 ; i<pays.length ; i++){
      var node = document.createElement("option",{ value : pays[i].nodeValue });
      window.document.getElementById("pays").appendChild(node);
    }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//change le contenu de l'?lement avec l'id "nom" avec la chaine de caract?res en param?tre	  
function setNom(nom) {
    var elementHtmlARemplir = window.document.getElementById("id_nom_a_remplacer");
    elementHtmlARemplir.innerHTML = nom;
}

function setTableau(nomPays, capitale, drapeau) {
    var elementHtmlARemplir1 = window.document.getElementById("nomPays");
    elementHtmlARemplir1.innerHTML = nomPays;
    window.document.getElementById("capitale").innerHTML = capitale.innerHTML;
    
    
                    
    window.document.getElementById("drapeau").innerHTML = drapeau.innerHTML;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//charge le fichier XML se trouvant ? l'URL relative donn? dans le param?treet le retourne
function chargerHttpXML(xmlDocumentUrl) {

    var httpAjax;

    httpAjax = window.XMLHttpRequest ?
        new XMLHttpRequest() :
        new ActiveXObject('Microsoft.XMLHTTP');

    if (httpAjax.overrideMimeType) {
        httpAjax.overrideMimeType('text/xml');
    }

    //chargement du fichier XML ? l'aide de XMLHttpRequest synchrone (le 3? param?tre est d?fini ? false)
    httpAjax.open('GET', xmlDocumentUrl, false);
    httpAjax.send();

    return httpAjax.responseXML;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// Charge le fichier JSON se trouvant ? l'URL donn?e en param?tre et le retourne
function chargerHttpJSON(jsonDocumentUrl) {

    var httpAjax;

    httpAjax = window.XMLHttpRequest ?
        new XMLHttpRequest() :
        new ActiveXObject('Microsoft.XMLHTTP');

    if (httpAjax.overrideMimeType) {
        httpAjax.overrideMimeType('text/xml');
    }

    // chargement du fichier JSON ? l'aide de XMLHttpRequest synchrone (le 3? param?tre est d?fini ? false)
    httpAjax.open('GET', jsonDocumentUrl, false);
    httpAjax.send();

    var responseData = eval("(" + httpAjax.responseText + ")");

    return responseData;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Bouton2_ajaxBibliographie(xmlDocumentUrl, xslDocumentUrl, newElementName) {

    var xsltProcessor = new XSLTProcessor();

    // Chargement du fichier XSL ? l'aide de XMLHttpRequest synchrone 
    var xslDocument = chargerHttpXML(xslDocumentUrl);

    // Importation du .xsl
    xsltProcessor.importStylesheet(xslDocument);

    // Chargement du fichier XML ? l'aide de XMLHttpRequest synchrone 
    var xmlDocument = chargerHttpXML(xmlDocumentUrl);

    // Cr?ation du document XML transform? par le XSL
    var newXmlDocument = xsltProcessor.transformToDocument(xmlDocument);

    // Recherche du parent (dont l'id est "here") de l'?l?ment ? remplacer dans le document HTML courant
    var elementHtmlParent = window.document.getElementById("id_element_a_remplacer");
    // Premier ?l?ment fils du parent
    var elementHtmlARemplacer = recupererPremierEnfantDeTypeNode(elementHtmlParent);
    // Premier ?l?ment "elementName" du nouveau document (par exemple, "ul", "table"...)
    var elementAInserer = newXmlDocument.getElementsByTagName(newElementName)[0];

    // Remplacement de l'?l?ment
    elementHtmlParent.replaceChild(elementAInserer, elementHtmlARemplacer);

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Bouton3_ajaxEmployees(xmlDocumentUrl) {


    var xmlDocument = chargerHttpXML(xmlDocumentUrl);

    //extraction des noms ? partir du document XML (avec une feuille de style ou en javascript)
    var lesNoms = xmlDocument.getElementsByTagName("LastName");

    // Parcours de la liste des noms avec une boucle for et 
    // construction d'une chaine de charact?res contenant les noms s?par?s par des espaces 
    // Pour avoir la longueur d'une liste : attribut 'length'
    // Acc?s au texte d'un noeud "LastName" : NOM_NOEUD.firstChild.nodeValue
    var chaineDesNoms = "";
    for (i = 0; i < lesNoms.length; i++) {
        if (i > 0) {
            chaineDesNoms = chaineDesNoms + ", ";
        }
        chaineDesNoms = chaineDesNoms + lesNoms[i].firstChild.nodeValue + " ";
    }


    // Appel (ou recopie) de la fonction setNom(...) ou bien autre fa?on de modifier le texte de l'?l?ment "span"
    setNom(chaineDesNoms);



}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Bouton4_ajaxEmployeesTableau(xmlDocumentUrl, xslDocumentUrl) {
    //commenter la ligne suivante qui affiche la bo?te de dialogue!
    alert("Fonction ? compl?ter...");
}
