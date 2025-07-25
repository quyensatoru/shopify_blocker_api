import { Controller, Post } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {
  constructor() {}

  @Post('orders/paid')
  async ordersPaid() {}

  @Post('app/uninstalled')
  async appUninstalled() {}
}
