class ProductDTO {
  constructor(rawProduct) {
    this.id = rawProduct.id;
    this.title = rawProduct.title;
    this.price = rawProduct.price;
    this.description = rawProduct.description;
    this.discountPercentage = rawProduct.discountPercentage;
    this.rating = rawProduct.rating;
    this.stock = rawProduct.stock;
    this.brand = rawProduct.brand;
    this.category = rawProduct.category;
    this.image = rawProduct.image;
  }

  static fromJson(rawProduct) {
    return new ProductDTO(rawProduct);
  }
}

export default ProductDTO;
