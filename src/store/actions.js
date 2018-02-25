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

function fetchAllProductsIds() {
  const productListingAPIEndpoint = 'https://www.mon-savonnier.fr/api/products';

  return axios({
    method: 'get',
    url: productListingAPIEndpoint,
    params: {
      ws_key: process.env.WS_KEY,
    },
    transformResponse: [function (data) {
      // Convert data to a JSON object
      const dataAsString = convert.xml2json(data);
      return JSON.parse(dataAsString);
    }, function (data) {
      // Check if object contains data
      if (data.elements) {
        const rawProducts = data.elements[0].elements[0].elements;
        const productIds = [];
        rawProducts.forEach((product) => {
          productIds.push(product.attributes.id);
        });
        return productIds;
      }
      return data;
    }],
  });
}

function fetchAllProducts() {
  return new Promise((resolve) => {
    fetchAllProductsIds()
      .then((response) => {
        const productsIds = response.data;
        const productsPromises = [];
        productsIds.forEach((id) => {
          productsPromises.push(fetchProduct(id));
        });
        // Allow .all to handle rejection.
        // see https://davidwalsh.name/promises-results
        Promise.all(productsPromises.map(p => p.catch(() => undefined))).then((values) => {
          resolve(values);
        });
      });
  });
}

export {
  fetchAllProductsIds,
  fetchAllProducts,
  fetchProduct,
};
