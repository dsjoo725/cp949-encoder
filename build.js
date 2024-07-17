
import esbuild from "esbuild";

const baseConfig = {
    entryPoints: ["src/index.ts"], // 컴파일할 파일
    outdir: "dist",
    bundle: true,
    sourcemap: true,
};
Promise.all([
    // 한 번은 cjs
    esbuild.build({
        ...baseConfig,
        format: "cjs",
        outExtension: {
            ".js": ".cjs",
        },
    }),
    // 한 번은 esm
    esbuild.build({
        ...baseConfig,
        format: "esm",
    }),
]).catch(() => {
    console.log("Build failed");
    process.exit(1);
});