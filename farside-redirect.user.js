// ==UserScript==
// @name        Farside redirect
// @namespace   https://github.com/ayes-web
// @match       http*://youtu.be/*
// @match       http*://*.youtube.com/*
// @match       http*://*.youtube-nocookie.com/*
// @match       http*://*.reddit.com/*
// @match       http*://*.instagram.com/*
// @match       http*://*.twitter.com/*
// @match       http*://*.wikipedia.org/*
// @match       http*://*.medium.com/*
// @match       http*://*.odysee.com/*
// @match       http*://*.imgur.com/*
// @match       http*://translate.google.com/*
// @match       http*://*.tiktok.com/*
// @grant       GM_getValue
// @grant       GM_setValue
// @version     1.0
// @author      ayes-web
// @description Unofficial Farside redirect userscript
// @homepageURL https://github.com/ayes-web/farside-redirect/
// @downloadURL https://github.com/ayes-web/farside-redirect/raw/main/farside-redirect.user.js
// @license      GPL-3.0 License
// @run-at document-start
// ==/UserScript==

// Sets default values
if (GM_getValue("farsideEndpoint") === undefined) {
    GM_setValue("farsideEndpoint", "https://farside.link/")
}
if (GM_getValue("redirectOldReddit") === undefined) {
    GM_setValue("redirectOldReddit", false)
}
if (GM_getValue("preferredYoutubeFrontend") === undefined) {
    GM_setValue("preferredYoutubeFrontend", "invidious")
}
if (GM_getValue("preferredRedditFrontend") === undefined) {
    GM_setValue("preferredRedditFrontend", "libreddit")
}
if (GM_getValue("redirectYoutube") === undefined) {
    GM_setValue("redirectYoutube", true)
}
if (GM_getValue("redirectReddit") === undefined) {
    GM_setValue("redirectReddit", true)
}
if (GM_getValue("redirectInstagram") === undefined) {
    GM_setValue("redirectInstagram", true)
}
if (GM_getValue("redirectTwitter") === undefined) {
    GM_setValue("redirectTwitter", true)
}
if (GM_getValue("redirectWikipedia") === undefined) {
    GM_setValue("redirectWikipedia", true)
}
if (GM_getValue("redirectMedium") === undefined) {
    GM_setValue("redirectMedium", true)
}
if (GM_getValue("redirectOdysee") === undefined) {
    GM_setValue("redirectOdysee", true)
}
if (GM_getValue("redirectImgur") === undefined) {
    GM_setValue("redirectImgur", true)
}
if (GM_getValue("redirectGoogleTranslate") === undefined) {
    GM_setValue("redirectGoogleTranslate", true)
}
if (GM_getValue("redirectTiktok") === undefined) {
    GM_setValue("redirectTiktok", true)
}

// Gets config settings
const farsideEndpoint = GM_getValue("farsideEndpoint", "https://farside.link/");
const redirectOldReddit = GM_getValue("redirectOldReddit", false);
const preferredYoutubeFrontend = GM_getValue("preferredYoutubeFrontend", "invidious");
const preferredRedditFrontend = GM_getValue("preferredRedditFrontend", "libreddit");

const redirectYoutube = GM_getValue("redirectYoutube", true);
const redirectReddit = GM_getValue("redirectReddit", true);
const redirectInstagram = GM_getValue("redirectInstagram", true);
const redirectTwitter = GM_getValue("redirectTwitter", true);
const redirectWikipedia = GM_getValue("redirectWikipedia", true);
const redirectMedium = GM_getValue("redirectMedium", true);
const redirectOdysee = GM_getValue("redirectOdysee", true);
const redirectImgur = GM_getValue("redirectImgur", true);
const redirectGoogleTranslate = GM_getValue("redirectGoogleTranslate", true);
const redirectTiktok = GM_getValue("redirectTiktok", true);

const host = window.location.hostname;
const path = window.location.pathname;
const href = window.location.href;

switch (host) {
    case "youtu.be":
    case "youtube.com":
    case "www.youtube.com":
    case "www.youtube-nocookie.com":
        if (redirectYoutube) {
            window.location.replace(`${farsideEndpoint}${preferredYoutubeFrontend}/${path}`);
        }
        break
    case "old.reddit.com":
        if (!redirectOldReddit) {
            break
        }
    case "reddit.com":
    case "www.reddit.com":
        if (redirectReddit) {
            window.location.replace(`${farsideEndpoint}${preferredRedditFrontend}/${path}`);
        }
        break
    case "instagram.com":
    case "www.instagram.com":
        if (redirectInstagram) {
            window.location.replace(farsideEndpoint + href);
        }
        break
    case "twitter.com":
    case "www.twitter.com":
        if (redirectTwitter) {
            window.location.replace(farsideEndpoint + href);
        }
        break
    case "medium.com":
    case "www.medium.com":
        if (redirectMedium) {
            window.location.replace(farsideEndpoint + href);
        }
        break
    case "odysee.com":
    case "www.odysee.com":
        if (redirectOdysee) {
            window.location.replace(farsideEndpoint + href);
        }
        break
    case "imgur.com":
    case "www.imgur.com":
        if (redirectImgur) {
            window.location.replace(farsideEndpoint + href);
        }
        break
    case "translate.google.com":
        if (redirectGoogleTranslate) {
            window.location.replace(farsideEndpoint + href);
        }
        break
    case "tiktok.com":
    case "www.tiktok.com":
        if (redirectTiktok) {
            window.location.replace(farsideEndpoint + href);
        }
        break
    default:
        if (window.location.hostname.endsWith("wikipedia.org") && redirectWikipedia) {
            window.location.replace(farsideEndpoint + href);
        }
}
