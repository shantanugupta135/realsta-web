import React from 'react';

type Props = {
  mapHtml: string;
};

const MapEmbed: React.FC<Props> = ({ mapHtml }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: mapHtml }}
      style={{ width: '100%', overflow: 'hidden', marginTop:'2rem' }}
    />
  );
};

export default MapEmbed;