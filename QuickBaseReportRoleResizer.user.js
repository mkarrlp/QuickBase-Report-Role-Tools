// ==UserScript==
// @name         QuickBaseReportRoleResizer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        ://*.quickbase.com/db/*?a=viewbuild&qid*
// @grant        none
// @updateURL    ://github.com/mkarrlp/QuickBaseReportRoleViewResizer/raw/master/QuickBaseReportRoleResizer.user.js
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("whichRoles1").style["min-height"] = "500px"
})();
