import React, { useEffect, useState } from 'react';
import CloseShareMenuIcon from './CloseShareMenuIcon';
import AWS from 'aws-sdk';
import uuidv1 from 'uuid';
import { blobToFile, dataUriToBlob } from '../util/helpers';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';
import ShareMenuItem from './ShareMenuItem';
import { svgAsPngUri, saveSvgAsPng } from 'save-svg-as-png';

const headers = () => {
  return {
    'Content-Type': 'application/json',
    Accepts: 'application/json'
  };
};

const styles = {
  overlay: {
    height: '20%',
    top: 50,
    right: 50,
    left: 50,
    zIndex: 1000,
    position: 'absolute',
    justifyContent: 'center',
    padding: '15px 0',
    background: 'white',
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
    if (!mounted && props.src && !imageUrl) {
      uploadImage();
      setMount(true);
    }
  });

  const downloadImage = () => {
    uploadImage();
  };

  // convertToPng = () => {
  //   const that = this;
  //   const svg = document.querySelector('svg');
  //   console.log(svg);
  //   svgAsPngUri(svg, {}, function(uri) {
  //     that.setState({ sigilPng: uri }, () => {
  //       svgAsPngUri(svg, {}, function(uri) {
  //         console.log('this', this);
  //         console.log('that', that);
  //         console.log('that too', thatToo);
  //         console.log('the 2nd goods', uri);
  //         thatToo.setState({ sigilPng: uri, shareMenu: true });
  //       });
  //     });
  //   });
  // };

  const uploadImage = () => {
    const svg = document.querySelector('svg');
    svgAsPngUri(svg, {}, function(uri) {
      const fileBlob = dataUriToBlob(uri);
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
    });
  };

  const shareOnFacebook = () => {
    console.log(imageUrl);
    window.FB.ui(
      {
        method: 'share',
        href: imageUrl
      },
      function(response) {
        console.log(response);
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
    <React.Fragment>
      <div style={styles.shareMenu}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '32px'
          }}
        >
          <a
            href={imageUrl}
            download="sigil.png"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              height: '32px',
              width: '32px',
              color: 'rgb(146, 146, 146)'
            }}
          >
            <i className="fa fa-cloud-download fa-2x" aria-hidden="true" />
          </a>
          <div style={{ marginTop: '7px', width: '180px' }}>Download Sigil</div>
        </div>
      </div>
      <TwitterShareButton
        title={`${props.house}: ${props.quote}`}
        hashtag="#sigils.net"
        via="sigils.net"
        url={imageUrl}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            height: '32px'
          }}
        >
          <TwitterIcon size={32} round={true} />
          <div style={{ marginTop: '7px', width: '180px' }}>
            Share on Twitter
          </div>
        </div>
      </TwitterShareButton>
    </React.Fragment>
  );

  const getStyles = () => {
    const animationStyles = { ...styles.overlay };
    if (props.isOpen) {
      animationStyles.transform = 'none';
    }
    return animationStyles;
  };

  return (
    <div style={getStyles()}>
      <CloseShareMenuIcon onClick={props.onClick} />
      {renderMenuItems()}
    </div>
  );
};

export default ShareMenu;
