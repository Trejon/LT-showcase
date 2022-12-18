#!/usr/bin/env node

import axios from 'axios';
import chalk from 'chalk';
import boxen from 'boxen';

const providedArg = process.argv.slice(2).toString();
const photoId = parseInt(providedArg);

export const validatePhotoAlbumId = (photoArg: number | string) => {
    if (isNaN(photoArg as number)) {
        console.log('Please provide a number for a valid photo album id.');
        return false;
    }

    if (photoArg > 4999 || photoArg < 0) {
        console.log('Please confirm id and try again.');
        return false;
    }

    return photoArg;
};

const boxenOptions: Partial<boxen.Options> = {
    borderColor: 'green',
    backgroundColor: '#555555'
};

const colorOutput = (msg: string) => {
    console.log(boxen(chalk.white.bold(msg), boxenOptions));
};

type AlbumResponse = {
    albumId: number;
    id: number;
    thumbnailUrl: string;
    title: string;
    url: string;
};

export const fetchAlbum = async (albumId: number) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const { data } = await axios.get(`${baseUrl}?albumId=${albumId}`);
        data.forEach((res: AlbumResponse) => colorOutput(`[${res.id}] ${res.title}`));
    } catch (err) {
        if (axios.isAxiosError(err)) {
            colorOutput('There was an issue with axios.');
        } else {
            colorOutput('There seems to be an issue requesting that data...');
        }
    }
};

if (validatePhotoAlbumId(photoId)) {
    fetchAlbum(photoId);
}
