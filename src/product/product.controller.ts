import { Request, Response } from 'express';
import { Responser } from '../utilities';
import { Product } from './product.services';

interface IProduct {
     product_name: string;
     product_code: string;
     category_id: number;
     unit_id: string;

}

const createProduct = async (req: Request, res: Response) => {
     const product = new Product();
     try {
          const { product_code, product_name, category_id, unit_id }: IProduct = req.body;
          const data = await product.createProdcut({
               product_code, product_name, category_id, unit_id,
               callback: (err: any, data: any) => {
                    if (err) {
                         return Responser({
                              res: res,
                              status: 400,
                              body: null,
                              message: err,
                              devMessage: err,
                         });
                    } else if (data) {
                         return Responser({
                              res: res,
                              status: 201,
                              body: data,
                              message: "Product Create Success!",
                              devMessage: "",
                         });
                    } else {
                         return Responser({
                              res: res,
                              status: 500,
                              body: null,
                              message: err,
                              devMessage: err.message,
                         });
                    }
               }
          })
     } catch (error) {
          return Responser({
               res: res,
               status: 500,
               body: null,
               message: error,
               devMessage: error.message,
          });
     }

}

const fetchProduct = async (req: Request, res: Response) => {
     try {
          const product = new Product();
          const data = await product.fetchProduct({
               callback: (err: any, data: any) => {
                    if (err) {
                         return Responser({
                              res: res,
                              status: 400,
                              body: null,
                              message: "Somethin went wrong with product fetch",
                              devMessage: err.message,
                         });
                    } else if (data) {
                         return Responser({
                              res: res,
                              status: 200,
                              body: data,
                              message: "Product Fetch Success!",
                              devMessage: "",
                         });
                    } else {
                         return Responser({
                              res: res,
                              status: 500,
                              body: null,
                              message: err,
                              devMessage: err.message,
                         });
                    }
               }
          })
     } catch (error) {

     }
}
const createProductPriceList = async (req: Request, res: Response) => {
     try {
          const product = new Product();
          const {data} = req.body
          const resData = await product.createProductPriceList({
               data,callback: (err: any, data: any) => {
                    if (err) {
                         return Responser({
                              res: res,
                              status: 400,
                              body: null,
                              message: "Somethin went wrong with product create",
                              devMessage: err.message,
                         });
                    } else if (data) {
                         return Responser({
                              res: res,
                              status: 201,
                              body: data,
                              message: "Product Price List Create Success!",
                              devMessage: "",
                         });
                    } else {
                         return Responser({
                              res: res,
                              status: 500,
                              body: null,
                              message: err,
                              devMessage: err.message,
                         });
                    }
               }
          })
     } catch (error) {

     }
}
export const productController = { createProduct, fetchProduct,createProductPriceList };
