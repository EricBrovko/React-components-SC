// @flow

import { getBrowserLanguage } from "./lang";


describe("getBrowserLanguage method Test", () => {
	test("should return default 'en' lang", () => (
        expect(getBrowserLanguage({})).toEqual("en")
    ));

    test("should return provided lang", () => (
        expect(getBrowserLanguage({ language: "ge-UA"})).toEqual("ge")
    ));

    test("should return provided lang", () => (
        expect(getBrowserLanguage({ userLanguage: "ge-UA"})).toEqual("ge")
    ));
});
