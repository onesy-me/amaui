import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEmojiSymbolsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmojiSymbolsW100Filled'

      short_name='EmojiSymbols'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 3.85v-.7h6.7v.7Zm3 6.5v-4.8h-3v-.7h6.7v.7h-3v4.8ZM13.7 20.7l-.5-.5 6.9-6.9.5.5Zm.8-5.2q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713q.287-.287.712-.287t.713.287q.287.288.287.713t-.287.712q-.288.288-.713.288Zm5 5q-.425 0-.712-.288-.288-.287-.288-.712t.288-.712q.287-.288.712-.288t.712.288q.288.287.288.712t-.288.712q-.287.288-.712.288Zm-3.9-10.15q-.75 0-1.25-.5t-.5-1.25q0-.75.5-1.25t1.25-.5q.3 0 .563.075.262.075.487.275V2.65h3.7v.7h-3V8.6q0 .75-.5 1.25t-1.25.5ZM5.425 21.375q-.75 0-1.313-.563-.562-.562-.562-1.312 0-.35.175-.712.175-.363.475-.638l1.5-1.45-.8-.825q-.275-.275-.412-.637-.138-.363-.138-.738 0-.75.55-1.275.55-.525 1.3-.525.8 0 1.325.5.525.5.525 1.3 0 .375-.125.738-.125.362-.4.637L6.7 16.7l1.6 1.6 1.4-1.4.5.5-1.375 1.375L10.2 20.15l-.5.5-1.375-1.375-1.5 1.5q-.3.3-.662.45-.363.15-.738.15ZM6.2 16.2l.825-.825q.2-.2.263-.375.062-.175.062-.45 0-.525-.35-.838-.35-.312-.8-.312-.425 0-.787.312-.363.313-.363.838 0 .275.088.462.087.188.262.363Zm-.775 4.475q.225 0 .463-.075.237-.075.437-.275l1.5-1.5L6.2 17.2l-1.525 1.475q-.2.2-.312.4-.113.2-.113.425 0 .45.363.812.362.363.812.363Z"/>
    </Icon>
  );
});

IconMaterialEmojiSymbolsW100Filled.displayName = 'AmauiIconMaterialEmojiSymbolsW100Filled';

export default IconMaterialEmojiSymbolsW100Filled;
