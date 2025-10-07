//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=3;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="Buen trabajo"; messageTime="Error"; messageError="Vuelve a intentarlo"; messageErrorG="Vuelve a intentarlo"; messageAttempts="Ha fallado"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Tiene una sola superficie curva y una base circular. Termina en un vértice o punta.</p>","<p>Todas sus caras son cuadrados. Tiene 6 caras, 8 vértices y 12 aristas</p>","<p>Tiene forma completamente redonda. No tiene aristas ni vértices.</p>","<p>Tiene dos bases circulares y una superficie curva.</p>","<p>Tiene una base y varias caras triangulares que se unen en un solo vértice.</p>"];
var iL=["","","","",""];
var order=["","","","",""]; orderR=["","","","",""];indexR=0; indexL=0;
var cR=["","","","",""]; ansRL=["Mw==","NA==","MQ==","Mg==","MA=="];
var iR=["<div  align='center'><img alt='' src='index_resources/media/cubo.png'></div>","<div  align='center'><img alt='' src='index_resources/media/Esfera.jpg'></div>","<div  align='center'><img alt='' src='index_resources/media/Cilindro.jpg'></div>","<div  align='center'><img alt='' src='index_resources/media/piramide.jpg'></div>","<div  align='center'><img alt='' src='index_resources/media/cono.jpg'></div>"];
var auR=[5,3,4,1,2];
