import * as aws from "@pulumi/aws";

const bucket = new aws.s3.Bucket("first-bucket", {
    bucket: "patriciasegantine-first-bucket",
    tags: {
        IAC: "true"
    }
});


const ecr = new aws.ecr.Repository("first-ecr", {
    name: "patriciasegantine-first-ecr",
    imageTagMutability: "IMMUTABLE",
    imageScanningConfiguration: {
        scanOnPush: true
    },
    tags: {
        IAC: "true"
    }
});

export const bucketId = bucket.id;
export const bucketInfo = bucket.bucket;
export const bucketArn = bucket.arn;

export const ecrName = ecr.name;
export const ecrUrl = ecr.repositoryUrl;
