import {MouseEventHandler, useState} from 'react';

export const Nav = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const Links = ({
    closeModal,
  }: {
    closeModal: MouseEventHandler<HTMLAnchorElement>;
  }) => (
    <>
      <a href="docs/index.html" onClick={closeModal}>
        Docs
      </a>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a href="http://github.com/umeshmk/react-schematic" onClick={closeModal}>
        Github
      </a>
    </>
  );

  return (
    <nav>
      {!modal && (
        <div className="bars" onClick={openModal}>
          |||
        </div>
      )}

      {modal && (
        <div className="modal-xs">
          <Links closeModal={closeModal} />
        </div>
      )}
      <div className="links-md">
        <Links closeModal={closeModal} />
      </div>
      {modal && (
        <div className="close" onClick={closeModal}>
          x
        </div>
      )}
    </nav>
  );
};
