import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1694070083729 implements MigrationInterface {
    name = 'Migrations1694070083729'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "price" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isActive" boolean NOT NULL DEFAULT true, "isArchived" boolean NOT NULL DEFAULT false, "createDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" character varying(300) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lastChangedBy" character varying(300) NOT NULL, "internalComment" character varying(300), "name" character varying NOT NULL, "price" double precision NOT NULL, "clinicId" uuid, CONSTRAINT "PK_d163e55e8cce6908b2e0f27cea4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "clinic" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "price" ADD CONSTRAINT "FK_fc507693c3f60f55f40ed21b041" FOREIGN KEY ("clinicId") REFERENCES "clinic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "price" DROP CONSTRAINT "FK_fc507693c3f60f55f40ed21b041"`);
        await queryRunner.query(`ALTER TABLE "clinic" ADD "price" double precision NOT NULL`);
        await queryRunner.query(`DROP TABLE "price"`);
    }

}
