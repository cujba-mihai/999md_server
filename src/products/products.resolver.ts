import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { GetProductsDTO } from './dto/get-products.dto';
import { ListProductsBySubcategoryDTO } from './dto/list-products-by-subcategory';
import { GetByIdDTO } from './dto/get-by-id.dto';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(() => [GetProductsDTO])
  getProductsBySubcategory(
    @Args('listProductByCategoryInput') query: ListProductsBySubcategoryDTO,
  ) {
    return this.productsService.getProductsBySubcategory(query);
  }

  @Query(() => [GetProductsDTO])
  getProducts() {
    return this.productsService.getProducts();
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productsService.create(createProductInput);
  }

  @Query(() => [Product], { name: 'products' })
  findAll() {
    return this.productsService.findAll();
  }

  @Query(() => GetProductsDTO, { name: 'product' })
  findOne(@Args('id') id: GetByIdDTO) {
    return this.productsService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productsService.update(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @Mutation(() => Product)
  removeProduct(@Args('id') id: GetByIdDTO) {
    return this.productsService.remove(id);
  }

  @Mutation(() => Product)
  removeAllProducts() {
    return this.productsService.findAll().then((products) => {
      products.forEach((product) => this.productsService.remove(product.id));
    });
  }
}
