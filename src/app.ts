#!/usr/bin/env node

const providedArg = process.argv.slice(2).toString();
const photoId = parseInt(providedArg);

export const validatePhotoAlbumId = (photoArg: string | number) => {
  return true;
};
