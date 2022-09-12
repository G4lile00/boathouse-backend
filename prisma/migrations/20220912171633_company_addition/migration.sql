-- CreateTable
CREATE TABLE "users" (
    "id_user" SERIAL NOT NULL,
    "st_name" VARCHAR,
    "st_password" VARCHAR,
    "cd_company" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "company" (
    "id_company" SERIAL NOT NULL,
    "st_name" VARCHAR NOT NULL,
    "st_cnpj" VARCHAR NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id_company")
);
