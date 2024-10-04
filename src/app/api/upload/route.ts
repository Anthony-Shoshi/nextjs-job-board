import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextRequest } from "next/server";
import { uniqid } from "uniqid";

export async function POST(req: NextRequest) {
    const data = await req.formData();
    const file = data.get('file') as File;

    const s3Client = new S3Client({
        region: 'eu-north-1',
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY as string,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string
        }
    });

    const newFileName = Date.now() + '-' + file.name;

    //blob
    const chunks = [];
    // @ts-ignore
    for await (const chunk of file.stream()) {
        chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    const bucketName = 'job-board';

    await s3Client.send(new PutObjectCommand({
        Bucket: bucketName,
        Key: newFileName,
        ACL: 'public-read',
        Body: buffer,
        ContentType: file.type
    }));

    return Response.json({
        newFileName,
        'url': `https://${bucketName}.s3.amazonaws.com/${newFileName}`
    });

} 