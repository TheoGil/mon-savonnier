import axios from 'axios';
import convert from 'xml-js';

function fetchProduct(id) {
  const APIEndpoint = `https://www.mon-savonnier.fr/api/products/${id}`;

  return axios({
    method: 'get',
    url: APIEndpoint,
    params: {
      ws_key: process.env.WS_KEY,
    },
    transformResponse: [function (data) {
      // Convert data to a JSON object
      const dataAsString = convert.xml2json(data, { compact: true });
      return JSON.parse(dataAsString);
    }, function (data) {
      // Check if object contains data
      if (data.prestashop) {
        return data.prestashop.product;
      }
      return data;
    }],
  });
}

function fetchAllProducts() {
  const allProductsAPIEndpoint = 'https://www.mon-savonnier.fr/api/products/';
  return axios({
    method: 'get',
    url: allProductsAPIEndpoint,
    params: {
      ws_key: process.env.WS_KEY,
      display: 'full',
    },
    transformResponse: [transformFetchAllProductsResponse],
  });
}

function transformFetchAllProductsResponse(XMLResponse) {
  const JSONResponse = JSON.parse(convert.xml2json(XMLResponse, { compact: true }));
  return JSONResponse.prestashop.products.product;
}

export {
  fetchAllProducts,
  fetchProduct,
};
