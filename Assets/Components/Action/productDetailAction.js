/**
 * Created by DQ01 on 05/11/2015.
 */
import AppDispatcher from '../Common/Dispatcher'
import request from 'request';

var ProductDetailAction = {
    getProductDetail(productId) {
        var Header = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        var productDetailURL =  'http://localhost:4000/ProductDetail'+'?productId='+ productId;
        request.get({
                url: productDetailURL,
                headers: Header,
                rejectUnauthorized: false
            },
            function (error, response, body) {
                let _data = body;
                AppDispatcher.
                    handleViewAction({
                        actionType: 'GET_PRODUCT_DETAILS_DATA',
                        data: _data
                    });
            });
    }
};

export default ProductDetailAction;
