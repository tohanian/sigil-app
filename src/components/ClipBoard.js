import React, { useState } from 'react';
import * as icons from '../icons/animals';

const OptionSet = props => {
  const optionSets = {
    sigilOptions: <SigilOptions {...props} />,
    bannerOptions: <BannerOptions {...props} />,
    textOptions: <TextOptions {...props} />
  };
  if (props.optionSet) {
    return optionSets[props.optionSet];
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <SigilOptions {...props} />
    </div>
  );
};

const SigilOptions = props => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Object.keys(icons).map((icon, i) => {
      const C = icons[icon];

      return (
        <div
          value={icon}
          name={icon}
          onClick={props.onClick}
          key={i}
          style={{ padding: 12 }}
        >
          <C
            onClick={props.onClick}
            name={icon}
            key={i}
            value={icon}
            index={i}
            size="25"
            foregroundColor="black"
          />
        </div>
      );
    })}
  </div>
);

const BannerOptions = props => <div>Banner Options</div>;

const TextOptions = props => <div>Text Options</div>;

const Selectors = props => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div
        style={{
          width: '20px',
          margin: '10px'
        }}
        onClick={props.onClick('previous')}
      >
        {props.option === 'sigilOptions' ? null : (
          <i className="fa fa-chevron-left" aria-hidden="true" />
        )}
      </div>
      <div
        style={{
          width: '20px',
          margin: '10px'
        }}
        onClick={props.onClick('next')}
      >
        <i className="fa fa-chevron-right" aria-hidden="true" />
      </div>
    </div>
  );
};

const ClipBoard = props => {
  const [option, setOption] = useState('sigilOptions');

  const selectorOnClick = selection => () => {
    switch (option) {
      case 'sigilOptions':
        if (selection === 'next') {
          setOption('bannerOptions');
        }
        break;
      case 'bannerOptions':
        if (selection === 'previous') {
          setOption('sigilOptions');
        } else {
          setOption('textOptions');
        }
        break;
      case 'textOptions':
        if (selection === 'previous') {
          setOption('bannerOptions');
        }
        break;
      default:
        break;
    }
  };

  return (
    <div style={cell}>
      <Selectors onClick={selectorOnClick} option={option} />
      <OptionSet {...props} optionSet={option} />
    </div>
  );
};

const cell = {
  borderRadius: 4,
  background: 'lightgrey',
  alignItems: 'center',
  width: '100%'
};

export default ClipBoard;
