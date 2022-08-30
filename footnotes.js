(function () {
    var FOOTNOTE_REGEX = /^\([0-9]+\)$/;
    var REFERENCE_REGEX = /^\[[0-9]+\]$/;
    
    var oldOnLoad = window.onload;
    window.onload = function (event) {
        if (document.getElementsByClassName) {
            var elems = document.getElementsByClassName("ptr");
            for (var i = 0; i<elems.length; i++) {
                var elem = elems[i];
                var ptrText = elem.innerHTML;
                if (FOOTNOTE_REGEX.test(ptrText)) {
                    elem.className = "ptr footptr";
                    elem.onclick = toggle;
                } else if (REFERENCE_REGEX.test(ptrText)) {
                    elem.className = "ptr refptr";
                }
                elem.setAttribute("href", "#"+ptrText);
            }
            addListItemIds("references", "[", "]");
            addListItemIds("footnotes", "(", ")");
        }

        if (typeof oldOnLoad === "function") {
            oldOnLoad(event);
        }
    };
    
    function addListItemIds(parentId, before, after) {
        var refs = document.getElementById(parentId);
        if (refs && refs.getElementsByTagName) {
            var elems = refs.getElementsByTagName("li");
            for (var i = 0; i<elems.length; i++) {
                var elem = elems[i];
                elem.setAttribute("id", before+(i+1)+after);
            }
        }
    }
    
    var currentDiv = null;
    var currentId = null;
    function toggle(event) {
        var parent = this.parentNode;
        if (currentDiv) {
            currentDiv.remove();
            currentDiv = null;
        }
        var footnoteId = this.innerHTML;
        if (currentId === footnoteId) {
            currentId = null;
        } else {
            currentId = footnoteId;
            currentDiv = document.createElement("div");
            var footHtml = document.getElementById(footnoteId).innerHTML;
            currentDiv.innerHTML = footHtml;                        
            currentDiv.className = "foot-tooltip";
            parent.insertBefore(currentDiv, this.nextSibling);
            setTimeout(function () {
                currentDiv.style.opacity = "1";
            }, 0);
        }
        event.preventDefault();
    }
}());