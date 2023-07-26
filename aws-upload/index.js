const sharp = require('sharp');
const { S3Client, GetObjectCommand, PutObjectCommand } = require('@aws-sdk/client-s3');

const s3 = new S3Client(); // ()이여도 Lambda가 알아서 secret key를 넣어줌

// 고양이.png
// %CD%AE%AW.png
exports.handler = async (event, context, callback) => { // Lambda는 세 개의 매개변수를 제공해서 handler라는 함수를 호출해줌
    const Bucket = event.Records[0].s3.bucket.name;
    const Key = decodeURIComponent(event.Records[0].s3.object.key); // decodeURI로 복원, original/고양이.png
    const filename = Key.split('/').at(-1);
    const ext = Key.split('.').at(-1).toLowerCase();
    const requiredFormat = ext === 'jpg' ? 'jpeg' : ext;    // sharp에서는 확장자가 jpg면 jpeg로 변경해줘야함
    console.log('name', filename, 'ext', ext);

    try {
        const getObject = await s3.send(new GetObjectCommand({ Bucket, Key }));
        const buffers = [];
        for await (const data of getObject.Body) {
            buffers.push(data);
        }
        const imageBuffer = Buffer.concat(buffers);
        console.log('put', imageBuffer.length);
        const resizedImage = await sharp(imageBuffer)
            .resize(200, 200, { fit: 'inside' })    // 최대 size 200 200, 비율 유지하면서 꽉차게끔
            .toFormat(requiredFormat)
            .toBuffer();
        await s3.send(new PutObjectCommand({
            Bucket,
            Key: `thumb/${filename}`, // thumb/고양이.png
            Body: resizedImage,
        }))
        console.log('put', resizedImage.length);
        return callback(null, `thumb/${filename}`);
    } catch (error) {
        console.error(error);
        return callback(error);
    }
}