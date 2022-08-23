import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGifRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GifRounded'
      short_name='Gif'

      {...props}
    >
      <path d="M12.25 15Q11.925 15 11.713 14.787Q11.5 14.575 11.5 14.25V9.75Q11.5 9.425 11.713 9.212Q11.925 9 12.25 9Q12.575 9 12.788 9.212Q13 9.425 13 9.75V14.25Q13 14.575 12.788 14.787Q12.575 15 12.25 15ZM6 15Q5.55 15 5.275 14.688Q5 14.375 5 14V10Q5 9.625 5.275 9.312Q5.55 9 6 9H9.25Q9.575 9 9.788 9.212Q10 9.425 10 9.75Q10 10.075 9.788 10.287Q9.575 10.5 9.25 10.5H6.5Q6.5 10.5 6.5 10.5Q6.5 10.5 6.5 10.5V13.5Q6.5 13.5 6.5 13.5Q6.5 13.5 6.5 13.5H8.5Q8.5 13.5 8.5 13.5Q8.5 13.5 8.5 13.5V12.75Q8.5 12.425 8.713 12.212Q8.925 12 9.25 12Q9.575 12 9.788 12.212Q10 12.425 10 12.75V14Q10 14.375 9.725 14.688Q9.45 15 9 15ZM15.25 15Q14.925 15 14.713 14.787Q14.5 14.575 14.5 14.25V10Q14.5 9.575 14.788 9.287Q15.075 9 15.5 9H18.25Q18.575 9 18.788 9.212Q19 9.425 19 9.75Q19 10.075 18.788 10.287Q18.575 10.5 18.25 10.5H16V11.5H17.25Q17.575 11.5 17.788 11.712Q18 11.925 18 12.25Q18 12.575 17.788 12.787Q17.575 13 17.25 13H16V14.25Q16 14.575 15.788 14.787Q15.575 15 15.25 15Z"/>
    </Icon>
  );
});

IconMaterialGifRounded.displayName = 'AmauiIconMaterialGifRounded';

export default IconMaterialGifRounded;
