#!/usr/bin/env node

const providedArg = process.argv.slice(2).toString()
const photoId = parseInt(providedArg)
console.log(photoId)

export const validatePhotoAlbumId = (photoArg: number | string) => {
    if (isNaN(photoArg as number)) {
        console.log('Please provide a number for a valid photo album id.')
        return false
    }

    if (photoArg > 4999 || photoArg < 0) {
        console.log('Please confirm id and try again.')
        return false
    }

    return photoArg
}
