"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useContext, useState } from "react";

import { createContext } from "react";

type CategoryContextType = {
  category: string;
  changeCategory: (value: string) => void;
};

const CategoryContextObj = createContext<CategoryContextType>({
  category: "Beef",
  changeCategory: () => {},
});

export function useCategoryContext() {
  return useContext(CategoryContextObj);
}

function CategoryContext({ children }: { children: ReactNode }) {
  const [category, setCategory] = useState<string>("Beef");

  function handleSetCategory(value: string) {
    setCategory(value);
  }

  const contextValue = {
    category: category,
    changeCategory: handleSetCategory,
  };

  return (
    <CategoryContextObj.Provider value={contextValue}>
      {children}
    </CategoryContextObj.Provider>
  );
}

export default function Providers({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <CategoryContext>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </CategoryContext>
  );
}
