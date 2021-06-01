import { PublicConfigKey } from '@/constants/public_config';

export interface PublicConfig {
  key: PublicConfigKey;
  value: string;
  description: string;
}
