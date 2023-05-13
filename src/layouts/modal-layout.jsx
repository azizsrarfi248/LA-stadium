const ModalLayout = ({ children, isOpen, setOpen, className }) => {
  return (
    <>
      <input
        type="checkbox"
        id="my-modal-5"
        className="modal-toggle"
        checked={isOpen}
        onChange={(e) => setOpen(e.target.checked)}
      />
      <div className="modal">
        <div
          className={`modal-box max-w-full max-h-full h-[625px] w-[900px] ${className}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalLayout;
