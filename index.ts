import semverCompare from 'semver-compare'

import { type DataFile, iconStyles } from './types.js'

const data: Record<(typeof iconStyles)[number], DataFile | undefined> = {
  brands: undefined,
  regular: undefined,
  solid: undefined
}

/**
 * Retrieves a list of Font Awesome icon names based on the specified style and version.
 * @param style - The style of icons to retrieve (e.g., 'solid', 'regular', 'brands').
 * @param version - Optional. The version to filter icons by their minimum version. Only icons with a minimum version less than or equal to this will be included.
 * @returns An array of icon names matching the specified criteria.
 */
export async function getIconListByStyle(
  style: (typeof iconStyles)[number] = 'solid',
  version?: string
): Promise<string[]> {
  const dataFile = data[style]

  if (dataFile === undefined && iconStyles.includes(style)) {
    try {
      data[style] = (await import(`./data/${style}Icons.js`))
        .default as DataFile
    } catch (error) {
      throw new Error(`Error loading data for style "${style}": ${error}`, {
        cause: error
      })
    }
  }

  if (dataFile === undefined) {
    return []
  }

  if (version === undefined) {
    return Object.keys(dataFile)
  }

  return Object.entries(dataFile)
    .filter(([, { minVersion }]) => semverCompare(minVersion, version) <= 0)
    .map(([iconName]) => iconName)
}
