import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiNature = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiNature'

      short_name='EmojiNature'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18 9-.8.7q-.35.325-.825.325t-.825-.275q-.35-.275-.475-.7-.125-.425.025-.9l.4-1.25-.85-.5q-.4-.225-.562-.65-.163-.425-.038-.85t.5-.663Q14.925 4 15.4 4h1l.3-.95q.15-.475.512-.763Q17.575 2 18 2q.425 0 .788.287.362.288.512.763l.3.95h1q.475 0 .838.237.362.238.512.663.175.45 0 .875t-.55.625l-.9.5.4 1.25q.15.475.025.912-.125.438-.475.688-.375.275-.837.275-.463 0-.813-.325Zm0-2q.425 0 .712-.287Q19 6.425 19 6t-.288-.713Q18.425 5 18 5t-.712.287Q17 5.575 17 6t.288.713Q17.575 7 18 7Zm-4.2 10.9q.575 1.5-.375 2.8-.95 1.3-2.675 1.3-.825 0-1.562-.425Q8.45 21.15 8.1 20.45q-2.075.3-3.437-1.063Q3.3 18.025 3.55 15.9q-.75-.425-1.15-1.162Q2 14 2 13.05q0-1.525 1.388-2.463Q4.775 9.65 6.1 10.2l1.55.65q.5-.775 1.325-1.263Q9.8 9.1 10.75 9.05v-1.3q0-.325.213-.537Q11.175 7 11.5 7q.325 0 .538.213.212.212.212.537v1.5q.925.275 1.525.862.6.588 1.025 1.638h1.45q.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213h-1.3q-.05.95-.512 1.775-.463.825-1.238 1.325Zm-6.2.6q0-.675.113-1.312.112-.638.337-1.238-.575.275-1.238.387-.662.113-1.312.063 0 .975.562 1.538.563.562 1.538.562Zm-1.85-4.1q.8 0 1.413-.2.612-.2 1.587-.8l-3-1.25q-.725-.3-1.237.012Q4 12.475 4 13.15q0 .65.425.95.425.3 1.325.3Zm5 5.6q.625 0 1.012-.438.388-.437.188-.912l-1.35-3.4q-.475.8-.737 1.6-.263.8-.263 1.45 0 .825.288 1.262.287.438.862.438Zm1.65-5.55q.25-.25.4-.663.15-.412.15-.862 0-.8-.525-1.35t-1.3-.55q-.45 0-.85.15-.4.15-.675.425l1.95.9Zm-4.35 1.5Z"/>
    </Icon>
  );
});

IconMaterialEmojiNature.displayName = 'AmauiIconMaterialEmojiNature';

export default IconMaterialEmojiNature;
