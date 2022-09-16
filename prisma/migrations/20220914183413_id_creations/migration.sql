/*
  Warnings:

  - You are about to drop the column `st_cnpj` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `st_name` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `st_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `st_password` on the `users` table. All the data in the column will be lost.
  - Added the required column `ds_cnpj` to the `company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ds_name` to the `company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "company" DROP COLUMN "st_cnpj",
DROP COLUMN "st_name",
ADD COLUMN     "ds_cnpj" VARCHAR NOT NULL,
ADD COLUMN     "ds_name" VARCHAR NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "st_name",
DROP COLUMN "st_password",
ADD COLUMN     "ds_name" VARCHAR,
ADD COLUMN     "ds_password" VARCHAR,
ADD COLUMN     "id_manager" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "id_operational" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "id_operator" BOOLEAN NOT NULL DEFAULT false;
