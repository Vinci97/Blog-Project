export const prefetchImages = (urls) => {
    urls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  };
  