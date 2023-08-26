import { Exclude } from 'class-transformer';

@Exclude()
export class BaseDto {
  @Exclude()
  id: string;

  @Exclude()
  isActive: boolean;

  @Exclude()
  isArchived: boolean;

  @Exclude()
  createDateTime: Date;

  @Exclude()
  createdBy: string;

  @Exclude()
  lastChangedDateTime: Date;

  @Exclude()
  lastChangedBy: string;

  @Exclude()
  internalComment: string | null;
}
