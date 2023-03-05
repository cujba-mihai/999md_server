import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { GetProductsDTO } from './dto/get-products.dto';
import { ListProductsBySubcategoryDTO } from './dto/list-products-by-subcategory';
import { GetByIdDTO } from './dto/get-by-id.dto';
import { GraphQLResolveInfo } from 'graphql';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import createProjection from '../database/projection';
import { ListProductsByCategoryDTO } from './dto/list-products-by-category';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService,
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  @Query(() => [GetProductsDTO])
  getProductsByCategory(
    @Args('listProductByCategoryInput') query: ListProductsByCategoryDTO,
  ) {
    return this.productsService.getProductsByCategory(query);
  }

  @Query(() => [GetProductsDTO])
  getProductsBySubcategory(
    @Args('listProductByCategoryInput') query: ListProductsBySubcategoryDTO,
  ) {
    return this.productsService.getProductsBySubcategory(query);
  }

  @Query(() => [GetProductsDTO])
  async getProducts(@Info() info: GraphQLResolveInfo) {
    // Generate a projection object based on the requested fields
    const { projection, populate } = createProjection(info);
    const productsQuery = this.productModel.find({}, projection);

    if (populate.length) {
      productsQuery.populate(populate);
    }

    const products = await productsQuery.lean().exec();

    return products;
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
  findOne(@Args('_id') _id: GetByIdDTO) {
    return this.productsService.findOne(_id);
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
  removeProduct(@Args('_id') _id: GetByIdDTO) {
    return this.productsService.remove(_id);
  }

  @Mutation(() => Product)
  removeAllProducts() {
    return this.productsService.findAll().then((products) => {
      products.forEach((product) =>
        this.productsService.remove({ _id: product._id }),
      );
    });
  }
}
