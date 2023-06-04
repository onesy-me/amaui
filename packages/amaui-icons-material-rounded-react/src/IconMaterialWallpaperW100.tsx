import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWallpaperW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WallpaperW100'

      short_name='Wallpaper'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.25 9.75q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713q.287-.287.712-.287t.713.287q.287.288.287.713t-.287.712q-.288.288-.713.288ZM4.65 11q-.15 0-.25-.1t-.1-.25V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h4.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.8q-.3 0-.55.25Q5 5.5 5 5.8v4.85q0 .15-.1.25t-.25.1Zm1.15 8.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2v-4.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.85q0 .3.25.55.25.25.55.25h4.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM19.35 11q-.15 0-.25-.1t-.1-.25V5.8q0-.3-.25-.55Q18.5 5 18.2 5h-4.85q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.85q.65 0 1.075.425.425.425.425 1.075v4.85q0 .15-.1.25t-.25.1Zm-6 8.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.85q.3 0 .55-.25.25-.25.25-.55v-4.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.85q0 .65-.425 1.075-.425.425-1.075.425Zm-4.6-3.35q-.25 0-.35-.225-.1-.225.05-.425l.85-1.1q.125-.15.313-.162.187-.013.312.137L11.2 16.05l2.175-2.7q.125-.15.313-.15.187 0 .312.15l1.775 2.35q.15.2.037.425-.112.225-.362.225Z"/>
    </Icon>
  );
});

IconMaterialWallpaperW100.displayName = 'AmauiIconMaterialWallpaperW100';

export default IconMaterialWallpaperW100;
