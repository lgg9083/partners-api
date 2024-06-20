import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { AuthModule } from './auth/auth.module';

@Module({
  providers: [CoreService],
  exports: [CoreService],
  imports: [AuthModule],
})
export class CoreModule {}
