import { Body, Controller, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async getArticles(
    @Body() body: { filtersState: any; location: any; pageNumber: number },
  ) {
    return this.articlesService.getAllArticles(
      body.filtersState,
      body.location,
      body.pageNumber,
    );
  }

  @Post('/sources')
  async getSources(@Body() body: { filtersState: any }) {
    return this.articlesService.getSources(body.filtersState);
  }
}
