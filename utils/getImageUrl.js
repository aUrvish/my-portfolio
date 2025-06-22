export const getToolsImageUrl = (url) => {
  const images = import.meta.glob("@/assets/images/tools/*", {
    eager: true,
    import: "default",
  });
  return images[url];
};

export const getImageUrl = (url) => {
  const images = import.meta.glob("@/assets/images/*", {
    eager: true,
    import: "default",
  });
  return images[url];
};
