import { useState } from "react";
import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";

const SlideButtons = ({ tempSettingsValues, setTempSettingsValues, idx }) => {
  return (
    <div
      className={`rounded-2xl w-[3.5rem] h-[1.5rem] cursor-pointer  flex items-center py-2 px-1 ${
        tempSettingsValues[idx] ? "bg-[#85FF7A] justify-end" : "bg-[#FF7A7A]"
      }`}
      onClick={() => {
        tempSettingsValues[idx]
          ? setTempSettingsValues((prev) => ({ ...prev, [idx]: false }))
          : setTempSettingsValues((prev) => ({ ...prev, [idx]: true }));
      }}
    >
      <div className="h-[1rem] w-[1rem] rounded-full bg-black" />
    </div>
  );
};

const Settings = ({
  openSettings,
  setOpenSettings,
  settingsValues,
  setSettingsValues,
}) => {
  const [tempSettingsValues, setTempSettingsValues] = useState(settingsValues);

  return (
    openSettings && (
      <div className="fixed w-screen h-screen z-40 backdrop-blur-lg text-text flex justify-center items-center">
        <div className="bg-[#1C1C1F] h-fit lg:w-2/12 w-8/12 flex p-4 flex-col items-center rounded-xl border-white/30 border-[0.1px]">
          <div className="flex flex-col justify-around w-full items-center">
            <div className="uppercase text-lg">Recommended</div>
            <div className="flex w-full justify-around my-3">
              <div
                className="bg-[#333333] p-1 px-4 rounded-lg border-white/30 border-[0.1px] cursor-pointer"
                onClick={() => {
                  setTempSettingsValues({
                    model_visibility: true,
                    smooth_scroll: true,
                    scroll_snap: false,
                  });
                }}
              >
                Mobile
              </div>
              <div
                className="bg-[#333333] p-1 px-6 rounded-lg border-white/30 border-[0.1px] cursor-pointer"
                onClick={() => {
                  setTempSettingsValues({
                    model_visibility: true,
                    smooth_scroll: true,
                    scroll_snap: true,
                  });
                }}
              >
                PC
              </div>
            </div>
          </div>
          <div className="uppercase text-xl">Settings</div>
          <div className="flex justify-between w-full items-center px-2 pt-2">
            <div className="text-red-500">3D Model(Experimental)</div>
            <SlideButtons
              tempSettingsValues={tempSettingsValues}
              setTempSettingsValues={setTempSettingsValues}
              idx={"model_visibility"}
            />
          </div>
          <div className="flex justify-between w-full items-center px-2 pt-4">
            <div>Smooth Scrolling</div>
            <SlideButtons
              tempSettingsValues={tempSettingsValues}
              setTempSettingsValues={setTempSettingsValues}
              idx={"smooth_scroll"}
            />
          </div>
          <div className="flex justify-between w-full items-center px-2 pt-4">
            <div>Scroll Snap</div>
            <SlideButtons
              tempSettingsValues={tempSettingsValues}
              setTempSettingsValues={setTempSettingsValues}
              idx={"scroll_snap"}
            />
          </div>
          <div className="flex w-full items-center px-2 pt-4 gap-x-5 justify-end">
            <div
              className="
                        bg-[#333333] p-2 px-4 rounded-lg w-4/12 text-center cursor-pointer
                        border-white/30 border-[0.1px]
                        "
              onClick={() => {
                setSettingsValues(tempSettingsValues);
                localStorage.setItem(
                  "settingsValues",
                  JSON.stringify(tempSettingsValues),
                );
                window.location.reload();
                setOpenSettings(false);
              }}
            >
              Save
            </div>
            <div
              className="bg-[#333333] p-2 px-4 rounded-lg w-4/12 text-center cursor-pointer
                        border-white/30 border-[0.1px]
                        "
              onClick={() => {
                setTempSettingsValues(settingsValues);
                setOpenSettings(false);
              }}
            >
              Cancel
            </div>
          </div>
          <div className="text-xs text-red-500 pt-2">
            Page will be refreshed after saving for better user experience
          </div>
        </div>
      </div>
    )
  );
};

export default Settings;
