import create from './http-service';

export interface type {
  id: number;
  name: string;
}

export default create('/users');
