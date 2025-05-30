// import { colors } from '../tokens/colors';
// import { spacing } from '../tokens/spacing';
// import { fontSizes, fontWeights, lineHeights, fonts } from '../tokens/typography';

// // Helper para camelCase para kebab-case (necessário para CSS Custom Properties)
// const camelToKebabCase = (str: string) => str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

// export function generateCssVariables(): string {
//   let cssVariables = ':root {\n';

//   // Cores
//   for (const [key, value] of Object.entries(colors)) {
//     // Apenas para cores que são valores CSS válidos (exclui gradient se não for para uma variável)
//     if (typeof value === 'string' && !key.includes('gradient')) {
//       cssVariables += `  --color-${camelToKebabCase(key)}: ${value};\n`;
//     }
//   }

//   // Espaçamento
//   for (const [key, value] of Object.entries(spacing)) {
//     cssVariables += `  --spacing-${camelToKebabCase(key)}: ${value};\n`;
//   }

//   // Tipografia - Fontes (se tiver mais de uma)
//   for (const [key, value] of Object.entries(fonts)) {
//     cssVariables += `  --font-${camelToKebabCase(key)}: ${value};\n`;
//   }

//   // Tipografia - Tamanhos de Fonte
//   for (const [key, value] of Object.entries(fontSizes)) {
//     cssVariables += `  --font-size-${camelToKebabCase(key)}: ${value};\n`;
//   }

//   // Tipografia - Pesos de Fonte
//   for (const [key, value] of Object.entries(fontWeights)) {
//     cssVariables += `  --font-weight-${camelToKebabCase(key)}: ${value};\n`;
//   }

//   // Tipografia - Alturas de Linha
//   for (const [key, value] of Object.entries(lineHeights)) {
//     cssVariables += `  --line-height-${camelToKebabCase(key)}: ${value};\n`;
//   }

//   cssVariables += '}\n';
//   return cssVariables;
// }