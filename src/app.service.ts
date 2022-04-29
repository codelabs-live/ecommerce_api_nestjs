import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to new api';
  }

  getMyName(): string {
    return 'Kamlesh';
  }
}
