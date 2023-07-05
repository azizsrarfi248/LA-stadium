import ModalLayout from "@/layouts/modal-layout";

const StadiumSize = ({ addNewModel, setAddNewModel }) => {
  return (
    <ModalLayout
      className="w-[1000px] h-[630px] relative bg-current"
      isOpen={addNewModel}
      setIsOpen={setAddNewModel}
    >
      <div className="flex items-center gap-10 justify-center">
        <div className="card w-96 h-[500px] bg-white shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/terrain.jpg" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title">Grand Terrain</h2>
            <p>jib 10 w goal w ija kawer</p>
            <div className="card-actions">
              <button className="btn btn-primary">choose</button>
            </div>
          </div>
        </div>
        <div className="card w-96 h-[500px] bg-white shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="/terrain.jpg"
              alt="Shoes"
              className="rounded-xl w-40 h-60"
            />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title pt-9g">petit Terrain</h2>
            <p>jib 6 w goal w ija kawer</p>
            <div className="card-actions">
              <button className="btn btn-primary">choose</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center pt-6">
        <button
          className="btn btn-circle bottom-6"
          onClick={() => setAddNewModel(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </ModalLayout>
  );
};

export default StadiumSize;
