import React, { useEffect, useState } from "react";
import {
  createPortfolio,
  getPortfolioByIdOrAll,
  updatePortfolio,
} from "../services/portfolioService";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const WorkAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  let portfolioId = null;

  if (searchParams.has("id")) {
    portfolioId = searchParams.get("id");
  }

  useEffect(() => {
    const fetchPlanById = async () => {
      try {
        const data = await getPortfolioByIdOrAll(portfolioId);

        setBannerUrl(data.data.bannerUrl);
        setAboutUrl(data.data.aboutUrl);
        setImageUrl(data.data.imageUrl);
        setVideoUrl(data.data.videoUrl);
        setAbout(data.data.about);
        setTitle(data.data.title);
        setDesc(data.data.desc);
        setWorkUrl_1(data.data.workUrl_1);
        setWorkUrl_2(data.data.workUrl_2);
        setWorkUrl_3(data.data.workUrl_3);
        setWorkUrl_4(data.data.workUrl_4);
        setWorkUrl_5(data.data.workUrl_5);
        setWorkUrl_6(data.data.workUrl_6);
        setWorkUrl_7(data.data.workUrl_7);
        setWorkUrl_8(data.data.workUrl_8);
        setWorkUrl_9(data.data.workUrl_9);
        setWorkUrl_10(data.data.workUrl_10);
        setWorkUrl_11(data.data.workUrl_11);
        setWorkUrl_12(data.data.workUrl_12);
        setWorkUrl_13(data.data.workUrl_13);
        setWorkUrl_14(data.data.workUrl_14);
        setWorkUrl_15(data.data.workUrl_15);
        setWorkUrl_16(data.data.workUrl_16);
        setWorkUrl_17(data.data.workUrl_17);
        setWorkUrl_18(data.data.workUrl_18);

        console.log(data, "datadata");
      } catch (error) {
        console.error("Error fetching plan details:", error);
      }
    };

    fetchPlanById();
  }, [portfolioId]);

  const [bannerUrl, setBannerUrl] = useState("");
  const [aboutUrl, setAboutUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [about, setAbout] = useState("");
  const [error, setError] = useState("");

  const [workUrl_1, setWorkUrl_1] = useState("");
  const [workUrl_2, setWorkUrl_2] = useState("");
  const [workUrl_3, setWorkUrl_3] = useState("");
  const [workUrl_4, setWorkUrl_4] = useState("");
  const [workUrl_5, setWorkUrl_5] = useState("");
  const [workUrl_6, setWorkUrl_6] = useState("");
  const [workUrl_7, setWorkUrl_7] = useState("");
  const [workUrl_8, setWorkUrl_8] = useState("");
  const [workUrl_9, setWorkUrl_9] = useState("");
  const [workUrl_10, setWorkUrl_10] = useState("");
  const [workUrl_11, setWorkUrl_11] = useState("");
  const [workUrl_12, setWorkUrl_12] = useState("");
  const [workUrl_13, setWorkUrl_13] = useState("");
  const [workUrl_14, setWorkUrl_14] = useState("");
  const [workUrl_15, setWorkUrl_15] = useState("");
  const [workUrl_16, setWorkUrl_16] = useState("");
  const [workUrl_17, setWorkUrl_17] = useState("");
  const [workUrl_18, setWorkUrl_18] = useState("");

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // WILL REMOVE
  console.log("Title:", title);
  console.log("Desc:", desc);

  const handleSubmit = async () => {
    if (
      !title.trim() ||
      !desc.trim() ||
      !imageUrl.trim() ||
      !videoUrl.trim() ||
      !about.trim()
    ) {
      setError("All fields are required");
      alert("All fields are required");
      return;
    }

    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(imageUrl.trim())) {
      setError("Invalid Image URL. Please enter a valid URL.");
      alert("Invalid Image URL. Please enter a valid URL.");
      return;
    }
    if (!urlPattern.test(videoUrl.trim())) {
      setError("Invalid Video URL. Please enter a valid URL.");
      alert("Invalid Video URL. Please enter a valid URL.");
      return;
    }

    try {
      const portfolioData = {
        bannerUrl: bannerUrl,
        aboutUrl: aboutUrl,
        title: title,
        imageUrl: imageUrl,
        videoUrl: videoUrl,
        about: about,
        desc: desc,
        workUrl_1: workUrl_1,
        workUrl_2: workUrl_2,
        workUrl_3: workUrl_3,
        workUrl_4: workUrl_4,
        workUrl_5: workUrl_5,
        workUrl_6: workUrl_6,
        workUrl_7: workUrl_7,
        workUrl_8: workUrl_8,
        workUrl_9: workUrl_9,
        workUrl_10: workUrl_10,
        workUrl_11: workUrl_11,
        workUrl_12: workUrl_12,
        workUrl_13: workUrl_13,
        workUrl_14: workUrl_14,
        workUrl_15: workUrl_15,
        workUrl_16: workUrl_16,
        workUrl_17: workUrl_17,
        workUrl_18: workUrl_18,
      };

      if (portfolioId) {
        await updatePortfolio(portfolioId, portfolioData);
        alert("Portfolio updated successfully!");
        navigate("/WorkList");
      } else {
        await createPortfolio(portfolioData);
        alert("Portfolio Created successfully!");
        navigate("/WorkList");
      }

      setTitle("");
      setImageUrl("");
      setVideoUrl("");
      setAbout("");
      setError("");

      alert("Portfolio uploaded successfully!");
    } catch (error) {
      console.error("Error uploading portfolio:", error);
      alert("Error uploading portfolio");
    }
  };

  return (
    <div className="flex items-center h-screen">
      <Sidebar />
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="bg-white rounded-md shadow-md p-6">
          {portfolioId ? (
            <h2 className="text-xl text-black text-center font-bold m-4">
              Update Work
            </h2>
          ) : (
            <h2 className="text-xl text-black text-center font-bold m-4">
              Add Work
            </h2>
          )}

          <div
            className="w-full overflow-y-auto"
            style={{ maxHeight: "70vh", width: "70vw" }}
          >
            <div>
              <div className="mb-6">
                <div className="flex !justify-between items-center mr-5">
                  <label className="uppercase text-gray-700">
                    Banner Video Url:
                  </label>

                  <input
                    placeholder="Banner Video Url"
                    className="!w-2/5 !text-center bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={bannerUrl}
                    onChange={(e) => setBannerUrl(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>Title: </label>

                  <input
                    placeholder="Title"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={title}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>Desc: </label>

                  <input
                    placeholder="Desc"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={desc}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Image Url:{" "}
                  </label>
                  <input
                    placeholder="Image Url"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={imageUrl}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Video Url:{" "}
                  </label>
                  <input
                    placeholder="Video Url"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={videoUrl}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setVideoUrl(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    About - Text:{" "}
                  </label>
                  <input
                    placeholder="About - Text"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={about}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    About - Video URL:{" "}
                  </label>
                  <input
                    placeholder="About - Video URL"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={aboutUrl}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setAboutUrl(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 1:{" "}
                  </label>
                  <input
                    placeholder="Work -  URL 1"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_1}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_1(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 2:{" "}
                  </label>
                  <input
                    placeholder="Work -  URL 2"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_2}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_2(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 3:{" "}
                  </label>
                  <input
                    placeholder="Work -  URL 3"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_3}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_3(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 4:{" "}
                  </label>
                  <input
                    placeholder="Work -  URL 4"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_4}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_4(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 5:{" "}
                  </label>

                  <input
                    placeholder="Work -  URL 5"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_5}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_5(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 6:{" "}
                  </label>
                  <input
                    placeholder="Work -  URL 6"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_6}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_6(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 7:{" "}
                  </label>
                  <input
                    placeholder="Work -  URL 7"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_7}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_7(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 8:{" "}
                  </label>
                  <input
                    placeholder="Work -  URL 8"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_8}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_8(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 9:{" "}
                  </label>
                  <input
                    placeholder="Work -  URL 9"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_9}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_9(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 10:{" "}
                  </label>
                  <input
                    placeholder="Work -  URL 10"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_10}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_10(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 11:{" "}
                  </label>

                  <input
                    placeholder="Work -  URL 11"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_11}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_11(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 12:{" "}
                  </label>

                  <input
                    placeholder="Work -  URL 12"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_12}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_12(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 13:{" "}
                  </label>

                  <input
                    placeholder="Work -  URL 13"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_13}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_13(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 14:{" "}
                  </label>

                  <input
                    placeholder="Work -  URL 14"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_14}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_14(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 15:{" "}
                  </label>

                  <input
                    placeholder="Work -  URL 15"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_15}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_15(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 16:{" "}
                  </label>

                  <input
                    placeholder="Work -  URL 16"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_16}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_16(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 17:{" "}
                  </label>

                  <input
                    placeholder="Work -  URL 17"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_17}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_17(e.target.value)}
                  />
                </div>

                <div className="flex !justify-between items-center mr-5">
                  <label style={{ textTransform: "uppercase" }}>
                    Work - URL 18:{" "}
                  </label>
                  <input
                    placeholder="Work -  URL 18"
                    className="bg-gray-300 text-gray-700 border border-gray-400 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={workUrl_18}
                    style={{ width: "40vw", textAlign: "center" }}
                    onChange={(e) => setWorkUrl_18(e.target.value)}
                  />
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  className="mx-auto bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkAdmin;
