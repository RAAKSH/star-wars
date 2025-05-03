import { useNavigate } from "react-router-dom";
import { Pagination } from "./PaginationComponent";
import { useState } from "react";
import { TodoNotes } from "./Todo";
import { OTP } from "./OTP";
import { MultiDropDown } from "./MultiDropdown";
import { UserData } from "./ListwithPagination";
import { InfiniteScroll } from "./InfiniteScroll";
import { LikeButton } from "./LikeButton";

export const CommonComponents = () => {
const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="flex justify-start p-4">
        <button
          className="bg-blue-500 text-white font-semibold p-2 rounded-xl"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
      <div className="flex flex-col justify-start items-start m-3 px-0">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={5}
        />
        <TodoNotes />
        <LikeButton />
        <OTP digits={4}/>
        <MultiDropDown />
        {/* <UserData /> */}
        <InfiniteScroll />
      </div>
    </div>
  );
};
