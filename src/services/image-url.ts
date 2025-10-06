const getCroppedImageUrl = (url: string | null | undefined) => {
  if (!url) return ""; // or placeholder image URL

  const target = "media/";
  const index = url.indexOf(target);

  if (index === -1) return url;

  const insertPos = index + target.length;
  return url.slice(0, insertPos) + "crop/600/400/" + url.slice(insertPos);
};

export default getCroppedImageUrl;
