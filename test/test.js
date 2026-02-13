import { describe, it } from 'node:test';
import { getIconListByStyle } from '../index.js';
await describe('fontawesome-free-lists', async () => {
    await it('should return an array of icon names for the specified style', async () => {
        const solidIcons = await getIconListByStyle('solid');
        if (!Array.isArray(solidIcons)) {
            throw new TypeError('Expected an array of icon names');
        }
        const brandsIcons = await getIconListByStyle('brands');
        if (!Array.isArray(brandsIcons)) {
            throw new TypeError('Expected an array of icon names');
        }
        const regularIcons = await getIconListByStyle('regular');
        if (!Array.isArray(regularIcons)) {
            throw new TypeError('Expected an array of icon names');
        }
    });
    await it('should return an array of icon names for the specified style and version', async () => {
        const solidIconsV5 = await getIconListByStyle('solid', '5.0.0');
        if (!Array.isArray(solidIconsV5)) {
            throw new TypeError('Expected an array of icon names');
        }
        const solidIconsV6 = await getIconListByStyle('solid', '6.0.0');
        if (!Array.isArray(solidIconsV6)) {
            throw new TypeError('Expected an array of icon names');
        }
        if (solidIconsV5.length >= solidIconsV6.length) {
            throw new Error('Expected more icons in version 6.0.0 than in version 5.0.0');
        }
    });
});
