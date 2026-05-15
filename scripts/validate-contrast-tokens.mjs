import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const configPath = path.join(root, "tailwind.config.ts");
const config = await readFile(configPath, "utf8");
const tokens = extractColorTokens(config);

const pairs = [
  ["gray.900", "white", "Primary text on white"],
  ["gray.900", "gray.25", "Primary text on app background"],
  ["gray.900", "gray.50", "Primary text on subtle surface"],
  ["gray.700", "white", "Secondary text on white"],
  ["gray.700", "gray.50", "Secondary text on subtle surface"],
  ["gray.600", "white", "Muted text on white"],
  ["gray.600", "gray.50", "Muted text on subtle surface"],
  ["brand.700", "white", "Brand text/link on white"],
  ["brand.700", "brand.50", "Brand text on brand tint"],
  ["error.700", "error.50", "Error text on error tint"],
  ["warning.700", "warning.50", "Warning text on warning tint"],
  ["success.700", "success.50", "Success text on success tint"],
  ["info.700", "info.50", "Info text on info tint"],
  ["white", "brand.600", "White text on primary button"],
  ["white", "brand.700", "White text on strong brand"],
  ["white", "error.600", "White text on destructive button"],
  ["white", "error.700", "White text on strong error"],
  ["white", "success.700", "White text on strong success"],
  ["white", "info.600", "White text on info button"],
  ["white", "info.700", "White text on strong info"],
  ["white", "gray.700", "White text on dark neutral"],
  ["white", "gray.900", "White text on deepest neutral"],
];

const errors = [];

for (const [foreground, background, label] of pairs) {
  const foregroundHex = resolveToken(foreground);
  const backgroundHex = resolveToken(background);
  const ratio = contrastRatio(foregroundHex, backgroundHex);

  if (ratio < 4.5) {
    errors.push(
      `${label}: ${foreground} on ${background} is ${ratio.toFixed(
        2,
      )}:1. Expected at least 4.50:1 for normal text.`,
    );
  }
}

if (errors.length > 0) {
  console.error("Contrast token validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Contrast token validation passed: ${pairs.length} token pairs checked.`);

function extractColorTokens(source) {
  const colorBlock = extractObjectBlock(source, "colors");
  const colorTokens = {
    white: "#FFFFFF",
  };
  const groupPattern = /(\w+):\s*\{([^}]+)\}/g;
  let groupMatch;

  while ((groupMatch = groupPattern.exec(colorBlock)) !== null) {
    const [, groupName, groupBody] = groupMatch;
    const shadePattern = /(\d+):\s*"(#[0-9a-fA-F]{6})"/g;
    let shadeMatch;

    while ((shadeMatch = shadePattern.exec(groupBody)) !== null) {
      const [, shade, hex] = shadeMatch;
      colorTokens[`${groupName}.${shade}`] = hex;
    }
  }

  return colorTokens;
}

function extractObjectBlock(source, key) {
  const keyIndex = source.indexOf(`${key}:`);

  if (keyIndex === -1) {
    throw new Error(`Could not find ${key} object in tailwind.config.ts.`);
  }

  const startIndex = source.indexOf("{", keyIndex);
  let depth = 0;

  for (let index = startIndex; index < source.length; index += 1) {
    const character = source[index];

    if (character === "{") {
      depth += 1;
    }

    if (character === "}") {
      depth -= 1;

      if (depth === 0) {
        return source.slice(startIndex + 1, index);
      }
    }
  }

  throw new Error(`Could not parse ${key} object in tailwind.config.ts.`);
}

function resolveToken(token) {
  const value = tokens[token];

  if (!value) {
    throw new Error(`Missing color token: ${token}`);
  }

  return value;
}

function contrastRatio(foregroundHex, backgroundHex) {
  const foreground = relativeLuminance(hexToRgb(foregroundHex));
  const background = relativeLuminance(hexToRgb(backgroundHex));
  const lighter = Math.max(foreground, background);
  const darker = Math.min(foreground, background);

  return (lighter + 0.05) / (darker + 0.05);
}

function hexToRgb(hex) {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!match) {
    throw new Error(`Invalid hex color: ${hex}`);
  }

  return [Number.parseInt(match[1], 16), Number.parseInt(match[2], 16), Number.parseInt(match[3], 16)];
}

function relativeLuminance(rgb) {
  const [red, green, blue] = rgb.map((channel) => {
    const normalized = channel / 255;

    return normalized <= 0.03928
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}
