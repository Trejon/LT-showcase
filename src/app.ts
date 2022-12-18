#!/usr/bin/env node

import axios from 'axios';
import chalk from 'chalk';
import boxen from 'boxen';

import { AlbumResponse } from './types/types';

const providedArg = process.argv.slice(2).toString();
const photoId = parseInt(providedArg);

const boxenOptions: Partial<boxen.Options> = {
    borderColor: 'green',
    backgroundColor: '#555555'
};

const colorLog = (msg: string) => {
    console.log(boxen(chalk.white.bold(msg), boxenOptions));
};

export const validatePhotoAlbumId = (photoArg: number | string) => {
    if (isNaN(photoArg as number)) {
        colorLog('Please provide a number for a valid photo album id.');
        return false;
    }

    if (photoArg > 4999 || photoArg < 0) {
        colorLog('Please confirm id and try again.');
        return false;
    }

    return photoArg;
};

export const fetchAlbum = async (albumId: number) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const { data } = await axios.get(`${baseUrl}?albumId=${albumId}`);
        if (data.length < 1) console.log('Sorry, there is nothing in this album.');
        return data.forEach((res: AlbumResponse) => colorLog(`[${res.id}] ${res.title}`));
    } catch (err) {
        if (axios.isAxiosError(err)) {
            return colorLog('There was an issue with axios...');
        } else {
            return colorLog('There seems to be an issue requesting that data...');
        }
    }
};

if (validatePhotoAlbumId(photoId)) {
    fetchAlbum(photoId);
}
