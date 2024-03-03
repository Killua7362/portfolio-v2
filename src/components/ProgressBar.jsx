import { useState } from "react";
import { FcSettings } from "react-icons/fc";
import Settings from "./Settings";

const ProgressBar = ({ sectionNum, setOpenSettings, settingsValues }) => {
  const arr = ["About", "Skills", "Experience"];

  const [activeModal, setActiveModal] = useState(false);

  return (
    <div
      className={`fixed z-30 w-full h-[4rem] flex ${
        sectionNum === 0 || !settingsValues["scroll_snap"]
          ? "justify-end pr-10"
          : "justify-center"
      }   bg-[#222222]`}
    >
      <div className="flex justify-center items-center lg:gap-10 gap-2">
        {settingsValues["scroll_snap"] && (
          <>
            {arr.map((ele, i) => {
              if (sectionNum === 0) {
                return <></>;
              } else {
                return (
                  <>
                    <div
                      className={`${
                        i + 1 === sectionNum
                          ? "text-text text-base lg:text-3xl"
                          : "text-gray-500 text-sm lg:text-2xl"
                      } `}
                    >
                      {ele}
                    </div>
                    <div
                      className={`h-[1px] ${
                        i + 1 === sectionNum ? "bg-white" : "bg-gray-500"
                      } lg:w-16 w-4`}
                    />
                  </>
                );
              }
            })}
            {sectionNum !== 0 && (
              <div
                className={`${
                  sectionNum === 4
                    ? "text-text lg:text-3xl text-base"
                    : "text-gray-500 lg:text-2xl text-sm"
                } `}
              >
                Projects
              </div>
            )}
          </>
        )}
        <div className="flex text-text items-center gap-x-4">
          {(!settingsValues["scroll_snap"] || sectionNum == 0) && <span className="text-xl font-semibold uppercase">
            Killua's Den
          </span>}
          <FcSettings
            className="lg:text-3xl text-base cursor-pointer"
            onClick={() => setOpenSettings(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
