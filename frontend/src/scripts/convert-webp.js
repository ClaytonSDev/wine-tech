import imagemin from "imagemin";
import webp from "imagemin-webp";

(async () => {
  await imagemin(["src/assets/**/*.{jpg,jpeg,png}"], {
    destination: "src/assets-webp",
    plugins: [webp({ quality: 75 })],
  });

  console.log("✅ Imagens convertidas para .webp com sucesso!");
})();
