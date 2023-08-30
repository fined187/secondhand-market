import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

export const ImageUpload = ({
  onChange,
  value,
}: ImageUploadProps) => {
  const handleUpload = (result: any) => {
    console.log(result);
    onChange(result.info.secure_url);
  };
  
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  return (
    <>
      <CldUploadWidget
        onUpload={handleUpload}
        uploadPreset={uploadPreset}
        options={
          {
            maxFiles: 1,
          }
        }
      >
        {({open}) => {
          return (
            <div
              onClick={() => open?.()}
              className="
              relative
              flex flex-col
              items-center
              justify-center
              gap-4
              p-20
              transition
              border-2
              border-dashed
              cursor-pointer
              hover:opacity-70
              border-nuetral-300
              text-nuetral-300
              "
            >
              <TbPhotoPlus 
                size={50}
              />
              {value && (
                <div
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                  "
                >
                  <Image 
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                    src={value}
                    alt=""
                  />
                </div>
              )}
            </div>
          )
        }}
      </CldUploadWidget>
    </>
  )
}