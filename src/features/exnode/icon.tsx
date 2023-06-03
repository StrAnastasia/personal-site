import { FC, useState } from 'react';
import MainScreenIcon from 'shared/main-screen-icon';
import Exnode from '.';
import asModal from 'shared/hooks/as-modal';
import Image from 'next/image';

const ExnodeModal = asModal(Exnode);

interface ExnodeIconProps {
  showDescription?: boolean;
  size?: string;
  footer?: boolean;
  search?: boolean;
  click: string;
  setClick: (a: string) => void;
}

const ExnodeIcon: FC<ExnodeIconProps> = ({
  showDescription = false,
  size = '',
  footer = false,
  search = false,
  click,
  setClick,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ExnodeModal title={'Exnode'} open={open} onClose={() => setOpen(false)} />

      <MainScreenIcon
        onDoubleClick={() => setOpen(true)}
        footer={footer}
        search={search}
        showDescription={showDescription}
        size={size}
        icon={
          <Image
            alt='exnodeImage'
            width={size === 'big' ? 40 : 30}
            height={size === 'big' ? 40 : 30}
            src={
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAhFBMVEVHcEwZHTAYGzAXGi8XGi8WGS4rLT4REycUFScWGS8UEBgYJ1IWMW4VGC4eP4YiTacmXMknaOctdP8IDSdBQlH////////Z2t0AABeio6rr7O9bXWr////BwcWVlpwfb/9hjfI5e//z9fp7fIWHq/+8z/8vMkSxyf8ud/8wcf+srLNdn/9378cPAAAALHRSTlMAUJfK7f8fpv/d////+f//////////Iv////z/kP/////4////////kSP/I7O1BgAAAAFvSURBVHgBhZNVdsQwFEMdeOGZoBuHO0z731+f2WX9XiWydGziyPODECAMfI/8oCgGR370lfuGJUkiLJ8/TyXKUHlRCEcaOXwHyKDYl1XdoPboaDv65vIciVGZoaGnxpHCF0OVARsopeOn81XWUAObKNcsAkAq21tHDiMVityCWW4MxSL5GqNBYfcX27vkPQPc1wyU2whl6FrwnASnx+HI+YnxQQPNS1WxqLem4WdckENAQhVQ2IbnbbtQerzyxUNzRhVQZNDTy+EmA1DKkFV6ZDHhUQVwQ2gbYr1OTUh7wAARETgND8fxpCacWhAKiG8DNkxWGlQA1vRMw+1seK85DkV0wFb3mh9xQiVCSJzohqs2jJ1JQENUqobsRI1WJv8h7uVdTpi03dE6lmtrr/ZB3JEE2tFwuXRKpB7I9xkA6y0fl2uyi4hxVMiBrYI81+nKGLMc9UqBq506xtUm7sNxr7YgpuBnRWixis3n/z7/D12RLtSp7BhYAAAAAElFTkSuQmCC'
            }
          />
        }
        description={'Exnode'}
        click={click}
        setClick={setClick}
      />
    </>
  );
};

export default ExnodeIcon;
