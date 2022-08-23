import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGifRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifRoundedW100Filled'
      short_name='Gif'

      {...props}
    >
      <path d="M12.25 14.6Q12.1 14.6 12 14.5Q11.9 14.4 11.9 14.25V9.75Q11.9 9.6 12 9.5Q12.1 9.4 12.25 9.4Q12.4 9.4 12.5 9.5Q12.6 9.6 12.6 9.75V14.25Q12.6 14.4 12.5 14.5Q12.4 14.6 12.25 14.6ZM7.2 14.6Q6.6 14.6 6.15 14.15Q5.7 13.7 5.7 13.1V10.9Q5.7 10.3 6.15 9.85Q6.6 9.4 7.2 9.4H9.55Q9.7 9.4 9.8 9.5Q9.9 9.6 9.9 9.75Q9.9 9.9 9.8 10Q9.7 10.1 9.55 10.1H7.2Q6.9 10.1 6.65 10.35Q6.4 10.6 6.4 10.9V13.1Q6.4 13.4 6.65 13.65Q6.9 13.9 7.2 13.9H8.4Q8.7 13.9 8.95 13.65Q9.2 13.4 9.2 13.1V12.55Q9.2 12.4 9.3 12.3Q9.4 12.2 9.55 12.2Q9.7 12.2 9.8 12.3Q9.9 12.4 9.9 12.525V13.1Q9.9 13.7 9.45 14.15Q9 14.6 8.4 14.6ZM14.95 14.6Q14.8 14.6 14.7 14.5Q14.6 14.4 14.6 14.25V10.15Q14.6 9.825 14.812 9.612Q15.025 9.4 15.35 9.4H17.95Q18.1 9.4 18.2 9.5Q18.3 9.6 18.3 9.75Q18.3 9.9 18.2 10Q18.1 10.1 17.95 10.1H15.3V11.7H16.95Q17.1 11.7 17.2 11.8Q17.3 11.9 17.3 12.05Q17.3 12.2 17.2 12.3Q17.1 12.4 16.95 12.4H15.3V14.25Q15.3 14.4 15.2 14.5Q15.1 14.6 14.95 14.6Z"/>
    </Icon>
  );
});

IconMaterialGifRoundedW100Filled.displayName = 'AmauiIconMaterialGifRoundedW100Filled';

export default IconMaterialGifRoundedW100Filled;
