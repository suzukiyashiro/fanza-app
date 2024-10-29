"use client";

import apiClient from "@/lib/apiClient";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [videoHTML, setVideoHTML] = useState<string>("");
  const [videoName, setVideoName] = useState<string>("");
  const [dmmLink, setDmmLink] = useState<string>("");
  const [genres, setGenres] = useState<string>("");

  type VideoType = {
    id: number;
    videoLink: string;
    videoName: string;
    dmmLink: string;
    genres: string;
  };

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const res = await apiClient.get("/");
      setVideos(res.data);
    } catch (error) {
      console.error({ err: error });
    }
  };

  const handleAddVideo = async () => {
    try {
      await apiClient.post("/", {
        videoHTML,
        videoName,
        dmmLink,
        genres,
      });
      getVideos()
    } catch (error) {
      console.error({ err: error });
    }
  };

  const handleDeleteVideo = async (id: number) => {
    try {
      if (window.confirm("本当に削除しますか？")) {
        await apiClient.delete(`/${id}`);
        getVideos()
      }
    } catch (error) {
      console.error({ err: error });
    }
  };

  return (
    <div className="p-6 mx-auto">
      <form className="space-y-4 bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-700">動画を追加</h2>
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            ホームに戻る
          </Link>
        </div>
        <textarea
          placeholder="Video html"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={videoHTML}
          onChange={(e) => setVideoHTML(e.target.value)}
        />
        <input
          type="text"
          placeholder="Video Name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={videoName}
          onChange={(e) => setVideoName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dmm Link"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={dmmLink}
          onChange={(e) => setDmmLink(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre(s)"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleAddVideo}
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
                <button onClick={() => handleDeleteVideo(video.id)}>
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
                      fillRule="evenodd"
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
