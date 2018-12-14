import React, { useEffect, useState } from 'react';
import CloseShareMenuIcon from './CloseShareMenuIcon';
import AWS from 'aws-sdk';
import uuidv1 from 'uuid';
import { blobToFile, dataUriToBlob } from '../util/helpers';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import ShareMenuItem from './ShareMenuItem';

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
  },
  shareMenu: {
    listStyleType: 'none',
    padding: '20px 0'
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
    <ul style={styles.shareMenu}>
      <ShareMenuItem>
        <FacebookShareButton
          quote={`${props.house}: ${props.quote}`}
          hashtag="sigilz"
          url={imageUrl}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              height: '32px'
            }}
          >
            <div style={{ marginRight: '15px' }}>
              <FacebookIcon size={32} round={true} />
            </div>
            <div style={{ marginTop: '7px', width: '180px' }}>
              Share on Facebook
            </div>
          </div>
        </FacebookShareButton>
      </ShareMenuItem>
      <ShareMenuItem onClick={downloadImage}>
        <div style={{ marginTop: '7px', width: '180px' }}>Download Image</div>
      </ShareMenuItem>
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
