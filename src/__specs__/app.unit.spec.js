"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../app");
describe('Validate photo album ids', () => {
    test('Allows valid id', () => __awaiter(void 0, void 0, void 0, function* () {
        expect((0, app_1.validatePhotoAlbumId)(2)).toEqual(2);
    }));
    test('Returns false if id is not a number', () => __awaiter(void 0, void 0, void 0, function* () {
        expect((0, app_1.validatePhotoAlbumId)('testId')).toEqual(false);
    }));
    test("Returns false if id doesn't exist", () => __awaiter(void 0, void 0, void 0, function* () {
        expect((0, app_1.validatePhotoAlbumId)('5001')).toEqual(false);
    }));
});
