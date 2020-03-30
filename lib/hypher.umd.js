; (function(H) {
    H.domHyphenate = function(lang, selector, root) {
        if (!H.languages[lang]) return null;
        root = root || document;
        if (!root || !root.querySelectorAll) return null;
        var els = root.querySelectorAll(selector);
        for (var i = 0; i < els.length; i++) {
            var childN = els[i].childNodes;
            for (var j = 0; j < childN.length; j++) {
                var cn = childN[j];
                if (cn.nodeType === 3) {
                    cn.nodeValue = H.languages[lang].hyphenateText(cn.nodeValue);
                }
            }
        }
    }
}(window.Hypher));