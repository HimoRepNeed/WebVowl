/// <reference path="./constants.ts" />

namespace TRVOWL.util {

    export class LanguageTools {
        static textInLanguage = (textObject, preferredLanguage) => {
            if (typeof textObject === "undefined") {
                return undefined;
            }

            if (typeof textObject === "string") {
                return textObject;
            }

            if (preferredLanguage && textObject.hasOwnProperty(preferredLanguage)) {
                return textObject[preferredLanguage];
            }

            var textForLanguage = LanguageTools.searchLanguage(textObject, "en");
            if (textForLanguage) {
                return textForLanguage;
            }
            textForLanguage = LanguageTools.searchLanguage(textObject, constants.LANG_UNDEFINED);
            if (textForLanguage) {
                return textForLanguage;
            }

            return textObject[constants.LANG_IRIBASED];
        }

        private static searchLanguage = (textObject, preferredLanguage) => {
            for (var language in textObject) {
                if (language === preferredLanguage && textObject.hasOwnProperty(language)) {
                    return textObject[language];
                }
            }
        }
    }
}