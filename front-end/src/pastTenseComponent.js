const PastTenseComponent = (props) => {
    return(
  <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
      <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold mb-3">{props.title}</h3>
        <p className="mb-4">{props.description}</p>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          // onClick={() => startLearning('Grammar')}
        >
          {props.buttonText}
        </button>
      </div>
      {/* Add more grid items here if needed */}
    </div>
  </div>);
};
export default PastTenseComponent;


