const fs = require('fs');
const path = require('path');

// const outputOptions = ['cjs', 'esm'];

const buildPath = path.resolve(__dirname, './lib');
const srcPath = path.resolve(__dirname, './src');

const stylesFolderPath = path.join('styles');

// outputOptions.map((output) => {
//   const outputDir = path.join(buildPath, output);
//
//   fs.copyFileSync(
//     path.resolve(srcPath, styleFileName),
//     path.join(outputDir, styleFileName)
//   );
// });

const styles = fs.readdirSync(path.resolve(srcPath, stylesFolderPath));

fs.mkdirSync(path.join(buildPath, 'styles'), { recursive: true });

styles.map((style) => {
  fs.copyFileSync(
    path.resolve(srcPath, stylesFolderPath, style),
    path.join(buildPath, stylesFolderPath, style)
  );
});
