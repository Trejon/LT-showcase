#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePhotoAlbumId = void 0;
const providedArg = process.argv.slice(2).toString();
const photoId = parseInt(providedArg);
const validatePhotoAlbumId = (photoArg) => {
    return true;
};
exports.validatePhotoAlbumId = validatePhotoAlbumId;
