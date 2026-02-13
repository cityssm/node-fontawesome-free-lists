import { iconStyles } from './types.js';
/**
 * Retrieves a list of Font Awesome icon names based on the specified style and version.
 * @param style - The style of icons to retrieve (e.g., 'solid', 'regular', 'brands').
 * @param version - Optional. The version to filter icons by their minimum version. Only icons with a minimum version less than or equal to this will be included.
 * @returns An array of icon names matching the specified criteria.
 */
export declare function getIconListByStyle(style?: (typeof iconStyles)[number], version?: string): Promise<string[]>;
