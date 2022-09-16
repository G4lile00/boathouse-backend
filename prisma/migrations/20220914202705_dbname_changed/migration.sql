/*
  Warnings:

  - You are about to drop the `moveStatus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "movimentation" DROP CONSTRAINT "movimentation_cd_move_status_fkey";

-- DropForeignKey
ALTER TABLE "navagation_plan" DROP CONSTRAINT "navagation_plan_cd_move_status_fkey";

-- DropTable
DROP TABLE "moveStatus";

-- CreateTable
CREATE TABLE "move_status" (
    "id_status" SERIAL NOT NULL,
    "ds_status" VARCHAR NOT NULL,

    CONSTRAINT "move_status_pkey" PRIMARY KEY ("id_status")
);

-- AddForeignKey
ALTER TABLE "movimentation" ADD CONSTRAINT "movimentation_cd_move_status_fkey" FOREIGN KEY ("cd_move_status") REFERENCES "move_status"("id_status") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "navagation_plan" ADD CONSTRAINT "navagation_plan_cd_move_status_fkey" FOREIGN KEY ("cd_move_status") REFERENCES "move_status"("id_status") ON DELETE RESTRICT ON UPDATE CASCADE;
