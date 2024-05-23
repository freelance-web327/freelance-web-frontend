const Rating = () => {
    return (
      <div className="mt-8 bg-white p-4 rounded-lg shadow">
        <div className="flex items-center">
          <div className="text-4xl text-green-500">4.0</div>
          <div className="ml-4">
            <div className="text-lg font-medium text-gray-900">1 rating</div>
            <div className="text-yellow-500">★ ★ ★ ★ ☆</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-sm text-gray-600">
            5 Star <span className="float-right">0%</span>
          </div>
          <div className="text-sm text-gray-600">
            4 Star <span className="float-right">100%</span>
          </div>
          <div className="text-sm text-gray-600">
            3 Star <span className="float-right">0%</span>
          </div>
          <div className="text-sm text-gray-600">
            2 Star <span className="float-right">0%</span>
          </div>
          <div className="text-sm text-gray-600">
            1 Star <span className="float-right">0%</span>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="ml-4">
              <div className="text-sm text-gray-900">Fahim</div>
              <div className="text-sm text-gray-600">4.0 - November 9, 2022</div>
              <div className="text-sm text-gray-600 mt-2">One of the best</div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h4 className="text-lg font-medium text-gray-900">Add a review</h4>
          <div className="mt-4">
            <div className="text-yellow-500 text-xl">★ ★ ★ ★ ★</div>
            <textarea
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Your Comment"
            ></textarea>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Rating;
  