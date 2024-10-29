"use client";

import React, { useEffect, useState } from "react";

const Admin = () => {
  const [videos, setVideos] = useState<VideoType[]>([]);

  useEffect(() => {
    setVideos(dammyVideos);
  }, []);

  const dammyVideos = [
    {
      id: 1,
      videoLink:
        "https://www.dmm.co.jp/litevideo/-/part/=/cid=sone00420/size=1280_720/",
      videoName:
        "出張先で軽蔑している中年セクハラ上司とまさかの相部屋に…朝まで続く絶倫性交に不覚にも感じてしまった純白マシュマロボディ新人社員水乃なのは",
      dmmLink: "https://www.dmm.co.jp/litevideo/-/detail/=/cid=sone00420/",
      genres: "OL 巨乳 寝取り・寝取られ・NTR ドラマ",
    },
    {
      id: 2,
      videoLink:
        "https://www.dmm.co.jp/litevideo/-/part/=/cid=sone00420/size=1280_720/",
      videoName:
        "出張先で軽蔑している中年セクハラ上司とまさかの相部屋に…朝まで続く絶倫性交に不覚にも感じてしまった純白マシュマロボディ新人社員水乃なのは",
      dmmLink: "https://www.dmm.co.jp/litevideo/-/detail/=/cid=sone00420/",
      genres: "OL 巨乳 寝取り・寝取られ・NTR ドラマ",
    },
  ];

  type VideoType = {
    id: number;
    videoLink: string;
    videoName: string;
    dmmLink: string;
    genres: string;
  };
  return (
    <div className="p-6 mx-auto">
      <form className="space-y-4 bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-700">動画を追加</h2>
          <a href="/" className="text-blue-500 hover:text-blue-700">
            ホームに戻る
          </a>
        </div>
        <textarea
          placeholder="Video html"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Video Name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Dmm Link"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Genre(s)"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
        >
          動画を追加
        </button>
      </form>

      <table className="min-w-full text-sm bg-white mt-8 shadow-lg rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700">
              #
            </th>
            <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700">
              Video Link
            </th>
            <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700">
              Video Name
            </th>
            <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700">
              Genre(s)
            </th>
            <th className="py-2 px-4 bg-gray-100 font-semibold text-gray-700">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video) => (
            <tr key={video.id} className="border-t">
              <td className="py-2 px-4 text-center">{video.id}</td>
              <td className="py-2 px-4 text-blue-500">
                <a
                  href={video.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </td>
              <td className="py-2 px-4">{video.videoName}</td>
              <td className="py-2 px-4">{video.genres}</td>
              <td className="py-2 px-4 flex space-x-2 justify-center">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
