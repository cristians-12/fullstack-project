import { generateUploadButton } from "@uploadthing/react";

export type OurFileRouter = {
    imageUploader: {
        config: {
            image: {
                maxFileSize: string;
                maxFileCount: number;
            };
        };
    };
};


export const UploadButton = generateUploadButton({
    url: process.env.NEXT_PUBLIC_UPLOADTHING_URL,
});