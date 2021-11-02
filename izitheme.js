export default {
    install(Vue, options) {
        Vue.currentIziTheme = {};
        Vue.mixin({
            methods:{
                setTheme(themeObj){
                    if (this.checkThemeExists()) this.removeCurrentTheme();
                    Vue.currentIziTheme = themeObj;
                    injectTheme(themeObj);
                },
                getCurrentTheme(){
                    return Vue.currentIziTheme;
                },
                checkThemeExists(){
                    return getThemeStyleTag() != null;
                },
                removeCurrentTheme(){
                    getThemeStyleTag().remove();
                },
            }
        });
    }
}

function injectTheme(themeObj){
    let styleTag = document.createElement('style');
    styleTag.id = "RoozmehrKnight-iziTheme";

    let styleContent = "";
    for (let styleKey in themeObj) {
        styleContent += `--${styleKey} : ${themeObj[styleKey]}!important;`;
    }
    styleTag.textContent = `*{${styleContent}}`;

    document.querySelector('Head').appendChild(styleTag);
}

function getThemeStyleTag(){
    return document.querySelector('style#RoozmehrKnight-iziTheme');
}


