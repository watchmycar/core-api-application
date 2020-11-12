import * as tsConfig from 'tsconfig-paths'

// to do: use config from tsconfig.json
const baseUrl =  "./dist"
const paths = {
  "@src/*": ["/*"],
  "@controllers/*": ["controllers/*"],
  "@database/*": ["database/*"],
  "@libs/*": ["libs/*"],
  "@middlewares/*": ["middlewares/*"],
  "@models/*": ["models/*"],
  "@repositories/*": ["repositories/*"],
  "@routes/*": ["routes/*"],
  "@schemas/*": ["schemas/*"],
  "@services/*": ["services/*"],
  "@interfaces/*": ["interfaces/*"],
  "@config/*": ["config/*"]
}

export const registerTsFiles = function () {
  tsConfig.register({
    baseUrl,
    paths,
  })
}
