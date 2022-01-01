import {
  Generated,
  PrimaryColumn,
  ValueTransformer,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Constructor } from './constructor';

export class BigintValueTransformer implements ValueTransformer {
  to(entityValue: number) {
    return entityValue;
  }

  from(databaseValue: string): number {
    return parseInt(databaseValue, 10);
  }
}

export function IdEntity<TId extends Constructor>(Id: TId) {
  abstract class AbstractEntity extends Id {
    @Generated('increment')
    @PrimaryColumn({
      type: 'bigint',
      transformer: new BigintValueTransformer(),
    })
    id!: number;
  }

  return AbstractEntity;
}

export function StatusEntity<TStatus extends Constructor>(Status: TStatus) {
  abstract class AbstractEntity extends Status {
    @Column({ nullable: false, default: true })
    status!: boolean;
  }
  return AbstractEntity;
}

export function TimeEntity<TBaseTime extends Constructor>(BaseTime: TBaseTime) {
  abstract class AbstractEntity extends BaseTime {
    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt!: Date;

    @Column({ type: 'timestamp', nullable: true })
    deletedAt?: Date | null;
  }

  return AbstractEntity;
}

export function UuidEntity<TUuid extends Constructor>(Uuid: TUuid) {
  abstract class AbstractEntity extends Uuid {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  }

  return AbstractEntity;
}

export class EmptyEntity {}
