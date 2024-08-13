// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v4.25.2
// source: proto/category.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "categories";

export interface Category {
  id: number;
  name: string;
  description: string;
  parentId: number;
}

export interface GetCategoryRequest {
  id: number;
}

export interface CreateCategoryRequest {
  category: Category | undefined;
}

export interface UpdateCategoryRequest {
  category: Category | undefined;
}

export interface DeleteCategoryRequest {
  id: number;
}

export interface ListCategoriesRequest {
}

export interface ListCategoriesResponse {
  categories: Category[];
}

export const CATEGORIES_PACKAGE_NAME = "categories";

export interface CategoryServiceClient {
  getCategory(request: GetCategoryRequest): Observable<Category>;

  createCategory(request: CreateCategoryRequest): Observable<Category>;

  updateCategory(request: UpdateCategoryRequest): Observable<Category>;

  deleteCategory(request: DeleteCategoryRequest): Observable<Category>;

  listCategories(request: ListCategoriesRequest): Observable<ListCategoriesResponse>;
}

export interface CategoryServiceController {
  getCategory(request: GetCategoryRequest): Promise<Category> | Observable<Category> | Category;

  createCategory(request: CreateCategoryRequest): Promise<Category> | Observable<Category> | Category;

  updateCategory(request: UpdateCategoryRequest): Promise<Category> | Observable<Category> | Category;

  deleteCategory(request: DeleteCategoryRequest): Promise<Category> | Observable<Category> | Category;

  listCategories(
    request: ListCategoriesRequest,
  ): Promise<ListCategoriesResponse> | Observable<ListCategoriesResponse> | ListCategoriesResponse;
}

export function CategoryServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "getCategory",
      "createCategory",
      "updateCategory",
      "deleteCategory",
      "listCategories",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("CategoryService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("CategoryService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CATEGORY_SERVICE_NAME = "CategoryService";
