import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div className="p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
      <div className="bg-gray-100 rounded-lg px-2 py-1 border shadow-lg relative">
        <div style={{ width: "100%", paddingTop: "75%", position: "relative" }}>
          <iframe
            width="100%"
            height="100%"
            max-width="1280px"
            style={{ position: "absolute", top: 0, left: 0 }}
            src="https://www.dmm.co.jp/litevideo/-/part/=/cid=sone00420/size=1280_720/"
          ></iframe>
        </div>
        <div className="text-sm p-1 mt-1 mb-6">
          <h1>
            出張先で軽蔑している中年セクハラ上司とまさかの相部屋に…朝まで続く絶倫性交に不覚にも感じてしまった純白マシュマロボディ新人社員
            水乃なのは
          </h1>
          <div className="flex flex-row gap-2 mt-1">
            <span className="text-sm bg-slate-300 px-2 rounded-lg">OL</span>
            <span className="text-sm bg-slate-300 px-2 rounded-lg">巨乳</span>
            <span className="text-sm bg-slate-300 px-2 rounded-lg">
              寝取り・寝取られ・NTR
            </span>
            <span className="text-sm bg-slate-300 px-2 rounded-lg">ドラマ</span>
          </div>
          <button className="absolute right-2 bottom-0 m-1 text-blue-700 font-bold underline">
            <Link
              href="https://www.dmm.co.jp/litevideo/-/detail/=/cid=sone00420/"
              target="_blank"
            >
              詳細を見る
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
