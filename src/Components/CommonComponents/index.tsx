import {  useNavigate } from "react-router-dom";
import { Pagination } from "./PaginationComponent";
import { useState } from "react";
import { TodoNotes } from "./Todo";
import { OTP } from "./OTP";
import { MultiDropDown } from "./MultiDropdown";
import { UserData } from "./ListwithPagination";
import { InfiniteScroll } from "./InfiniteScroll";
import { LikeButton } from "./LikeButton";
import { Form } from "./FormExample";
import { UserList } from "./UserListSearch";
import { Accordian } from "./Accordian";
import ChipsInput from "./ChipsInput";
import ClassComponent from "./ClassComponent";
import ErrorBoundary from "./ErrorBoundary";
import { ProgressBarComponent } from "./ProgressBar/ProgressBarComponent";
import { Tabs } from "./Tabs";
import { StarRating } from "./StarRating";
import { NavBar } from "./NavBar";
import { Giphy } from "./Giphy";

export const CommonComponents = () => {
// const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div>
        <button
          className="bg-blue-500 text-white font-semibold p-2 rounded-xl"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
      <div>
        {/* <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={5}
        /> */}
        {/* <TodoNotes />
        <LikeButton />
        <OTP digits={4}/>
        <MultiDropDown />
        <UserData />
        <InfiniteScroll />
        <Form />
        <UserList />
        <Accordian /> */}
        {/* <ChipsInput /> */}


        {/* <ClassComponent /> */}

        {/* <ProgressBarComponent /> */}

        {/* <ErrorBoundary /> */}

        {/* <Tabs /> */}
        {/* <StarRating  MaxStar={10} initalRating={2}/> */}
        {/* <NavBar /> */}
        <Giphy />
      </div>
    </div>
  );
};
