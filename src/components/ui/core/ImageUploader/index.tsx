import React, { useState } from "react";
import { Input } from "../../input";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";

const ImageUploader = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImageFiles((prev) => [...prev, file]);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
    event.target.value = "";
  };
  console.log(imageFiles);
  return (
    <div className="w-full">
      {/* Hidden Input */}
      <Input
        onChange={handleImageChange}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        id="image-upload"
      />

      {/* Beautiful Upload Box */}
      <label
        htmlFor="image-upload"
        className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-xl p-2
        bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer shadow-sm hover:shadow-md"
      >
        <ImageIcon className="w-12 h-12 text-gray-500 mb-3" />
        <p className="text-lg font-medium text-gray-700">
          Click to Upload Images
        </p>
        <span className="text-sm text-gray-500 mt-2">
          Supported: JPG, PNG, JPEG
        </span>
      </label>

      {imagePreview.map((item, index) => (
        <Image key={index} src={item} width={200} height={200} alt="preview" />
      ))}
    </div>
  );
};

export default ImageUploader;
