import { transform } from "@svgr/core";
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "fs";
import { join, basename, extname } from "path";

const ICONS_DIR = "src/assets/icons";
const OUTPUT_DIR = "src/components/icons/generated";

// Ensure output directory exists
mkdirSync(OUTPUT_DIR, { recursive: true });

// Convert kebab-case to PascalCase
function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

// Custom SVGR template matching your format
const customTemplate = (
  { componentName, jsx }: { componentName: string; jsx: any },
  { tpl }: { tpl: any }
) => {
  return tpl`
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ${componentName}Props {
  children?: ReactNode;
  className?: string;
}

function ${componentName}({ className }: ${componentName}Props) {
  return (
    ${jsx}
  );
}

export default ${componentName};
`;
};

// SVGR configuration
const svgrConfig = {
  plugins: ["@svgr/plugin-jsx"],
  typescript: true,
  template: customTemplate,
  jsxRuntime: "automatic",
  svgProps: {
    className: `{cn("h-6 w-6 fill-current stroke-current", className)}`,
  },
  replaceAttrValues: {},
  expandProps: false,
};

// Process all SVG files
async function convertIcons() {
  const svgFiles = readdirSync(ICONS_DIR).filter(
    (file) => extname(file) === ".svg"
  );

  for (const file of svgFiles) {
    const svgContent = readFileSync(join(ICONS_DIR, file), "utf8");
    const componentName = toPascalCase(basename(file, ".svg"));

    try {
      const jsCode = await transform(svgContent, svgrConfig, { componentName });
      const outputPath = join(OUTPUT_DIR, `${componentName}.tsx`);

      writeFileSync(outputPath, jsCode);
      console.log(`✅ Generated: ${componentName}.tsx`);
    } catch (error) {
      console.error(`❌ Error converting ${file}:`, error);
    }
  }

  console.log("🎉 Icon conversion complete!");
}

convertIcons();
