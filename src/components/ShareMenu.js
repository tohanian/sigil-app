import React, { useEffect, useState } from 'react';
import CloseShareMenuIcon from './CloseShareMenuIcon';
import AWS from 'aws-sdk';
import uuidv1 from 'uuid';
import { blobToFile, dataUriToBlob } from '../util/helpers';
import { FacebookShareButton } from 'react-share';

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
  const [mounted, setMount] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!mounted && !imageUrl) {
      uploadImage();
      setMount(true);
      console.log(mounted);
    }
  });

  const downloadImage = () => {
    uploadImage();
  };

  console.log(mounted);

  const uploadImage = () => {
    const fileBlob = dataUriToBlob(props.src);
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
      (uploadError, _) => {
        if (!uploadError) {
          setImageUrl(_.Location);
        } else {
        }
      }
    );
  };

  const renderMenuItems = () => {
    // TODO: add spinner here
    if (!imageUrl && !error) {
      return <span>Loading...</span>;
    } else if (imageUrl && !error) {
      return menuItems();
    }
    return <span>Sorry, the share menu is not available right now.</span>;
  };

  const menuItems = () => (
    <ul>
      <li>
        <FacebookShareButton
          quote={`${props.house}: ${props.quote}`}
          hashtag="sigilz"
          url={imageUrl}
        >
          <span>Share on Facebook</span>
        </FacebookShareButton>
      </li>
      <li onClick={downloadImage}>Download Image</li>
    </ul>
  );

  return (
    <div style={styles.overlay}>
      <CloseShareMenuIcon onClick={props.onClick} />
      <div>
        <img width="200" height="200" alt="" src={props.src} />
        {renderMenuItems()}
      </div>
    </div>
  );
};

export default ShareMenu;
