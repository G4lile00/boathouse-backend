/*
  Warnings:

  - You are about to drop the column `cd_navPlan` on the `movimentation` table. All the data in the column will be lost.
  - The primary key for the `navagation_plan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_navPlan` on the `navagation_plan` table. All the data in the column will be lost.
  - The primary key for the `ship_client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_clienteMariner` on the `ship_client` table. All the data in the column will be lost.
  - The primary key for the `ship_mariner` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_clienteMariner` on the `ship_mariner` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "movimentation" DROP CONSTRAINT "movimentation_cd_navPlan_fkey";

-- AlterTable
ALTER TABLE "movimentation" DROP COLUMN "cd_navPlan",
ADD COLUMN     "cd_nav_plan" INTEGER;

-- AlterTable
ALTER TABLE "navagation_plan" DROP CONSTRAINT "navagation_plan_pkey",
DROP COLUMN "id_navPlan",
ADD COLUMN     "id_nav_plan" SERIAL NOT NULL,
ADD CONSTRAINT "navagation_plan_pkey" PRIMARY KEY ("id_nav_plan");

-- AlterTable
ALTER TABLE "ship_client" DROP CONSTRAINT "ship_client_pkey",
DROP COLUMN "id_clienteMariner",
ADD COLUMN     "id_cliente_mariner" SERIAL NOT NULL,
ADD CONSTRAINT "ship_client_pkey" PRIMARY KEY ("id_cliente_mariner");

-- AlterTable
ALTER TABLE "ship_mariner" DROP CONSTRAINT "ship_mariner_pkey",
DROP COLUMN "id_clienteMariner",
ADD COLUMN     "id_cliente_mariner" SERIAL NOT NULL,
ADD CONSTRAINT "ship_mariner_pkey" PRIMARY KEY ("id_cliente_mariner");

-- AddForeignKey
ALTER TABLE "movimentation" ADD CONSTRAINT "movimentation_cd_nav_plan_fkey" FOREIGN KEY ("cd_nav_plan") REFERENCES "navagation_plan"("id_nav_plan") ON DELETE SET NULL ON UPDATE CASCADE;
