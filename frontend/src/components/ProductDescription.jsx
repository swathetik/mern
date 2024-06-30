import React from "react";

const ProductDescription = () => {
  return (
    <div className="m-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Care Guide
        </button>
        <button className="btn_dark_outline !rounded-none !text-xs !py-[6px] w-36">
          Size Guide
        </button>
      </div>
      <div className="flex flex-col pd-16">
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At tenetur
          quae voluptates facilis, quidem nesciunt illum deleniti vel doloribus!
          Similique assumenda tempore animi nam architecto quis labore commodi
          quia. Nam eveniet minima officiis tempore facere nobis voluptas dicta.
          Ullam ipsa voluptas, soluta nihil officiis nesciunt at necessitatibus
          voluptatibus, amet saepe illum aspernatur magni? Explicabo, animi?
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vitae
          alias aperiam repellat hic totam error? Labore totam iure ea sint vero
          libero necessitatibus quia quod ipsam itaque?
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
