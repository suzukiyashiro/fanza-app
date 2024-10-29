-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "videoLink" TEXT NOT NULL,
    "videoName" TEXT NOT NULL,
    "dmmLink" TEXT NOT NULL,
    "genres" TEXT NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);
