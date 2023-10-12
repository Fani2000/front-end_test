import { db } from "../collections/index";
export class GrudCarouselModule {
  database;
  constructor() {
    this.database = db;
  }

  async addCarousel(article) {
    const carousel = await this.database.carousel
      .where({
        title: article.title,
        imageUrl: article.imageUrl,
        description: article.description,
      })
      .toArray();

    // CHECK: if the item exists before storing it in the indexed DB
    if (carousel.length === 0)
      await this.database.carousel.add({
        imageUrl: article.imageUrl,
        title: article.title,
        description: article.description,
      });
  }
}
