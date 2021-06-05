<!--

function setQas() {
    setToggles();     
    displayAnswer();
}

function setToggles() {
    var togglesLnks = document.getElementById("qas").getElementsByTagName('a');
    for (var i = 0; i < togglesLnks.length; i++) {
		if (togglesLnks[i].parentNode.parentNode.className=="question") {togglesLnks[i].onclick = toggleQuestion;}
	}
}

function displayAnswer() {

    var query = window.location.href;
    var parms = query.split('#');
    var qstn = parms[1];
    if (qstn) {
    var togglesAnswrs = getElementsByClass("answer");
    for (var i = 0; i < togglesAnswrs.length; i++) {
        if (qstn==i) {obj = togglesAnswrs[i];}  
    }  

    var qst = obj.parentNode.getElementsByTagName("div")[0];
	var ans = obj;
	var btn = obj.parentNode.getElementsByTagName("a")[0];  
    switchAnswer(qst,ans,btn);
    }
}

function toggleQuestion() {
	obj=this;
	var qst = obj.parentNode.parentNode.parentNode.getElementsByTagName("div")[0];
	var ans = obj.parentNode.parentNode.parentNode.getElementsByTagName("div")[1];
	var btn = obj.parentNode.getElementsByTagName("a")[0];
	switchAnswer(qst,ans,btn);
}

function switchAnswer(qst,ans,btn) {

if (    ans.style.display == "block")  {
	    ans.style.display = "none";
	    btn.innerHTML = "Open";
	    changeElementClass(btn,'open');
	    changeElementClass(qst,'question');

	}
	
	else {
	    ans.style.display = "block";
	    btn.innerHTML = "Close";
	    changeElementClass(btn,'close');
	    changeElementClass(qst,'questionOn');
	
	}
}

function changeElementClass(element,classname) {
  element.className = classname;
}

function getElementsByClass(searchClass,node,tag) {
	var classElements = new Array();
	if ( node == null )
		node = document;
	if ( tag == null )
		tag = '*';
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp('(^|\\s)'+searchClass+'(\\s|$)');
	for (i = 0, j = 0; i < elsLen; i++) {
		if ( pattern.test(els[i].className) ) {
			classElements[j] = els[i];
			j++;
		}
	}
	return classElements;
}

//-->