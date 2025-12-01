import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.Bucket("first-bucket", {
    bucket: "patriciasegantine-first-bucket",
    tags: {
        IAC: "true"
    }
});

const secondBucket = new aws.s3.Bucket("second-bucket", {
    bucket: "patriciasegantine-second-bucket",
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

export const firstBucketId = firstBucket.id;
export const firstBucketInfo = firstBucket.bucket;
export const firstBucketArn = firstBucket.arn;

export const secondBucketId = secondBucket.id;
export const secondBucketInfo = secondBucket.bucket;
export const secondBucketArn = secondBucket.arn;

export const ecrName = ecr.name;
export const ecrUrl = ecr.repositoryUrl;
