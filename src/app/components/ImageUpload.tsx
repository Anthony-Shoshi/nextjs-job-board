'use client';

import { faSpinner, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ImageUpload({ icon }: { icon: IconDefinition }) {

    const fileInputRef = useRef(null);
    const [url, setUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function upload(ev: Event) {

        const input = ev.target as HTMLInputElement;
        if (input && input.files?.length && input.files.length > 0) {
            setIsLoading(true);
            const file = input.files[0];
            const data = new FormData();
            data.set("file", file);
            const response = await axios.post("/api/upload", data);
            if (response.data.url) {
                setUrl(response.data.url);
                setIsLoading(false);
            }
        }
    }

    return (
        <>
            <div className="bg-gray-100 size-24 flex items-center justify-center">
                {isLoading && (
                    <FontAwesomeIcon className="text-grey-400 animate-spin" icon={faSpinner} />
                )}
                {!isLoading && url && (
                    <Image src={url}
                        alt={'image url'}
                        width={1024}
                        height={1024}
                        className="w-auto h-auto max-w-24 max-h-24" />
                )}
                {!isLoading && !url && (
                    <FontAwesomeIcon className="text-grey-400" icon={icon} />
                )}
            </div>
            <div className="mt-4 justify-center">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={upload}
                    hidden />
                <Button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    variant="soft">
                    Select file
                </Button>
            </div>
        </>
    );
}