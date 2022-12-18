import axios from 'axios';

import { validatePhotoAlbumId, fetchAlbum } from '../app';

jest.mock('axios');

describe('Validating photo album ids', () => {
    test('Allows and returns a valid id', async () => {
        expect(validatePhotoAlbumId(2)).toEqual(2);
    });

    test('Returns false if id is not a number', async () => {
        expect(validatePhotoAlbumId('testId')).toEqual(false);
    });

    test("Returns false if id doesn't exist", async () => {
        expect(validatePhotoAlbumId('5001')).toEqual(false);
    });
});

describe('Testing axios', () => {
    it('Returns data for a valid id', async () => {
        const logSpy = jest.spyOn(console, 'log');
        (axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve({}));
        const data = await fetchAlbum(3);
        expect(axios.get).toHaveBeenCalled();
        expect(data).not.toBeNull();
        expect(logSpy).toBeCalled();
    });
});
