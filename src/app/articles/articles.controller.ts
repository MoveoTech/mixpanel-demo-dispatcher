import { Body, Controller, Get } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async getArticles(
    @Body() body: { filtersState: any; location: any; pageNumber: number },
  ) {
    return this.articlesService.getAll(
      body.filtersState,
      body.location,
      body.pageNumber,
    );
  }
}
