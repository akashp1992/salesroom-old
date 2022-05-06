import React, { useContext } from "react";
import globalContext from "../../../../context/globalContext";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { useSingleProductQuery, useUpdateProductMutation } from "../../../../store/services/productServices/productServices";
const ValidatedLoginForm = ({ setOpenTab }) => {
  const { selectCategory, productName, setProductData, productData } =
    useContext(globalContext);
  const { productId } = useParams();
  const { data:getProduct, isLoading, isSuccess } = useSingleProductQuery({
    productId,
  });
  const [updateProductInfo, result] = useUpdateProductMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const { currency, price, productDescription, productUniqueId } = data;
    setProductData({
      priceInfo: {
        currency,
        price,
      },
      productDescription,
      productUniqueId,
    });
    if(isSuccess){
      const productUpdateData = {
        ...productData,
        businessId:"43652f2d-7324-43be-bd81-34f2af6e34a6",
        categoryId:getProduct?.categoryId
      }    
      updateProductInfo(productUpdateData)
      reset();
      navigate("/dashboard/products");
    }else{
      setOpenTab("Uploads");
    }
    reset();
  };
  console.log(getProduct);
  return (
    <div className="max-w-[800px]">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {/* 1 */}
        <div className="">
          <label htmlFor="Category">Category</label>
          <input
            className="text-sm border-2 border-gray-300 outline-none "
            type="text"
            defaultValue={selectCategory}
            placeholder="Category"
            {...register("Category", { required: true })}
            readOnly
          />
          {errors.Category && (
            <span className="text-red-500 text-sm">Required</span>
          )}
        </div>
        {/* 2 */}
        <div className="">
          <label htmlFor="ProductId">Product Id</label>
          <input
            className="text-sm border-2 border-gray-300 outline-none "
            type="text"
            defaultValue={isSuccess ? getProduct?.productUniqueId : null}
            placeholder="Product Id"
            {...register("productUniqueId", { required: true })}
          />
          {errors.productUniqueId && (
            <span className="text-red-500 text-sm">Required</span>
          )}
        </div>
        <div className="header mt-8">
          <h5 className="text-[20px] font-bold">Product Info</h5>
        </div>
        <label htmlFor="currency">Selling Price ( Optional )</label>
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-1">
            {/* 1 */}
            <input
              className="text-sm border-2 border-gray-300 outline-none "
              type="text"
              placeholder="INR"
              defaultValue="INR"
              readOnly
              {...register("currency")}
            />
          </div>
          <div className="col-span-4">
            {/* 2 */}
            <input
              className="text-sm border-2 border-gray-300 outline-none"
              placeholder="SellingPrice"
              defaultValue={isSuccess ? getProduct?.priceInfo.price : null}
              type="number"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-red-500 text-sm">Required</span>
            )}
          </div>
        </div>

        {/* 3 */}
        <div className="col-span-5">
          <label htmlFor="ProductName">Product Name</label>
          <input
            className="text-sm border-2 border-gray-300 outline-none"
            type="text"
            defaultValue={isSuccess ? getProduct?.productName : productName}
            placeholder="Product Name"
            {...register("ProductName", { required: true })}
            readOnly
          />
          {errors.ProductName && (
            <span className="text-red-500 text-sm">Required</span>
          )}
        </div>
        {/* 4 */}
        <div className="col-span-5">
          <label htmlFor="ProductTagline">Product Tagline</label>
          <input
            className="text-sm border-2 border-gray-300 outline-none "
            type="text"
            placeholder="Product Tagline"
            defaultValue={isSuccess ? getProduct?.tagline : null}
            {...register("ProductTagline", { required: true })}
          />
          {errors.ProductTagline && (
            <span className="text-red-500 text-sm">Required</span>
          )}
        </div>
        {/* 5 */}
        <div className="col-span-5">
          <label htmlFor="Description">Description</label>
          <textarea
            className="text-sm border-2 border-gray-300 outline-none"
            type="text"
            defaultValue={isSuccess ? getProduct?.productDescription : null}
            placeholder="Description"
            rows={5}
            {...register("productDescription", { required: true })}
          />
          {errors.productDescription && (
            <span className="text-red-500 text-sm">Required</span>
          )}
        </div>
        <div className="w-full flex justify-end py-7">
          {isSuccess ? (
            <>
              {/* <button type="submit" className="btn-black text-[20px] px-6 py-1 mr-5">
                Next
              </button> */}
              <button type="submit" className="btn-black text-[20px] px-6 py-1">
                Save
              </button>
            </>
          ) : (
            <button type="submit" className="btn-black text-[20px] px-6 py-1">
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ValidatedLoginForm;
