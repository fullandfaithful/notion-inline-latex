// ==UserScript==
// @name            Notion Inline LaTeX
// @namespace       https://github.com/fullandfaithful/notion-inline-latex
// @match           https://*.notion.so/*
// @version         0.1
// @author          Abraham Aguilar
// @description     User Script for Inline LaTeX Rendering in notion.so
// @require         https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.js
// @require         https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/contrib/auto-render.min.js
// @grant           GM_addStyle
// ==/UserScript==

GM_addStyle(`
.katex {
    padding-right: 0 !important;
}
`);

let renderInline = (el) => {
    renderMathInElement(el, {
        delimiters: [
            {left: "$", right: "$", display: false}]
    });
    console.log("Rendering KaTeX...")
};

// render katex on page load
setTimeout( _ => renderInline(document.body), 3000)

// render katex on keyboard shortcut cmd/ctrl + j
document.addEventListener("keydown", e => {
    if ((e.ctrlkey || e.metaKey) && e.key == "j") {
        renderInline(document.body)
    }
})




