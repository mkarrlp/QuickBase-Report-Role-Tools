// ==UserScript==
// @name         QuickBase Report Role Resizer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Resizes the Role list in reports to make it easier to navigate and find Roles
// @author       You
// @match        ://*.quickbase.com/db/*?a=viewbuild&qid*
// @grant        none
// @updateURL    ://github.com/mkarrlp/QuickBaseReportRoleViewResizer/raw/master/QuickBaseReportRoleResizer.user.js
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("whichRoles1").style["min-height"] = "500px"
})();
