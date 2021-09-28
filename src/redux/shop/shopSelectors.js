import { createSelector } from "reselect";

export const selectCollection = (collectionId) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionId]
  );

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (col) => Object.keys(col).map((k) => col[k])
);
