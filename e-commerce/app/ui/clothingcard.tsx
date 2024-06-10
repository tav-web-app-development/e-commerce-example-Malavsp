import Image from "next/image";
import React from "react";

export default function ClothingCard({ cloth }: any) {
  return (
    <div>
      <div className="flex font-sans m-3 p-6 border">
        <div className="flex-none w-48 relative">
          <Image
            src={""}
            alt={cloth.name}
            className="absolute inset-0 w-full h-full object-cover border"
            loading="lazy"
            width={2}
            height={2}
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              {cloth.name}
            </h1>
            <div className="text-lg font-semibold text-slate-500">
              ${cloth.price}
            </div>
            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
              {cloth.inStock ? "In Stock" : <s>In Stock</s>}
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm">
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="xs"
                  checked
                />
                {cloth.sizes.map((s: any) => (
                  <div
                    key={s}
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-2 text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white"
                  >
                    {s}
                  </div>
                ))}
              </label>
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                type="button"
              >
                Add to bag
              </button>
            </div>
            <button
              className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
              type="button"
              aria-label="Like"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p className="text-sm text-slate-700">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </div>
  );
}
