-- CreateTable
CREATE TABLE "location" (
    "id_location" SERIAL NOT NULL,
    "ds_location" VARCHAR NOT NULL,
    "cd_company" INTEGER NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id_location")
);

-- CreateTable
CREATE TABLE "moveStatus" (
    "id_status" SERIAL NOT NULL,
    "ds_status" VARCHAR NOT NULL,

    CONSTRAINT "moveStatus_pkey" PRIMARY KEY ("id_status")
);

-- CreateTable
CREATE TABLE "movimentation" (
    "id_movimentation" SERIAL NOT NULL,
    "cd_moveStatus" INTEGER NOT NULL,

    CONSTRAINT "movimentation_pkey" PRIMARY KEY ("id_movimentation")
);

-- CreateTable
CREATE TABLE "navagationPlan" (
    "id_navPlan" SERIAL NOT NULL,
    "qt_crew" INTEGER NOT NULL,
    "qt_passengers" INTEGER NOT NULL,
    "dt_departure" TIMESTAMP(3) NOT NULL,
    "dt_arrival" TIMESTAMP(3),
    "ds_observation" VARCHAR,
    "cd_destiny" INTEGER NOT NULL,
    "cd_user" INTEGER NOT NULL,
    "cd_company" INTEGER NOT NULL,
    "cd_moveStatus" INTEGER NOT NULL,

    CONSTRAINT "navagationPlan_pkey" PRIMARY KEY ("id_navPlan")
);

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "location_cd_company_fkey" FOREIGN KEY ("cd_company") REFERENCES "company"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movimentation" ADD CONSTRAINT "movimentation_cd_moveStatus_fkey" FOREIGN KEY ("cd_moveStatus") REFERENCES "moveStatus"("id_status") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "navagationPlan" ADD CONSTRAINT "navagationPlan_cd_user_fkey" FOREIGN KEY ("cd_user") REFERENCES "users"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "navagationPlan" ADD CONSTRAINT "navagationPlan_cd_company_fkey" FOREIGN KEY ("cd_company") REFERENCES "company"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "navagationPlan" ADD CONSTRAINT "navagationPlan_cd_destiny_fkey" FOREIGN KEY ("cd_destiny") REFERENCES "location"("id_location") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "navagationPlan" ADD CONSTRAINT "navagationPlan_cd_moveStatus_fkey" FOREIGN KEY ("cd_moveStatus") REFERENCES "moveStatus"("id_status") ON DELETE RESTRICT ON UPDATE CASCADE;
