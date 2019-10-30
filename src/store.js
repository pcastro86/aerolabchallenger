import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import api from "./utils/api";
import { composeWithDevTools } from "redux-devtools-extension";

const INITAIL_STATE = {
  products: [],
  loading: false,
  error: null,
  user: "",
  product: {},
  image: "",
  historyShop: [],
  cost: "",
  points: "",
  isRedeem: false
};


// REDUCER

function productsReducer(state = INITAIL_STATE, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }

    case "FETCH_PRODUCTS_SUCCESS": {
      const { products } = action.payload;
      return {
        ...state,
        products,
        loading: false
      };
    }

    case "FETCH_FAILURE": {
      const { error } = action.payload;
      return {
        ...state,
        error,
        loading: false
      };
    }

    case "FETCH_USER_SUCCESS": {
      const { user } = action.payload;
      return {
        ...state,
        user,
        loading: false
      };
    }

    case "FETCH_PRODUCT_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }

    case "FETCH_PRODUCT_SUCCESS": {
      const { product } = action.payload;
      return {
        ...state,
        product,
        loading: false
      };
    }

    case "FETCH_IMAGE": {
      const { image } = action.payload;
      return {
        ...state,
        image
      };
    }
    case "CLEAN_IMAGE": {
      return {
        ...state,
        image: INITAIL_STATE.image
      };
    }

    case "CLEAN_PRODUCT_STORE": {
      return {
        ...state,
        product: INITAIL_STATE.product
      };
    }

    case "FETCH_SHOP_HISTORY": {
      const { historyShop } = action.payload;
      return {
        ...state,
        historyShop
      };
    }

    case "FETCH_PRODUCT_POINTS": {
      const { cost } = action.payload;
      return {
        ...state,
        cost
      };
    }

    case "FETCH_USER_POINTS": {
      const { points } = action.payload;
      return {
        ...state,
        points
      };
    }

    case "IS_REDEEM": {
      const status = state.points - state.cost < 0 ? false : true;
      return {
        ...state,
        isRedeem: status
      };
    }

    case "FETCH_REDEEM_REQUEST": {
      return {
        ...state
      };
    }

    case "FETCH_REDEEM_SUCCESS": {
      const { products } = action.payload;
      return {
        ...state,
        products
      };
    }

    case "FETCH_ADD_POINTS_REQUEST": {
      return {
        ...state,
        loading: true
      };
    }

    case "FETCH_ADD_POINTS_SUCCESS": {
      const { newPoints } = action.payload;
      return {
        ...state,
        newPoints,
        loading: false
      };
    }

    case "SORT_HIGHEST": {
      const { products } = action.payload;
      const productsSort = products.sort((a, b) => {
        if (a.cost > b.cost) return -1;
        if (a.cost < b.cost) return 1;
        return 0;
      });
      return {
        ...state,
        products: productsSort,
        loading: false
      };
    }

    case "SORT_LOWEST": {
      const { products } = action.payload;
      const productsSort = products.sort((a, b) => {
        if (a.cost < b.cost) return -1;
        if (a.cost > b.cost) return 1;
        return 0;
      });
      return {
        ...state,
        products: productsSort,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
}


// ACTIONS

const fetchProductsRequestAction = () => {
  return { type: "FETCH_PRODUCTS_REQUEST" };
};

const fetchProductsSuccessAction = products => {
  return { type: "FETCH_PRODUCTS_SUCCESS", payload: { products } };
};

const fetchFailureAction = error => {
  return { type: "FETCH_FAILURE", payload: error };
};

const fetchUserSuccessAction = user => {
  return { type: "FETCH_USER_SUCCESS", payload: { user } };
};

const fetchProductRequestAction = () => {
  return { type: "FETCH_PRODUCT_REQUEST" };
};

const fetchProductSuccessAction = product => {
  return { type: "FETCH_PRODUCT_SUCCESS", payload: { product } };
};

const fetchImageAction = image => {
  return { type: "FETCH_IMAGE", payload: { image } };
};

const cleanProductStoreAction = () => {
  return { type: "CLEAN_PRODUCT_STORE" };
};

const cleanImageAction = () => {
  return { type: "CLEAN_IMAGE" };
};

const fetchShopHistoryAction = historyShop => {
  return { type: "FETCH_SHOP_HISTORY", payload: { historyShop } };
};

const fetchProductPointsAction = cost => {
  return { type: "FETCH_PRODUCT_POINTS", payload: { cost } };
};

const fetchUserPointsAction = points => {
  return { type: "FETCH_USER_POINTS", payload: { points } };
};

const isRedeemActionAction = () => {
  return { type: "IS_REDEEM" };
};

const fetchRedeemRequestAction = () => {
  return { type: "FETCH_REDEEM_REQUEST" };
};

const fetchRedeemSuccessAction = () => {
  return { type: "FETCH_REDEEM_SUCCESS" };
};

const sortHighestAction = products => {
  return { type: "SORT_HIGHEST", payload: { products } };
};

const sortLowestAction = products => {
  return { type: "SORT_LOWEST", payload: { products } };
};


// THUNK
const getProductsRequest = () => {
  return async function(dispatch) {
    try {
      dispatch(fetchProductsRequestAction());
      const products = await api.getProducts();
      dispatch(fetchProductsSuccessAction(products));
    } catch (error) {
      dispatch(fetchFailureAction(error));
    }
  };
};

const getUserRequest = () => {
  return async function(dispatch) {
    try {
      dispatch(fetchProductsRequestAction());
      const user = await api.getUser();
      dispatch(fetchUserSuccessAction(user));
      dispatch(fetchUserPointsAction(user.points));
    } catch (error) {
      dispatch(fetchFailureAction(error));
    }
  };
};

const getProductRequest = id => {
  return async function(dispatch) {
    try {
      dispatch(fetchProductRequestAction());
      const products = await api.getProducts();
      const product = products.find(item => item._id === id);
      dispatch(fetchProductSuccessAction(product));
      dispatch(fetchImageAction(product.img.url));
      dispatch(fetchProductPointsAction(product.cost));
      dispatch(isRedeemStatus());
    } catch (error) {
      dispatch(fetchFailureAction(error));
    }
  };
};

const getProductStoreInital = () => {
  return async function(dispatch) {
    try {
      dispatch(cleanProductStoreAction());
      dispatch(cleanImageAction())
    } catch (error) {
      dispatch(fetchFailureAction(error));
    }
  };
};

const getShopHistory = () => {
  return async function(dispatch) {
    try {
      const response = await api.getHistory();
      dispatch(fetchShopHistoryAction(response));
    } catch (error) {
      dispatch(fetchFailureAction(error));
    }
  };
};

const getUpdatePoints = total => {
  return async function(dispatch) {
    try {
      dispatch(fetchUserPointsAction(total));
    } catch (error) {
      dispatch(fetchFailureAction(error));
    }
  };
};

const isRedeemStatus = () => {
  return async function(dispatch) {
    try {
      dispatch(isRedeemActionAction());
    } catch (error) {
      dispatch(fetchFailureAction(error));
    }
  };
};

const getRedeemRequest = id => {
  return async function(dispatch) {
    try {
      dispatch(fetchRedeemRequestAction());
      const buyStatus = await api.redeemProduct(id);
      dispatch(fetchRedeemSuccessAction(buyStatus));
    } catch (error) {
      dispatch(fetchFailureAction(error));
    }
  };
};

const getNewPointsRequest = () => {
  return async function(dispatch) {
    try {
      const newPoints = await api.addPoints();
      dispatch(fetchUserPointsAction(newPoints["New Points"]));
      dispatch(isRedeemActionAction());
    } catch (error) {
      dispatch(fetchFailureAction(error));
    }
  };
};

const getsortLowest = () => {
  return async function(dispatch) {
    try {
      dispatch(fetchProductsRequestAction());
      const products = await api.getProducts();
      dispatch(sortLowestAction(products));
    } catch (error) {
      dispatch(fetchFailureAction(error));
    }
  };
};

const getsortHighest = () => {
  return async function(dispatch) {
    try {
      dispatch(fetchProductsRequestAction());
      const products = await api.getProducts();
      dispatch(sortHighestAction(products));
    } catch (error) {
      dispatch(fetchFailureAction(error));
    }
  };
};





const store = createStore(
  productsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export {
  store as default,
  getProductsRequest,
  getUserRequest,
  getProductRequest,
  getProductStoreInital,
  getShopHistory,
  getUpdatePoints,
  getRedeemRequest,
  getNewPointsRequest,
  getsortHighest,
  getsortLowest
};
