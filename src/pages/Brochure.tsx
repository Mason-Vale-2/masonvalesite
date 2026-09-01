import FlipBook from '../components/Book';
import CtaMenu from '../components/Cta_menu';

const Brochure: React.FC = () => {

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: '#f5f6f5',
        boxSizing: 'border-box',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <CtaMenu />
      <FlipBook />

    </div>
  );
};

export default Brochure;