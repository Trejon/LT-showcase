#!/usr/bin/env node

const providedArg = process.argv.slice(2).toString()
const photoId = parseInt(providedArg)
console.log(photoId)

export const validatePhotoAlbumId = (photoArg: string | number) => {
    return true
}
