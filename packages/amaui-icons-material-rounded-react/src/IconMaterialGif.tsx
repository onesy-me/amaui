import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGif = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Gif'

      short_name='Gif'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.25 15q-.325 0-.537-.213-.213-.212-.213-.537v-4.5q0-.325.213-.538Q11.925 9 12.25 9q.325 0 .538.212.212.213.212.538v4.5q0 .325-.212.537-.213.213-.538.213ZM6 15q-.45 0-.725-.312Q5 14.375 5 14v-4q0-.375.275-.688Q5.55 9 6 9h3.25q.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213H6.5v3h2v-.75q0-.325.213-.538Q8.925 12 9.25 12q.325 0 .538.212.212.213.212.538V14q0 .375-.275.688Q9.45 15 9 15Zm9.25 0q-.325 0-.537-.213-.213-.212-.213-.537V10q0-.425.288-.713Q15.075 9 15.5 9h2.75q.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213H16v1h1.25q.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213H16v1.25q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialGif.displayName = 'AmauiIconMaterialGif';

export default IconMaterialGif;
