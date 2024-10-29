const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("hello world");
});

// videoの投稿
app.post("/api/video", async (req, res) => {
  try {
    const { videoLink, videoName, dmmLink, genres } = req.body;
    // const { videoHTML, videoName, dmmLink, genres } = req.body;

    /*
      src=" は、src属性の開始部分を示します。
      ([^"]+) は、"（ダブルクオーテーション）以外の文字が1回以上続く部分をキャプチャします。
      これにより、src属性の値（URL）が取得されます。
      最後の " は、src属性の終了部分を示します。
     */
    // const srcRegex = /src="([^"]+)"/; // src="https://www.dmm.co.jp/litevideo/-/part/=/cid=sone00420/size=1280_720/"
    // const videoLink = videoHTML.match(srcRegex);

    if (!videoLink) {
      return res.status(404).json({ err: "リンクがありません" });
    }

    const newVideo = await prisma.video.create({
      data: {
        videoLink,
        videoName,
        dmmLink,
        genres,
      },
    });
    return res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ err: error });
  }
});

app.get("/api/video", async (req, res) => {
  try {
    const videos = await prisma.video.findMany();
    return res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ err: error });
  }
});

app.delete("/api/video/:id", async (req, res) => {
  try {
    const { id } = req.params; // :idはstringとして扱われる
    await prisma.video.delete({ where: { id: Number(id) } });
    return res.status(200).json({ message: "動画を削除しました" });
  } catch (error) {
    res.status(500).json({ err: error });
  }
});

app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`));
