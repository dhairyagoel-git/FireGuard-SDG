import React from "react";
import {
  FireLocationInput,
  FireDetailsInput,
  FireImageUpload,
  SubmitFireReport,
} from "./ReportFireComponents";

export function ReportFire() {
  return (
    <>
      <div className=" bg-gray-100 flex flex-col items-center py-10 px-4">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          🔥 Report a Fire Incident
        </h1>
        {/* Description */}
        <p className="text-gray-700 text-center max-w-2xl">
          Help keep your community safe by reporting fire incidents immediately.
          Provide details about the fire location, severity, and any additional
          information to assist emergency responders.
        </p>{" "}
        <br />
        <form
          action=""
          className="bg-white shadow-md w-48/100 flex flex-col items-center"
        >
          <FireLocationInput />
          <FireDetailsInput />
          <FireImageUpload />
          <SubmitFireReport />
        </form>
      </div>
    </>
  );
}
