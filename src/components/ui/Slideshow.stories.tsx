import Slideshow from "./Slideshow";

export default { component: Slideshow, title: "UI/Slideshow" };

// 1. Scan the public directory for images
const imageModules = import.meta.glob("/public/*.{png,jpg}", {
  eager: true,
  as: "url",
});

// 2. Format them to match your exact routing format (removing '/public')
const IMAGES = Object.keys(imageModules).map((path) =>
  path.replace("/public", ""),
);

// 3. Pass the automatic array to your slideshow
export const Default = () => <Slideshow images={IMAGES} />;
