import { validatePhotoAlbumId } from '../app';

describe('Validate photo album ids', () => {
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
