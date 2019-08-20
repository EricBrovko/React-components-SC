// flow-typed signature: bb882bbc9f31c2dae6ee80dff2f5cdf1
// flow-typed version: c6154227d1/camelcase_v5.x.x/flow_>=v0.35.x <=v0.103.x

declare module "camelcase" {
  declare module.exports: (
    input: string | string[],
    options?: { pascalCase?: boolean }
  ) => string;
}
