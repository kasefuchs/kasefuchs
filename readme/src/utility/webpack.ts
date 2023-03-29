export function isWebpack(): boolean {
  return !require.main?.children?.length;
}
