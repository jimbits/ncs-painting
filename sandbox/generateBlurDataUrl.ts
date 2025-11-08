interface generateBlurDataURLProps {
  src: string;
}

const generateBlurDataUrl = (src: string) => {
  return `https://res.cloudinary.com/jimbits/image/upload/c_scale,w_10,e_blur:300,f_auto,q_auto/${src}`;
};

export default generateBlurDataUrl;
