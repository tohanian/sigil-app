import React from 'react';
import CloseShareMenuIcon from './CloseShareMenuIcon';
import AWS from 'aws-sdk';
import uuidv1 from 'uuid';
import { blobToFile, dataUriToBlob } from '../util/helpers';

const styles = {
  overlay: {
    height: '100%',
    top: 30,
    right: 30,
    left: 30,
    bottom: 0,
    zIndex: 1000,
    position: 'absolute',
    justifyContent: 'center',
    padding: '30px 0',
    background: 'lightgrey',
    boxShadow: `0 2px 4px 0 rgba(0,0,0,0.15)`
  }
};

const awsConfig = {
  albumBucketName: 'sigil-app',
  bucketRegion: 'us-east-1',
  IdentityPoolId: 'us-east-1:0a5fd32c-50ce-479d-b278-a1ded6e5f3df'
};

const ShareMenu = props => {
  const downloadImage = () => {
    uploadImage();
  };

  const uploadImage = () => {
    const fileBlob = dataUriTSoBlob(props.src);
    const myFile = blobToFile(fileBlob, 'my-image.png');

    AWS.config.update({
      region: awsConfig.bucketRegion,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: awsConfig.IdentityPoolId
      })
    });

    const s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      params: { Bucket: awsConfig.albumBucketName },
      correctClockSkew: true
    });

    s3.upload(
      {
        Key: `${uuidv1()}.png`,
        Body: myFile,
        Bucket: awsConfig.albumBucketName,
        ACL: 'public-read-write'
      },
      (error, _) => {
        // TODO: add success/error handling
      }
    );
  };

  return (
    <div style={styles.overlay}>
      <CloseShareMenuIcon onClick={props.onClick} />
      <div>
        <ul>
          <li>Share on FB</li>
          <li onClick={downloadImage}>Download Image</li>
        </ul>
      </div>
      <img width="200" height="200" alt="" src={props.src} />
    </div>
  );
};

export default ShareMenu;
