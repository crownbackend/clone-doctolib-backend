import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1695229232259 implements MigrationInterface {
    name = 'Migrations1695229232259'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clinic" ADD "usersId" uuid`);
        await queryRunner.query(`ALTER TABLE "clinic" ADD CONSTRAINT "FK_1903b03689f5ec42b48a7ac23d3" FOREIGN KEY ("usersId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clinic" DROP CONSTRAINT "FK_1903b03689f5ec42b48a7ac23d3"`);
        await queryRunner.query(`ALTER TABLE "clinic" DROP COLUMN "usersId"`);
    }

}
