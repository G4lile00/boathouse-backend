-- AlterTable
ALTER TABLE "movimentation" ADD COLUMN     "cd_navPlan" INTEGER,
ADD COLUMN     "dt_finished" TIMESTAMP(3),
ADD COLUMN     "dt_opned" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id_finished" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "movimentation" ADD CONSTRAINT "movimentation_cd_navPlan_fkey" FOREIGN KEY ("cd_navPlan") REFERENCES "navagationPlan"("id_navPlan") ON DELETE SET NULL ON UPDATE CASCADE;
