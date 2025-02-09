import { getDefaultConfig } from "metro-config";

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"), // If using SVGs
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"), // If using SVGs
      sourceExts: [...sourceExts, "svg", "ts", "tsx"], // Add ts and tsx
    },
  };
})();


