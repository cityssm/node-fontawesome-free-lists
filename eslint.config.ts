import configPackage, {
  defineConfig
} from 'eslint-config-cityssm/eslint.packageConfig.js'

export const config = defineConfig(configPackage, {
  files: ['**/*.ts'],
  rules: {
    '@cspell/spell-checker': 'off',
    '@typescript-eslint/no-unsafe-type-assertion': 'off',
    'max-lines': 'off',
    'require-atomic-updates': 'off',
    'security/detect-object-injection': 'off',
    'unicorn/no-await-expression-member': 'off'
  }
})

export default config
