const supported_langs = ["tr", "en"];
const default_lang = "en";
let lang_override = localStorage.getItem("lang_override");
let lang = default_lang;

navigator.languages.every((l) => {
    if (supported_langs.includes(l)) {
        lang = l;
        return false;
    }
    return true;
});
if (lang_override !== null) { lang = lang_override; }


// document.querySelector("*[i18n]").innerHTML = i18n[lang];

function translate(lang) {
    fetch(`/lang/${lang}.json`).then((r) => r.json()).then((r) => {
        i18n = r;
        document.querySelectorAll("*[i18n]").forEach((e) => {
            e.innerHTML = i18n[e.getAttribute("i18n")];
        });
    });
}

translate(lang);
