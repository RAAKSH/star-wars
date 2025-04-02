export const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <div>
      <div className="text-2xl">Pagination Component</div>
      <div className="flex justify-center space-x-2 mt-2">
        <button
          className={`px-3 py-2 rounded-xl ${
            currentPage === 1 ? "bg-gray-300" : "bg-blue-400"
          }`}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-2 rounded-xl ${
              currentPage === page
                ? "bg-blue-950 text-white"
                : "bg-blue-700  text-white"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          className={`px-3 py-2 rounded-xl ${
            currentPage === totalPages ? "bg-gray-300" : "bg-blue-400"
          }`}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
