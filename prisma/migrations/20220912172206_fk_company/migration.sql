-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_cd_company_fkey" FOREIGN KEY ("cd_company") REFERENCES "company"("id_company") ON DELETE RESTRICT ON UPDATE CASCADE;
